from flask import jsonify, Blueprint
from database import db

calendar = Blueprint("calendar", __name__)

collection = db['courses']

@calendar.route("/getdata", methods = ["GET"])
def retrieve_data():
    data = collection.find()
    return jsonify(data)
