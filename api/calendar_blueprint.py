from flask import jsonify, Blueprint

calendar = Blueprint("calendar", __name__)

@calendar.route("/test<n>", methods = ["GET"])
def test(n):
    return jsonify({
        "test" : n
    })
