from flask import jsonify, Blueprint, request
from database import db

calendar = Blueprint("calendar", __name__)

@calendar.route("/get-schedule", methods = ["GET"])
def retrieve_data():
    res = []
    for i in range(1,4):
        sche = 'schedule' + str(i)
        print(sche)
        collection = db[sche]
        data = []
        cursor = collection.find({})

        for document in cursor:
            data.append({
                '_id': str(document['_id']),
                'id': document['id'],
                'subject': document['subject'],
                'classNumber': document['classNumber'],
                'title': document['title'],
                'section': document['section'],
                'color': document['color'],
            })
        res.append(data)

    return jsonify({'data': res})

@calendar.route("/post-schedule", methods = ["POST"])
def post_schedule():
    data = request.get_json()
    if data:
        try:
            print('this is out data', data['data'][0])
            print('this is out data 2', data['data'][1])
            print('this is out data 3', data['data'][2])
            collection1 = db['schedule1']
            collection1.delete_many({})
            collection1.insert_many(data['data'][0])

            collection2 = db['schedule2']
            collection2.delete_many({})
            collection2.insert_many(data['data'][1])

            collection3 = db['schedule3']
            collection3.delete_many({})
            collection3.insert_many(data['data'][2])

            return jsonify({ 'message': 'Data inserted successfully' }), 201
        except Exception as e:
            return jsonify({ 'error': str(e) }), 500
    else:
        return jsonify({ 'error': 'No data provided' }), 400
