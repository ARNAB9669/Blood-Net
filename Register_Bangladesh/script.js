const divisionUrlMap = {
    "Dhaka": "https://script.google.com/macros/s/AKfycbxpTEP_t0x_OBIEaCEWjD3J1Ed08xwPPEc0vBsVnSkKJo_CvB3shFQ2YVIJKWd0Yy1l/exec",
    "Chattogram": "https://script.google.com/macros/s/AKfycbxw8CeFbvD09a-BHr8Aqeyd4ARd4yi6R0G8z4D3agZm3_YHoM3fLildvYN92g1g3uuh/exec",
    "Khulna": "https://script.google.com/macros/s/AKfycbwffbadbhY56ERnXWpea2_7K6VYRVlXKv5Jg7q7IPZck1udMYz172P7ReJBHrlZO7yJ/exec",
    "Rajshahi": "https://script.google.com/macros/s/AKfycbz0XJgEqnjqyvYTXdedWLExJm23Cdx-lA0Erb2WwJ0L-NuHBn0akKwfP2h25vzOZKWs/exec",
    "Barishal": "https://script.google.com/macros/s/AKfycbz7VFBWKPm5WsuvAc5Yi1lsVu_ZvxB5uAZ_i1L-U_m--PICQOB711OotyOpJdux7upG/exec",
    "Sylhet": "https://script.google.com/macros/s/AKfycby91EkbqRBpBpTjAgMjHBXD2NdU0v2uGnhQa5RbszH3tnHt_Z6Wro5L_8EIPm2hJuRX/exec",
    "Rangpur": "https://script.google.com/macros/s/AKfycbxNELrNU-HqxI1sEkwqax-4f1sPVCRTGQiTm0knPHGsn8kCOiTB83sp0ZPmJ0xBpvus/exec",
    "Mymensingh": "https://script.google.com/macros/s/AKfycbxFkebr79mVLVt4CKN7FJDgVqJJufUGtv5yhdIrLQwPIk-nq2mkVceFk0WfG5A7jG8R/exec"
};

const divisionDistricts = {
    "Dhaka": ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Tangail", "Faridpur", "Gopalganj", "Madaripur", "Shariatpur"],
    "Chattogram": ["Chattogram", "Cox's Bazar", "Cumilla", "Brahmanbaria", "Chandpur", "Feni", "Lakshmipur", "Noakhali", "Khagrachari", "Rangamati", "Bandarban"],
    "Khulna": ["Khulna", "Bagerhat", "Satkhira", "Jessore", "Jhenaidah", "Magura", "Narail", "Meherpur", "Kushtia", "Chuadanga"],
    "Rajshahi": ["Rajshahi", "Pabna", "Bogura", "Joypurhat", "Naogaon", "Natore", "Chapai Nawabganj", "Sirajganj"],
    "Barishal": ["Barishal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokathi", "Barguna"],
    "Sylhet": ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    "Rangpur": ["Rangpur", "Dinajpur", "Thakurgaon", "Panchagarh", "Lalmonirhat", "Kurigram", "Nilphamari", "Gaibandha"],
    "Mymensingh": ["Mymensingh", "Netrokona", "Sherpur", "Jamalpur"]
};

const districtSelect = document.querySelector("#district");
const divisionSelect = document.querySelector("#division");

divisionSelect.addEventListener("change", function () {
    const selectedDivision = this.value;
    const districts = divisionDistricts[selectedDivision] || [];

    // Clear old options
    districtSelect.innerHTML = "";

    // Add new district options
    districts.forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
});

// Trigger initial update based on default division
divisionSelect.dispatchEvent(new Event("change"));

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const mobileNumber = document.getElementById("mobile_number").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const gender = document.querySelector('input[name="same"]:checked')?.value;
    const bloodGroup = document.getElementById("Blood_group").value.trim();
    const districtSelects = document.querySelectorAll("#district");
    const district = districtSelects[districtSelects.length - 1].value;
    const division = document.getElementById("division").value;

    // Validation
    if (!firstName || !lastName || !mobileNumber || isNaN(age) || !gender || !bloodGroup || !district || !division) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\d{11}$/.test(mobileNumber)) {
        alert("Please enter a valid 11-digit mobile number.");
        return;
    }

    if (age < 18 || age > 65) {
        alert("Age must be between 18 and 65.");
        return;
    }

    
    let url = divisionUrlMap[division];
    
    const formData = new URLSearchParams();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("mobileNumber", mobileNumber);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("bloodGroup", bloodGroup);
    formData.append("district", district);
    formData.append("division", division);

    const loader = document.createElement("div");
    loader.id = "loader";
    loader.textContent = "Submitting...";
    loader.style.position = "fixed";
    loader.style.top = "50%";
    loader.style.left = "50%";
    loader.style.transform = "translate(-50%, -50%)";
    loader.style.padding = "20px 30px";
    loader.style.backgroundColor = "#00f2ff";
    loader.style.color = "#000";
    loader.style.borderRadius = "8px";
    loader.style.boxShadow = "0 0 15px #00f2ff";
    loader.style.zIndex = "9999";
    document.body.appendChild(loader);

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const result = await response.text();
        alert(result);
        document.querySelector("form").reset();
        document.getElementById("loader")?.remove();
    } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("loader")?.remove();
        alert("Failed to submit. Please try again later.");
    }
});