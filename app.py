from flask import Flask, render_template, request, jsonify
import pickle
import re
import nltk

from nltk.corpus import stopwords
from nltk.stem import PorterStemmer


app = Flask(__name__)

# --------------------------------
# Load Model and Vectorizer
# --------------------------------

with open("model.pkl", "rb") as file:
    model = pickle.load(file)

with open("vectorizer.pkl", "rb") as file:
    vectorizer = pickle.load(file)


# --------------------------------
# Text Preprocessing
# --------------------------------

stop_words = set(stopwords.words("english"))
stemmer = PorterStemmer()

def clean_text(text):

    text = text.lower()

    text = re.sub(r"[^a-zA-Z\s]", "", text)

    words = text.split()

    words = [
        stemmer.stem(word)
        for word in words
        if word not in stop_words
    ]

    return " ".join(words)


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "error": "No data received."
            }), 400

        message = data.get("message", "").strip()

        if not message:
            return jsonify({
                "success": False,
                "error": "Please enter a message."
            }), 400

     
        cleaned_message = clean_text(message)

        
        message_vector = vectorizer.transform(
            [cleaned_message]
        )

        prediction = model.predict(
            message_vector
        )[0]

       
        probability = model.predict_proba(
            message_vector
        )[0]

        legitimate_probability = probability[0] * 100
        spam_probability = probability[1] * 100

       
        if prediction == 1:
            result = "SPAM"
        else:
            result = "Legitimate"

    
        return jsonify({
            "success": True,
            "result": result,
            "spam_probability": round(
                spam_probability, 2
            ),
            "legitimate_probability": round(
                legitimate_probability, 2
            )
        })

    except Exception as e:

        print("Prediction Error:", e)

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500
        
        
if __name__ == '__main__':
    app.run(debug=False)        