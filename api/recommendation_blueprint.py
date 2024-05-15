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

@recommendation.route("/recommendation/courses/post-comment", methods = ["POST"])
def post_comment():
    data = request.get_json()
    print(f'The recieved data from the textfield is {data}')
    courseID = data["course"]
    comment = data["comment"]
    print(f'The comment is {comment}')
    if data:
        try:
            print(f'OUT DATA: {data}')
            comment_collection.update_one({"id": courseID}, {"$push": {"comments": comment}})


            return jsonify({ 'message': 'Comment inserted successfully' }), 201
        except Exception as e:
            return jsonify({ 'error': str(e) }), 500
    else:
        return jsonify({ 'error': 'No data provided' }), 400