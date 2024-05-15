from flask import jsonify, Blueprint
from database import db
recommendation = Blueprint("recommendation", __name__)

@recommendation.route("/recommendation/courses/comments<n>", methods = ["POST"])
def comments(n):
    return jsonify({
        "test" : n
    })