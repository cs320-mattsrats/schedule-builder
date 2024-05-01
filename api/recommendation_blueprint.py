from flask import jsonify, Blueprint

recommendation = Blueprint("recommendation", __name__)


####################

@recommendation.route("/recommendation/comments<n>", methods = ["GET"])
def comments(n):
    return jsonify({
        "test" : n
    })