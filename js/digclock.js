 //Create a time data function 
    function currentTime() {
      //Declare variables
      var d = new Date(); //Get current date
      var hr = d.getHours(); //Get current hours
      var min = d.getMinutes(); //Get current minutes
      var sec = d.getSeconds(); //Get current seconds
      var ampm; //Declare empty variable to store AM or PM

      // Additional Variables
      var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
      var timeDiff; //To store time difference between GMT hour and Local hour
      var adjTimeDiff; //To store time difference converted to positive number
      var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

      
      timeDiff = utchr - hr;

      
      if (timeDiff < 0) {
          timeDiff += 24;
      }

     
      if (utchr == 0) {
          utchr = 12; // Midnight adjustment
      } else if (utchr > 12) {
          utchr -= 12; // Convert afternoon/evening military hours (13-23) to standard (1-11)
      }

      
      if (timeDiff < 0) {
          adjTimeDiff = timeDiff * -1;
      } else {
          adjTimeDiff = timeDiff;
      }

      
      if (adjTimeDiff == 8) {
          timeZone = "PT"; // This will now correctly show PT if you are in Pacific Time!
      } else if (adjTimeDiff == 7) {
          timeZone = "MT";
      } else if (adjTimeDiff == 6) {
          timeZone = "CT";
      } else if (adjTimeDiff == 5) {
          timeZone = "ET";
      } else {
          timeZone = ""; 
      }

      
      if (sec < 10) {
        sec = "0" + sec;
      }
      // Add 0 to single digits for minutes
      if (min < 10) {
        min = "0" + min;
      }

      // Determine local AM or PM string
      if (hr == 12) {
        ampm = "PM"; 
      } else if (hr > 12) {
        hr -= 12; 
        ampm = "PM"; 
      } else {
        ampm = "AM"; 
      }

      
      var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

      // Display current local time and time zone on HTML elements
      document.getElementById("clock").innerText = time; //adding time
    }

    // Initial run of time data function
    currentTime();

    // Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer