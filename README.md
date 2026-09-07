## SMS Spam Classifier

An **SMS Spam Classifier** is a machine learning-based application that automatically classifies text messages as **Spam** or **Not Spam (Ham)**.

The project uses Natural Language Processing (NLP) techniques to convert SMS text into numerical features and a machine learning classification algorithm to predict whether a message is spam.

---

## Project Overview

Spam messages are unwanted messages that may contain advertisements, fraudulent offers, fake prizes, or suspicious links. Manually identifying spam messages can be difficult when dealing with a large number of messages.

This project provides an automated solution that analyzes the content of an SMS and predicts whether it is:

* 🟢 **Not Spam (Ham)**
* 🔴 **Spam**

The system is trained on a labeled SMS dataset containing examples of both spam and legitimate messages.

---

## Features

* SMS text classification
* Machine Learning-based prediction
* Natural Language Processing
* Detection of legitimate messages
* Detection of spam messages
* Fast prediction
* Simple user interface (if applicable)
* Model evaluation and performance analysis
* Trained model can be reused without retraining

---

##  Technologies Used

* **Python**
* **Pandas** – Data loading and preprocessing
* **NumPy** – Numerical operations
* **Scikit-learn** – Machine learning and feature extraction
* **NLTK** – Natural Language Processing, if used
* **Flask** – Web application, if used
* **HTML/CSS/JavaScript** – Frontend interface, if used
* **Git & GitHub** – Version control and project hosting

> Remove any technologies from this list that are not actually used in the project.

---

##  Project Structure

```text
sms-spam-classifier/
│
├── app.py
├── model.pkl
├── vectorizer.pkl
├── requirements.txt
├── README.md
│
├── data.csv
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
```

The exact structure may vary depending on the implementation.

---

## Dataset

The project uses the **SMS Spam Collection Dataset**, which contains SMS messages labeled as:

* `spam`
* `ham`

Each message is used to train the machine learning model to distinguish between unwanted spam messages and normal messages.

### Example

| SMS Message                              | Label |
| ---------------------------------------- | ----- |
| "Congratulations! You won a free prize!" | Spam  |
| "Are we meeting today at 5 PM?"          | Ham   |
| "You have won a cash reward. Call now!"  | Spam  |
| "Can you send me the assignment?"        | Ham   |

---

##  Machine Learning Workflow

The project follows a typical Natural Language Processing and Machine Learning pipeline:

```text
SMS Message
     ↓
Data Cleaning
     ↓
Text Preprocessing
     ↓
Feature Extraction
     ↓
Train/Test Split
     ↓
Machine Learning Model
     ↓
Prediction
     ↓
Spam / Not Spam
```

---

## Text Processing

Before training the model, SMS messages are processed so that they can be used by the machine learning algorithm.

Typical preprocessing steps include:

1. Removing unnecessary text
2. Converting text to lowercase
3. Tokenization
4. Removing unnecessary words, if applicable
5. Feature extraction
6. Converting text into numerical representation

---

## Feature Extraction

Since machine learning algorithms cannot directly understand raw text, the SMS messages are converted into numerical features.

The project uses a text vectorization technique .

For example:

```text
"free prize now"
```

is transformed into numerical feature values that can be processed by the machine learning model.

---

## Machine Learning Model

The processed SMS features are passed to a classification model.
* Naive Bayes
  
The trained model learns patterns associated with spam and legitimate messages.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ZaheedaHakro/sms-classifier.git
```

### 2. Navigate to the project directory

```bash
cd sms-classifier
```

### 3. Create a virtual environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Project

If the project uses Flask:

```bash
python app.py
```

Then open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5000/
```

If your project uses a different entry file, replace `app.py` with the appropriate filename.

---

## 🧪 Example Predictions

### Example 1 – Spam

**Input:**

```text
Congratulations! You have won a free prize. Call now to claim your reward!
```

**Prediction:**

```text
SPAM
```

---

### Example 2 – Not Spam

**Input:**

```text
Hey, are we meeting at 5 PM today?
```

**Prediction:**

```text
NOT SPAM
```


##  Model Evaluation

The model should be evaluated using appropriate classification metrics, such as:

* Accuracy
* Precision
* Recall
* F1-score
* Confusion Matrix

Example:

```text
Accuracy: XX.XX%
Precision: XX.XX%
Recall: XX.XX%
F1-Score: XX.XX%
```

> Replace `XX.XX%` with the actual results from your trained model.

---

## External Libraries and Resources

The following resources used in this project:

| Resource                    | Purpose                    |
| --------------------------- | -------------------------- |
| Python                      | Programming language       |
| Pandas                      | Data processing            |
| NumPy                       | Numerical computation      |
| Scikit-learn                | Machine learning           |
| NLTK                        | NLP preprocessing, if used |
| Flask                       | Web application, if used   |
| HTML/CSS/JavaScript         | User interface, if used    |
| SMS Spam Collection Dataset | Training and testing data  |
| GitHub                      | Source code hosting        |

Only resources actually used by the project should be included in the final version.

---


## 🔮 Future Improvements

Future versions of the project could include:

* Deep Learning-based text classification
* Transformer models such as BERT
* Multilingual spam detection
* Urdu SMS spam detection
* Detection of malicious links
* Real-time SMS filtering
* Mobile application integration
* Larger and more diverse datasets
* Explainable AI for showing why a message was classified as spam
* Deployment as a cloud-based API

---

## 👩‍💻 Author

**Zaheeda H**

GitHub:
https://github.com/ZaheedaHakro

---

## 📄 License

This project is developed for educational and academic purposes.

---

## ⭐ Acknowledgment

This project demonstrates the application of **Natural Language Processing and Machine Learning** for automated SMS spam detection.
