from flask import jsonify, Blueprint

recommendation = Blueprint("recommendation", __name__)


####################

@recommendation.route("/recommendation/courses/comments<n>", methods = ["POST"])
def comments(n):
    return jsonify({
        "test" : n
    })