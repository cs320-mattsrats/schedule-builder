# This script is used to generate and upload fake comments for each course

from database import db
import random
from string import Template

num_of_comments: int = 8

course_collection = db['courses']
comment_collection = db['comments']

vowels_str = 'aeiou'
consonants_str = 'bcdfghjklmnpqrstvwxyz'
adjectives_positive: list[str] = ['godlike', 'okay', 'amazing', 'crazy', 'awesome', 'cool', 'okay', 'informative', 
                       'easy', 'informative', 'inspiring','stimulating','enlightening','rewarding',
                       'fascinating','challenging','interactive', 'thought-provoking', 'exciting'
]
adjectives_negative: list[str] = ['horrible', 'terrible', 'boring', 
                       'confusing', 'overwhelming', 'difficult', 'bad', 'crummy', 'vile']
comment_templates_good: list[str] = [
    'This was the best course ever!',
    'This was $gram_a_g $adjective_good course!',
    'I would take this course again if I could!',
    '$course_id was $gram_a_g $adjective_good class!',
    '$course_id was $adjective_good!',
    'I hope professor $professor_last offers this course again!',
    '$adjective_good',
    '$adjective_good!'
]
comment_templates_bad: list[str] = [
    'This was a $adjective_bad course!', 
    'I would never take this course again!',
    '$course_id was $gram_a_b $adjective_bad class!',
    '$course_id was $adjective_bad!',
    'I want this course to be thrown in jail',
    'I hope professor $professor_last never offers this course again!',
    '$adjective_bad',
    '$adjective_bad!'
]

# commennt_type: str -> Is the comment positve('good')/negative('bad')
# course:str -> Course this comment correlates to(i.e. "CICS 160")
# Generates a single comment for a coruse given if the comment should be good/bad 
def generate_comment(comment_type: str, course: str, course_info):
    adj_good = random.choice(adjectives_positive)
    adj_bad = random.choice(adjectives_negative)

    try:
        professor_last = random.choice(course_info["staff"]).split(" ")[1]
    except Exception:
        professor_last = "what's his name"

    args = {"adjective_good": adj_good,
            "adjective_bad": adj_bad,
            "gram_a_g": "an" if adj_good[0] in vowels_str else 'a',
            "gram_a_b": "an" if adj_bad[0] in vowels_str else 'a',
            "professor_last": professor_last,
            "course_id": course
}
    if comment_type == 'good':
        comment = Template(random.choice(comment_templates_good))
        return comment.safe_substitute(**args)
    if comment_type == 'bad':
        comment = Template(random.choice(comment_templates_bad))
        return comment.safe_substitute(**args)

# Generates {amt} comments for course, where prop is the probality of a positive comment
def generate_comments(course: str, amt: int, prop: float=0.5):
    course_info = course_collection.find_one({"id": course})
    comment_type = random.choices(["good", "bad"], weights=[prop, 1-prop], k=amt)
    comments = [generate_comment(comtype, course, course_info) for comtype in comment_type]
    return comments

def upload_to_db(course: str, comments: list[str]):
    comment_collection.update_one({"id": course}, 
                                  {"$set": {"comments": comments}},
                                upsert=True)


courses = course_collection.find({}, {"id": True, "_id": False})

for course in courses:
    generated_comments = generate_comments(course["id"], 10)
    print(course["id"])
    upload_to_db(course["id"], generated_comments)




    



