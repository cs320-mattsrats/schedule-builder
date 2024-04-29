from flask import Flask, request, jsonify
from flask_cors import CORS
# from calendar_blueprint import calendar
from database import db

app = Flask(__name__)

collection = db["courses"]

# app.register_blueprint(calendar)
CORS(app)
@app.route('/')
def index():
    return 'Hello, Flask!'


# # Logging
# import logging
# from pymongo import MongoClient
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# # uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"
# uri = "mongodb+srv://trungnguyen:abc-123qpppqqp@sb-test2.7akshox.mongodb.net/?retryWrites=true&w=majority"
# # uri = "mongodb+srv://trungnguyen:abc-123qpppqqp@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"
# client = MongoClient(uri)
# db = client["schedule-builder"]

# # Test connection route
# @app.route('/test_connection')
# def test_connection():
#     try:
#         client.server_info()  # This line will raise an exception if the connection fails
#         return jsonify({'status': 'Connected to MongoDB'})
#     except Exception as e:
#         logger.error(f'Failed to connect to MongoDB: {e}')
#         return jsonify({'status': 'Error connecting to MongoDB'}), 500

@app.route('/courses', methods=['GET'])
def get_courses():
    data = []
    cursor = collection.find({})

    for document in cursor:
        data.append({
            '_id': str(document['_id']),
            'subject': document['subject'],
            'id': document['id'],
            'title': document['title'],
            'description': document['description'],
        })

    return jsonify({'data': data})

if __name__ == '__main__':
    app.run(debug=True)