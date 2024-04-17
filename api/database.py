from pymongo import MongoClient

uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"

db = MongoClient(uri)["schedule-builder"]