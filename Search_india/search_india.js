document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const searchBtn = document.querySelector('button[type="submit"]');
    const stateInput = document.getElementById('state');
    const districtInput = document.getElementById('district');
    const bloodGroupInput = document.getElementById('blood_group');

    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const state = stateInput.value;
        const district = districtInput.value;
        const blood_group = bloodGroupInput.value;

        if (!state || !district || !blood_group) {
            alert("Please select your state, district, and blood group.");
            return;
        }

        console.log("Selected values:", { state, district, blood_group });
        // Redirect to results page with query parameters
        const url = `Result_india.html?state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}&blood_group=${encodeURIComponent(blood_group)}`;
        window.location.href = url;
    });
});