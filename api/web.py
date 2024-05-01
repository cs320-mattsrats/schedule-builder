from bs4 import BeautifulSoup, Tag
from datetime import datetime
import requests
import re
from unidecode import unidecode

def clean_text(s: str):
    for r in ['\xa0', '\n', '\t']:
        s = s.replace(r, ' ')

    while '  ' in s:
        s = s.replace("  ", ' ')

    return s.strip()


def unicode_text_of(elem: Tag):
    return clean_text(unidecode(elem.text))


def text_of(elem: Tag) -> str:
    return clean_text(elem.text)

def scrape(url: str):
    try: 
        res = requests.get(url)
        return BeautifulSoup(res.content, "html5lib")
    except requests.ConnectionError:
        return None
    
def get_course_frequency():
    # cics course frequency
    soup = scrape("https://web.cs.umass.edu/csinfo/autogen/cmpscicoursesfull.html")
    course_tr_list = soup.select("tr:not(:first-child)")

    def cics_course_frequency(elem: Tag):
        return (
            '%s %s' % (
                text_of(elem.select_one("td:first-child")),
                text_of(elem.select_one("td:nth-child(2)"))
            ),
            text_of(elem.select_one("td:last-child"))
        )

    course_frequency = list(map(cics_course_frequency, course_tr_list))

    # math course frequency
    soup = scrape("https://www.math.umass.edu/course-offerings")
    course_tr_list = soup.select("tr:not(:only-child)")

    def math_course_frequency(elem: Tag):
        freq = text_of(elem.select_one("td:last-child"))
        if freq == "Fall/Spring/Summer":
            freq = "Fall, Spring, and Summer"
        else:
            freq = freq.replace('/', " and ").replace("  ", ' ')

        return (text_of(elem.select_one("td:first-child")).upper(), freq)

    course_frequency.extend(map(math_course_frequency, course_tr_list))

    return course_frequency

def scrape_courses():
    course_map = {}

    # CICS Courses
    current_year = int(datetime.now().year) % 2000 + 1

    for year in range(current_year, 17, -1):
        for query_id in [7, 3]:
            soup = scrape(f"https://web.cs.umass.edu/csinfo/autogen/cicsdesc1{year}{query_id}.html")
            if not soup or (soup.title and soup.title.text == "404 Not Found"):
                continue

            for header in soup.select("h2:not(:first-child)"):
                raw_title = text_of(header.select_one(":first-child"))
                title_match = re.match(
                    r'^(CICS|COMPSCI|INFO|INFOSEC)\s*(\w+):\s*([\w -:]+)',
                    raw_title, re.IGNORECASE)
                if not title_match or title_match.group(1) == 'INFOSEC':
                    continue

                course_subject = title_match.group(1)
                course_id = (
                    course_subject + ' ' + title_match.group(2)
                ).upper()

                session_staff = set()
                next_sibling = list(header.next_siblings)[1]
                if next_sibling.name == 'h3':
                    if instructor_match := re.match(
                        r'^(Instructor\(s\): )(.+)',
                        text_of(next_sibling), re.IGNORECASE
                    ):
                        name_list = instructor_match.group(2).split(", ")

                        for name in name_list:
                            if not re.match(r'Staff', name, re.IGNORECASE):
                                session_staff.add(unidecode(name.strip()))

                if course_id in course_map:
                    course_staff = course_map[course_id]['staff']

                    for name in session_staff:
                        course_staff.add(name)
                else:
                    course_title = title_match.group(3)
                    course_description = text_of(header.find_next_sibling("p"))

                    course = {
                        'subject': course_subject,
                        'id': course_id,
                        'number': course_id.split()[1],
                        'title': course_title,
                        'description': course_description,
                        'staff': session_staff,
                    }

                    course_website = header.select_one("a")['href']
                    if len(course_website) > 0:
                        course['website'] = course_website

                    course_map[course_id] = course

    for course in course_map.values():
        course['staff'] = list(course['staff'])

    # MATH Courses
    soup = scrape("https://www.math.umass.edu/course-descriptions")
    first_option = soup.select_one("#edit-semester-tid > option:first-child")

    start = int(first_option['value'])
    for i in range(start - 10, start + 1):
        soup = scrape(f"https://www.math.umass.edu/course-descriptions?semester_tid={i}")

        for article in soup.select("div > article"):
            raw_title = text_of(
                article.select_one("div[class^='field-title']")
            )

            title_match = re.match(
                r'^(MATH|STAT|HONORS)\s*(\w+)(\.\d*)?:\s*([\w -:]+)',
                raw_title,
                re.IGNORECASE
            )

            if not title_match or title_match.group(1) == 'HONORS':
                continue

            course_subject = title_match.group(1)
            if course_subject == 'STAT':
                course_subject = 'STATISTIC'

            course_id = (course_subject + ' ' + title_match.group(2)).upper()
            if course_id in course_map:
                continue

            course_title = title_match.group(4)
            course_description = text_of(article.select_one(
                "div[class^='field-course-descr-description']"
            ))

            course = {
                'subject': course_subject,
                'id': course_id,
                'number': course_id.split()[1],
                'title': course_title,
                'description': course_description,
            }

            course_prereqs = article.select_one(
                "div[class^='field-course-descr-prereq']"
            )
            if course_prereqs:
                course['enrollmentRequirement'] = "Prerequisites: " + re.sub(
                    r"\s*prereq(uisite)?(s)?(:)?",
                    "",
                    text_of(course_prereqs),
                    flags=re.I
                ).strip()

            course_map[course_id] = course

    for (course_id, freq) in get_course_frequency():
        if course_id in course_map:
            course_map[course_id]['frequency'] = freq

    return course_map

def scrape_course_schedule_fa2024():
    url = 'https://www.cics.umass.edu/content/fall-24-course-schedule'
    response = requests.get(url)
    
    if response.status_code == 200:
        soup = scrape(url)
        # Here, you'd write code to parse the specific data you want from the soup object
        # print(soup)
        # For example, let's say you want to get all course titles
        # course_titles = [title.text for title in soup.find_all('h2', class_='title')]
        
        # # Store the data in MongoDB
        # courses_collection = mongo.db.courses
        # for title in course_titles:
        #     courses_collection.insert_one({'title': title})
        
        return 'Data scraped and stored successfully!'
    else:
        return 'Error scraping data'
