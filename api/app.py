from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from calendar_blueprint import calendar
from database import db

app = Flask(__name__)
CORS(app)

collection = db["courses"]

app.register_blueprint(calendar)

@app.route('/')
def index():
    return 'Hello, Flask!'

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
    app.run(debug=True, port=8080)