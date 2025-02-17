document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = {
        "ApplicantIncome": document.getElementById("ApplicantIncome").value,
        "CoapplicantIncome": document.getElementById("CoapplicantIncome").value,
        "LoanAmount": document.getElementById("LoanAmount").value,
        "Loan_Amount_Term": document.getElementById("Loan_Amount_Term").value,
        "Credit_History": document.getElementById("Credit_History").value,
        "Dependents": document.getElementById("Dependents").value,
        "Gender": document.getElementById("Gender").value,
        "Married": document.getElementById("Married").value,
        "Education": document.getElementById("Education").value,
        "Self_Employed": document.getElementById("Self_Employed").value,
        "Property_Area": document.getElementById("Property_Area").value
    };

    fetch("/predict", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = data.prediction;
        document.getElementById("result").classList.remove("hidden");
    })
    .catch(error => console.error("Error:", error));
});
