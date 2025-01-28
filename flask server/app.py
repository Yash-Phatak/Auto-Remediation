from flask import jsonify,Flask,render_template,request,send_file
from flask_cors import CORS
app = Flask(__name__)
api_v2_cors_config = {
  "origins": ["*"],
  "methods": ["OPTIONS", "GET", "POST"],
  "allow_headers": ["Authorization", "Content-Type"]
}
CORS(app, resources={r'/*': api_v2_cors_config})

@app.get("/")
def index_get():    
    return "Hello"

@app.post("/faq")
def faq():
    text = request.get_json().get("message")
    print(text)
    answer = "Hello, welcome to TradAir Auto Remediation System. How can I help you today?"
    return jsonify({"answer": answer})  # Return as an object with answer property
# The commented code block you provided is defining a route in a Flask application using the
# `@app.post("/faq")` decorator. This route is set up to handle POST requests to the `/faq` endpoint.

# @app.post("/faq")
# async def faq():
#     print("Reached faq")
#     text = request.get_json().get("message")
#     print("Got the message")
#     print(text)
#     answer = await chatbot_response(text)
#     print("Got the answer")
#     answer.headers.add('Access-Control-Allow-Origin', '*')
#     return jsonify(answer)



if __name__ == "__main__":
    app.run(debug=True)