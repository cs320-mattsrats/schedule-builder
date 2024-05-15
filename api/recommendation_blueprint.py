from flask import jsonify, Blueprint, request
from database import db

recommendation = Blueprint("recommendation", __name__)
comment_collection = db['comments']

@recommendation.route("/recommendation/courses/get-comments/<courseID>", methods = ["GET"])
def get_comments(courseID:str):
    courseID=courseID.replace("-", " ") # go from url format to mongodb key format
    cursor = comment_collection.find({"id": courseID})
    comments = cursor.next()["comments"]
    
    print(comments)
    return jsonify({"id": courseID}, {"comments": comments})

@recommendation.route("/recommendation/courses/post-comment/<courseID>", methods = ["POST"])
def post_comment(courseID):
    courseID=courseID.replace("-", " ") # go from url format to mongodb key format
    data = request.get_data()
    if data:
        print(f'OUT DATA: {data}')
        # comment_collection.update_one({})