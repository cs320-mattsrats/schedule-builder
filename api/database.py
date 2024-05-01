from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import web

uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["schedule-builder"]

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# course_collection = db['courses']
# course_map = web.scrape_courses()
# # print(course_map)

# result = course_collection.insert_many(course_map.values())

# course_map = web.scrape_course_schedule_fa2024()
