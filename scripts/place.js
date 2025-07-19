document.addEventListener('DOMContentLoaded', () => {
    const temperatureSpan = document.getElementById('temperature');
    const windSpeedSpan = document.getElementById('windspeed');
    const windChillSpan = document.getElementById('windchill');


    const temperature = parseFloat(temperatureSpan.textContent);
    const windSpeed = parseFloat(windSpeedSpan.textContent);


    function calculateWindChill(temp, speed) {
        
        return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    }


    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        windChillSpan.textContent = `${windChillValue.toFixed(1)}°C`;
    } else {
      
        windChillSpan.textContent = "N/A";
    }



    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

  
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
    }
});