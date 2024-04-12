from flask import Flask, Response, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/', methods=["GET"])
def status():
    return jsonify({
        "status" : "running"
    })
    # return Response({ "status": "running" })

if __name__ == '__main__':
    app.run(port=5001)