from flask import Flask, Response
from flask_cors import CORS
from calendar_blueprint import calendar

app = Flask(__name__)

app.register_blueprint(calendar)
CORS(app)
@app.route('/', methods=["GET"])
def status():
    return Response({ "status": "running" })

if __name__ == '__main__':
    app.run(port=5001)