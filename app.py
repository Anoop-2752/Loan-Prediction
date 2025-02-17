from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load ML model
with open("model.pkl", "rb") as f:
    loaded_model = pickle.load(f)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get JSON data from frontend

        # Convert inputs into correct format
        features = [
            int(data["Gender"]),
            int(data["Married"]),
            int(data["Dependents"]),
            int(data["Education"]),
            int(data["Self_Employed"]),
            np.log(float(data["LoanAmount"])),
            np.log(float(data["Loan_Amount_Term"])),
            int(data["Credit_History"]),
            int(data["Property_Area"]),
            np.log(float(data["ApplicantIncome"]) + float(data["CoapplicantIncome"]))
        ]

        # Make prediction
        result = loaded_model.predict([features])
        prediction_text = "will" if result[0] == 1 else "will not"

        return jsonify({"prediction": f"The loan {prediction_text} be approved."})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
