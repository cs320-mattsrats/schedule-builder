from pymongo import MongoClient
import web

uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"

client = MongoClient(uri)
db = client["schedule-builder"]

# course_collection = db['courses']
# course_map = web.scrape_courses()
# # print(course_map)

# result = course_collection.insert_many(course_map.values())