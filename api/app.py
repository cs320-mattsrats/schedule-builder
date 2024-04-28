from flask import Flask, Response, jsonify
from flask_cors import CORS
from calendar_blueprint import calendar
import web
# from database import db

app = Flask(__name__)

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

# uri = "mongodb+srv://mattsrats:qasgib-deckop-dYbme6@mattsrats.jlygynz.mongodb.net/?retryWrites=true&w=majority&appName=MattsRats"
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

if __name__ == '__main__':
    app.run(debug=True)