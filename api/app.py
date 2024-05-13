from flask import Flask, request, jsonify
from flask_cors import CORS
from calendar_blueprint import calendar
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

@app.route("/post-schedule", methods = ["POST"])
def post_schedule():
    data = request.get_json()
    if data:
        try:
            print('this is out data', data['data'])
            collection1 = db['schedule1']
            collection1.insert_many(data['data'][0])

            collection2 = db['schedule2']
            collection2.insert_many(data['data'][1])

            collection3 = db['schedule3']
            collection3.insert_many(data['data'][2])

            return jsonify({ 'message': 'Data inserted successfully' }), 201
        except Exception as e:
            return jsonify({ 'error': str(e) }), 500
    else:
        return jsonify({ 'error': 'No data provided' }), 400

# app.register_blueprint(calendar)

if __name__ == '__main__':
    app.run(debug=True, port=8080)