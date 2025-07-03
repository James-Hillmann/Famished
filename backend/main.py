from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS


conn = sqlite3.connect('Famished.db', check_same_thread=False)


app = Flask(__name__)
CORS(app)

@app.route('/add-user', methods=['POST'])
def add_user():
    try:
        data = request.json
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (username, uid) VALUES (?, ?)', (data['username'], data['uid']))
        conn.commit()
        return {'message': 'User added'}
    except Exception as e:
        print(e)
        return {'message': f'Error : {str(e)}'}

@app.route('/api')
def api():
    return {'message': 'Hello from backend'}


if __name__ == '__main__':
    app.run(port=5000, debug=True)
