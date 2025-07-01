from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows all origins

@app.route('/api')
def api():
    return {'message': 'Hello from backend'}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    return {'name' : f'{username}'}

if __name__ == '__main__':
    app.run(port=5000, debug=True)
