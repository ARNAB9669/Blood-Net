document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const country = document.getElementById("country").value.trim();
        const division = document.getElementById("division").value.trim();
        const firstName = document.getElementById("first_name").value.trim();
        const lastName = document.getElementById("last_name").value.trim();
        const mobileNumber = document.getElementById("mobile_number").value.trim();
        const bloodType = document.getElementById("blood_type").value.trim();
        const age = parseInt(document.getElementById("age").value.trim());
        const genderInputs = document.querySelectorAll('input[name="same"]');
        let gender = "";

        for (const input of genderInputs) {
            if (input.checked) {
                gender = input.value;
                break;
            }
        }

        // Validation
        if (!country || !division || !firstName || !lastName || !mobileNumber || !bloodType || isNaN(age) || !gender) {
            alert("Please fill in all the fields correctly.");
            return;
        }

        if (age < 18 || age > 65) {
            alert("Age must be between 18 and 65.");
            return;
        }

        if (!/^\d+$/.test(mobileNumber)) {
            alert("Mobile number must be numeric.");
            return;
        }

        const data = new URLSearchParams();
        data.append("country", country);
        data.append("division", division);
        data.append("firstName", firstName);
        data.append("lastName", lastName);
        data.append("mobileNumber", mobileNumber);
        data.append("bloodType", bloodType);
        data.append("age", age);
        data.append("gender", gender);

        fetch("https://script.google.com/macros/s/AKfycbyxP86nuVFgWq1coGEx_qhg5D6GA3rGGwTeOJLNUpqpAUBnYeVhNCPtPqp-Sjr8aFvr/exec", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => response.text())
        .then(result => {
            alert("Form submitted successfully!");
            console.log(result);
        })
        .catch(error => {
            alert("Error submitting form.");
            console.error("Error:", error);
        });
    });
});