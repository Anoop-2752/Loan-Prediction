# Loan Prediction Machine Learning Project

## Table of Contents

- [Project Overview](#project-overview)
- [Dataset Description](#dataset-description)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)
- [Model Details](#model-details)
- [Web Application (Flask)](#web-application-flask)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

---

## Project Overview

The **Loan Prediction ML Project** aims to build a predictive model that determines whether a loan applicant is eligible for a loan based on various financial and demographic parameters. This project utilizes machine learning techniques to analyze past loan application data and make informed predictions.

---

## Dataset Description

The dataset consists of several features such as:

- **Loan\_ID** (Unique Identifier)
- **Gender** (Male/Female)
- **Married** (Yes/No)
- **Dependents** (Number of dependents)
- **Education** (Graduate/Not Graduate)
- **Self\_Employed** (Yes/No)
- **ApplicantIncome** (Income of the applicant)
- **CoapplicantIncome** (Income of co-applicant)
- **LoanAmount** (Loan amount in thousands)
- **Loan\_Amount\_Term** (Term of loan in months)
- **Credit\_History** (1: Has a credit history, 0: No credit history)
- **Property\_Area** (Urban/Rural/Semiurban)
- **Loan\_Status** (Target variable - Y/N)

---

## Technologies Used

- **Programming Language**: Python
- **Libraries**: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn
- **Machine Learning Algorithm**: Logistic Regression, Decision Tree, Random Forest
- **Web Framework**: Flask
- **Frontend**: HTML, CSS
- **Deployment**: Docker (Optional)

---

## Project Structure

```
Loan_Prediction_Project/
│── data/                # Raw dataset files
│── processed/           # Processed/cleaned data
│── static/              # Static files (CSS, JS)
│── templates/           # HTML templates for the web app
│── notebook/            # Jupyter Notebooks for EDA and Model Training
│── app.py               # Flask web application
│── model.pkl            # Saved trained ML model
│── requirements.txt     # Python dependencies
│── Dockerfile           # Docker setup file (Optional)
│── README.md            # Project documentation
```

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/loan-prediction-ml.git
cd loan-prediction-ml
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Run the Flask Web Application

```bash
python app.py
```

### Step 4: Open the Web Application

Go to `http://127.0.0.1:5000/` in your browser.

---

## Model Details

The project experiments with multiple machine learning models, including:

- **Logistic Regression**
- **Random Forest Classifier**
- **Decision Tree Classifier**

The best-performing model is saved as `model.pkl` and used for predictions.

---

## Web Application (Flask)

A simple web interface is built using Flask where users can input loan details and get predictions on loan approval.

---

## Deployment

To deploy using Docker:

### Step 1: Build the Docker Image

```bash
docker build -t loan-prediction-app .
```

### Step 2: Run the Docker Container

```bash
docker run -p 5000:5000 loan-prediction-app
```

---

## Future Enhancements

- Improve model performance using hyperparameter tuning.
- Integrate more advanced ML models like XGBoost.
- Deploy on cloud services (AWS, GCP, Heroku, etc.).
- Implement a database for storing user inputs and predictions.

---

## Contributors

- **Your Name** - Data Scientist & Developer
- **Other Contributors** (if applicable)

Feel free to contribute and enhance this project!

