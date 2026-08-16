var partnerPhotos = []; // Array to hold the <img> tags
    var partnerFileNames = [
        "partner-bustour",
        "partner-cabinrental",
        "partner-campingadv",
        "partner-collegetours",
        "partner-rentalbike",
        "partner-tourgroup"
    ]; // Array containing the unique file names
    
    var partnerAltTexts = [
        "Partner Bus Tours",
        "Partner Cabin Rental",
        "Partner Camping Adventure",
        "Partner College Tours",
        "Partner Bike Rentals",
        "Partner Tour Group"
    ]; // Array matching the alt text attributes precisely
    
    var partnerImageList = []; // Array to store the compiled <li> strings
    var partnerImage; // Variable to temporarily store each assembled <li> snippet
    var openPartnerList = "<li class='partner'>"; // Match the class "partner"
    var closePartnerList = "</li>";

    // Loop through all 6 partners
    for (var j = 0; j < partnerFileNames.length; j++) {
        // Build the img tag pointing to the images/partners/ subfolder with its specific alt text
        partnerPhotos.push("<img src='images/partners/" + partnerFileNames[j] + ".png' alt='" + partnerAltTexts[j] + "'>");
        
        // Assemble into an HTML list item string
        partnerImage = openPartnerList + partnerPhotos[j] + closePartnerList;
        
        // Push the element to our master layout array
        partnerImageList.push(partnerImage);
    }
    
    // Output the fully assembled HTML string cleanly (without commas) into the #partners element
    document.getElementById("partners").innerHTML = partnerImageList.join("");