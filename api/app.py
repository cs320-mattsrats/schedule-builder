from flask import Flask, Response

app = Flask(__name__)

@app.route('/', methods=["GET"])
def status():
    return Response({ "status": "running" })

if __name__ == '__main__':
    app.run(port=5001)