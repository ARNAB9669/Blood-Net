// URL map for district-bloodGroup to Google Apps Script endpoint
const urlMap = {
    "Dhaka--A+": "https://script.google.com/macros/s/AKfycbwXeOzKwEJhuGT8cnpY67Tde6jMxCGUAyqWEDhOv5B2UoP12P_TEQHrU2yEuEgxBeyh/exec",
    "Dhaka--A-": "https://script.google.com/macros/s/AKfycbw2HEAm5jHDDFSpHIGbaGyLQluyIO08KcCHVjmOLuG2jDaSficJuPNZbTK3TyWPrYAMHA/exec",
    "Dhaka--B+": "https://script.google.com/macros/s/AKfycbzNjiz76rShE_er9Jc3VB_GNBRMaB7_SVd-Spbhphz5gdrpEBcq4o0PJhoJ6HzfKpMF/exec",
    "Dhaka--B-": "https://script.google.com/macros/s/AKfycbyjBS0_sYpmWYMGKKi9_ia_CwmNHr6BLRAuLDylCaQCzdNd3PTV-1Ld9bL56Rq80bk9/exec",
    "Dhaka--AB+": "https://script.google.com/macros/s/AKfycbxEcObizZZHyXEXh0oHBbrKFBrpRs1Pw58pa40dCrYHwOhndnzi7QAJMlF76SIkWuNn/exec",
    "Dhaka--AB-": "https://script.google.com/macros/s/AKfycbzCNVLHy1dDJmAFQ-fyeFF8Arn4uGoH_qPexSH8h1N3t8RUBZhoWcDGWcrJTTmxcSRe/exec",
    "Dhaka--O+": "https://script.google.com/macros/s/AKfycbwBzq0c2Wh5cUupRYTmJ8fOJal9L78xZgd7OCuFWWHRtS4EBb2oshKpfybYtAj3JrqnOQ/exec",
    "Dhaka--O-": "https://script.google.com/macros/s/AKfycbyufX1o2gnwneRujXsv9T-VTrDYuZYWA3Juh8v5NUUFaclYYnRB1GNQ5ecVaOKSm9m5/exec",

    "Gazipur--A+": "https://script.google.com/macros/s/AKfycbxnmwrbbzs-7iTkB4Rr2e20Hr6FTPwPSOSHJUm2A6JkS6wns-RRJAoUMVPZekDKd8b2/exec",
    "Gazipur--A-": "https://script.google.com/macros/s/AKfycbw8GSrhl-7VJvuqrZIRTyKCYGvZmte7sdy9A4UVJr6dkvp5JzlUeHVrqVi1ptWYukVL/exec",
    "Gazipur--B+": "https://script.google.com/macros/s/AKfycbwh4NCKfhPEHDqu7fzUL2EbQJL6AC0VTHLTfzLwdeENgLympKFmB-Fbnpz58Lrq9z3Ipw/exec",
    "Gazipur--B-": "https://script.google.com/macros/s/AKfycbyolQ3i5D8YUejqsdb3TRuqcok7MoDZpA7YcbhvqBsFJOzMjzN_m9HRIczEya6ib43vJg/exec",
    "Gazipur--AB+": "https://script.google.com/macros/s/AKfycbzOYa7KNhdB2vIlyqv-3RoiSrWkBM1wfk8cQDx7_QZRy0X1gwuH0Mh4y4DXCK7rG43D9Q/exec",
    "Gazipur--AB-": "https://script.google.com/macros/s/AKfycbxYwAIqaoSw4gHETjkMxpI3Cgu2IrYmv4Ov4ylM47eVB3iXLXqgXDtVAo_R2c-Gg2lpTg/exec",
    "Gazipur--O+": "https://script.google.com/macros/s/AKfycbzeQHcVPNDHyp8u7nxeZbqouGBuoI4bXxms-dbE73E5Z-kqlIFPb63NBhQ0O3hFEEfGRg/exec",
    "Gazipur--O-": "https://script.google.com/macros/s/AKfycbw4FtVLEoSK-QodnQ8-X67h0uUr0_YbwAtHRyoCfyeLK4l5uD1uwLk9unKv1lj7hdUw/exec",

    "Kishoreganj--A+": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--A-": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--B+": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--B-": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--AB+": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--AB-": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--O+": "PUT_SCRIPT_URL_HERE",
    "Kishoreganj--O-": "PUT_SCRIPT_URL_HERE",

    "Manikganj--A+": "PUT_SCRIPT_URL_HERE",
    "Manikganj--A-": "PUT_SCRIPT_URL_HERE",
    "Manikganj--B+": "PUT_SCRIPT_URL_HERE",
    "Manikganj--B-": "PUT_SCRIPT_URL_HERE",
    "Manikganj--AB+": "PUT_SCRIPT_URL_HERE",
    "Manikganj--AB-": "PUT_SCRIPT_URL_HERE",
    "Manikganj--O+": "PUT_SCRIPT_URL_HERE",
    "Manikganj--O-": "PUT_SCRIPT_URL_HERE",

    "Munshiganj--A+": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--A-": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--B+": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--B-": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--AB+": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--AB-": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--O+": "PUT_SCRIPT_URL_HERE",
    "Munshiganj--O-": "PUT_SCRIPT_URL_HERE",

    "Narayanganj--A+": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--A-": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--B+": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--B-": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--AB+": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--AB-": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--O+": "PUT_SCRIPT_URL_HERE",
    "Narayanganj--O-": "PUT_SCRIPT_URL_HERE",

    "Narsingdi--A+": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--A-": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--B+": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--B-": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--AB+": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--AB-": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--O+": "PUT_SCRIPT_URL_HERE",
    "Narsingdi--O-": "PUT_SCRIPT_URL_HERE",

    "Rajbari--A+": "PUT_SCRIPT_URL_HERE",
    "Rajbari--A-": "PUT_SCRIPT_URL_HERE",
    "Rajbari--B+": "PUT_SCRIPT_URL_HERE",
    "Rajbari--B-": "PUT_SCRIPT_URL_HERE",
    "Rajbari--AB+": "PUT_SCRIPT_URL_HERE",
    "Rajbari--AB-": "PUT_SCRIPT_URL_HERE",
    "Rajbari--O+": "PUT_SCRIPT_URL_HERE",
    "Rajbari--O-": "PUT_SCRIPT_URL_HERE",

    "Tangail--A+": "PUT_SCRIPT_URL_HERE",
    "Tangail--A-": "PUT_SCRIPT_URL_HERE",
    "Tangail--B+": "PUT_SCRIPT_URL_HERE",
    "Tangail--B-": "PUT_SCRIPT_URL_HERE",
    "Tangail--AB+": "PUT_SCRIPT_URL_HERE",
    "Tangail--AB-": "PUT_SCRIPT_URL_HERE",
    "Tangail--O+": "PUT_SCRIPT_URL_HERE",
    "Tangail--O-": "PUT_SCRIPT_URL_HERE",

    "Faridpur--A+": "PUT_SCRIPT_URL_HERE",
    "Faridpur--A-": "PUT_SCRIPT_URL_HERE",
    "Faridpur--B+": "PUT_SCRIPT_URL_HERE",
    "Faridpur--B-": "PUT_SCRIPT_URL_HERE",
    "Faridpur--AB+": "PUT_SCRIPT_URL_HERE",
    "Faridpur--AB-": "PUT_SCRIPT_URL_HERE",
    "Faridpur--O+": "PUT_SCRIPT_URL_HERE",
    "Faridpur--O-": "PUT_SCRIPT_URL_HERE",

    "Gopalganj--A+": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--A-": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--B+": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--B-": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--AB+": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--AB-": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--O+": "PUT_SCRIPT_URL_HERE",
    "Gopalganj--O-": "PUT_SCRIPT_URL_HERE",

    "Madaripur--A+": "PUT_SCRIPT_URL_HERE",
    "Madaripur--A-": "PUT_SCRIPT_URL_HERE",
    "Madaripur--B+": "PUT_SCRIPT_URL_HERE",
    "Madaripur--B-": "PUT_SCRIPT_URL_HERE",
    "Madaripur--AB+": "PUT_SCRIPT_URL_HERE",
    "Madaripur--AB-": "PUT_SCRIPT_URL_HERE",
    "Madaripur--O+": "PUT_SCRIPT_URL_HERE",
    "Madaripur--O-": "PUT_SCRIPT_URL_HERE",

    "Shariatpur--A+": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--A-": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--B+": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--B-": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--AB+": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--AB-": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--O+": "PUT_SCRIPT_URL_HERE",
    "Shariatpur--O-": "PUT_SCRIPT_URL_HERE",
};

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector("button[type='submit']");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Get values from form fields
        const district = document.getElementById("district").value;
        const bloodGroup = document.getElementById("Blood_group").value;
        const firstName = document.getElementById("first_name").value.trim();
        const lastName = document.getElementById("last_name").value.trim();
        const mobileNumber = document.getElementById("mobile_number").value.trim();
        const age = document.getElementById("age").value.trim();
        const genderElements = document.querySelectorAll("input[name='same']:checked");
        const gender = genderElements.length > 0 ? genderElements[0].value : "";

        // Check for empty fields
        if (!district || !bloodGroup || !firstName || !lastName || !mobileNumber || !age || !gender) {
            alert("All fields are mandatory. Please fill out the entire form.");
            return;
        }

        // Construct key to get the right URL
        const key = `${district}--${bloodGroup}`;
        const scriptURL = urlMap[key];

        if (!scriptURL) {
            alert("Form submission URL not found for this district and blood group.");
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append("district", district);
        formData.append("bloodGroup", bloodGroup);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("mobileNumber", mobileNumber);
        formData.append("age", age);
        formData.append("gender", gender);

        // Submit form data to Google Apps Script
        fetch(scriptURL, {
            method: "POST",
            body: formData
        })
            .then(async response => {
                const text = await response.text();
                console.log("Raw server response:", text);
                if (!response.ok) {
                    throw new Error("Server Error: " + text);
                }
                alert("Form submitted successfully!");
            })
            .catch((error) => {
                console.error("Submission failed:", error);
                alert("There was an error submitting the form.\n" + error.message);
            });
    });
});
