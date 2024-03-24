const institutions = [
    {
        name: "Government Office 1",
        location: "Nairobi",
        facilities: "Ramps, accessible restrooms",
        contact: "Contact: +254 123 456 789"
    },
    {
        name: "Government Office 2",
        location: "Mombasa",
        facilities: "Elevators, accessible parking",
        contact: "Contact: +254 987 654 321"
    },
    // Add more institutions as needed
];

document.addEventListener("DOMContentLoaded", function() {
    const institutionList = document.getElementById('institutionList');
    
    institutions.forEach(function(institution) {
        const institutionDiv = document.createElement('div');
        institutionDiv.classList.add('institution');
        
        const nameHeader = document.createElement('h2');
        nameHeader.textContent = institution.name;
        
        const locationPara = document.createElement('p');
        locationPara.textContent = `Location: ${institution.location}`;
        
        const facilitiesPara = document.createElement('p');
        facilitiesPara.textContent = `Facilities: ${institution.facilities}`;
        
        const contactPara = document.createElement('p');
        contactPara.textContent = institution.contact;
        
        institutionDiv.appendChild(nameHeader);
        institutionDiv.appendChild(locationPara);
        institutionDiv.appendChild(facilitiesPara);
        institutionDiv.appendChild(contactPara);
        
        institutionList.appendChild(institutionDiv);
    });
});
