from pymongo import MongoClient
import web
import certifi
ca = certifi.where()

uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"

client = MongoClient(uri, tlsCAFile=ca)
db = client["schedule-builder"]

# course_collection = db['courses']
# course_map = web.scrape_courses()
# # print(course_map)

# result = course_collection.insert_many(course_map.values())

# course_map = web.scrape_course_schedule_fa2024()
