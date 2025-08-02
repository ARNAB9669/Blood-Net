

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    // alert("DOM fully loaded and parsed");

    const searchBtn = document.querySelector('button[type="submit"]');
    const districtInput = document.getElementById('district');
    // Updated selector for blood_groupInput to use querySelector on select element
    const blood_groupInput = document.getElementById('blood_group');

    searchBtn.addEventListener('click', () => {
        // alert("Search button clicked");
        // Debug: show tag name of blood_groupInput
        console.log("blood_groupInput tag name:", blood_groupInput.tagName);
        // alert("blood_groupInput type: " + blood_groupInput.tagName);
        const district = districtInput.value.trim();
        const blood_group = blood_groupInput.value.trim();
        // alert(`Selected district: ${district}\nSelected blood group: ${blood_group}`);

        if (!district || !blood_group) {
            alert("Please select both district and blood group.");
            return;
        }

        // Redirect to results page with query parameters
        const url = `Result_Chattogram.html?district=${encodeURIComponent(district)}&blood_group=${encodeURIComponent(blood_group)}`;
        // alert(`Redirecting to: ${url}`);
        console.log("Redirecting to:", url);
        window.location.href = url;
    });
});