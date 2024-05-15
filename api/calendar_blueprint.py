from flask import jsonify, Blueprint, request
from database import db

calendar = Blueprint("calendar", __name__)

collection = db['all-schedules']

# @calendar.route("/getdata", methods = ["GET"])
# def retrieve_data():
#     data = collection.find()
#     return jsonify(data)

@calendar.route("/post-schedule", methods = ["POST"])
def post_schedule():
    data = request.get_json()
    if data:
        try:
            # Assuming 'items' is the key for your array of objects in the JSON data
            # items = data['items']
            collection.insert_many(data)
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
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
