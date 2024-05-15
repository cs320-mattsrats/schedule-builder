from flask import Flask, request, jsonify
from flask_cors import CORS
from calendar_blueprint import calendar
from recommendation_blueprint import recommendation
from database import db

app = Flask(__name__)
CORS(app)

collection = db["courses"]

@app.route('/')
def index():
    return "<p>Hello, World!</p>"

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

app.register_blueprint(calendar)

if __name__ == '__main__':
    app.run(debug=True, port=8080)