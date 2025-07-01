from flask import Flask
app = Flask(__name__)

@app.route('/api')
def api():
    return {"message": 'Hello from backend'}

if __name__ == "__main__":
    app.run(port=5000)