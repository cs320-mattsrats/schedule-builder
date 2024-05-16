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
# def post_schedule():
#     if request.method == "POST":
#         title = request.form['title']
#         body = request.form['body']
#         response = {"title": title, "body": body}
#         collection.insert_one(response)
#         return response, 201

@calendar.route("/select-schedule", methods=["POST"])
def select_schedule():
    data = request.get_json()
    selected_schedule = data['selectedSchedule']
    collection = db['selectedSchedule']
    collection.delete_many({})  # Clear previous selections
    collection.insert_one(selected_schedule)  # Store new selection
    return jsonify({'message': 'Schedule selected successfully'}), 200


@calendar.route("/get-selected-schedule", methods=["GET"])
def get_selected_schedule():
    collection = db['selectedSchedule']
    selected_schedule = collection.find_one()  # Assuming only one is stored
    if selected_schedule:
        selected_schedule.pop('_id')  # Remove MongoDB's default ID if needed
        return jsonify(selected_schedule), 200
    else:
        return jsonify({'error': 'No schedule selected'}), 404
