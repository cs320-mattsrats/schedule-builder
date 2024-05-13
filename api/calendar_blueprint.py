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
