document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const district = params.get('district');
    // alert("Selected district: " + district);
    const blood_group = params.get('blood_group');
    // alert("Selected blood group: " + blood_group);

    const API_URL = 'https://script.google.com/macros/s/AKfycbzHyfssfkir5xOE62BR-MmaCvqZCtlSeGxCgmiHhtVAXTLRUdnq0LIwxMIAUu-knXYr/exec';
    const url = `${API_URL}?district=${encodeURIComponent(district)}&blood_group=${encodeURIComponent(blood_group)}`;

    console.log("Fetching from URL:", url);
    // alert("Fetching data from: " + url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('resultsContainer');

            if (!Array.isArray(data) || data.length === 0) {
                container.innerHTML = '<p>No matching donors found.</p>';
                return;
            }

            data.forEach(donor => {
                const card = document.createElement('div');
                card.className = 'donor-card';
                card.innerHTML = `
          <div class="card-content" ">
            <div class="donor-name" style="text-align: center; margin-bottom: 10px;">
              <h2 style="margin: 0; color: #00f2ff;">${donor.First_name} ${donor.Last_name}</h2>
            </div>
            <div class="donor-info" style="display: flex;  ">
              <div class="donor-details">  
                <p><strong>Blood Group:</strong> 🩸${donor.blood_group}</p>
                <p><strong>Division:</strong> ${donor.division}</p>
                <p><strong>District:</strong> ${donor.district}</p>
                <p><strong>Mobile:</strong> 0${donor.Mobile_number}.=>To_copy 👉 <button onclick="copyNumber('${"0" + donor.Mobile_number}')" style="margin-left: 5px; cursor: pointer;">
                  <img src="Materials/Ionic-Ionicons-Copy.svg" alt="Copy" style="width: 16px; height: 16px; vertical-align: middle;">
                </button></p>
                <p><strong>Age:</strong> ${donor.Age}</p>
                <p><strong>Sex:</strong> ${donor.gender}</p>
              </div>
          
              <div calss="dick">
                <img class="img" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid #00f2ff;">
              </div>
            </div>
          </div>
        `;
                container.appendChild(card);

                // Add copyNumber function dynamically
                const script = document.createElement('script');
                script.innerHTML = `
          function copyNumber(number) {
            navigator.clipboard.writeText(number).then(() => {
              const popup = document.createElement('div');
              popup.textContent = 'Number copied!';
              popup.style.position = 'fixed';
              popup.style.bottom = '20px';
              popup.style.right = '20px';
              popup.style.padding = '10px 15px';
              popup.style.backgroundColor = '#00f2ff';
              popup.style.color = '#000';
              popup.style.borderRadius = '5px';
              popup.style.boxShadow = '0 0 10px #00f2ff';
              popup.style.zIndex = '9999';
              document.body.appendChild(popup);
              setTimeout(() => {
                popup.remove();
              }, 1500);
            });
          }
        `;
                document.body.appendChild(script);
            });
        })
        .catch(error => {
            console.error("Error loading donor data:", error);
            document.getElementById('resultsContainer').innerHTML = '<p>Error loading donor data.</p>';
        });
});