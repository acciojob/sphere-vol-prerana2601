function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value;

    // Convert the input to a floating-point number
    const radius = parseFloat(radiusInput);

    // Validate the input to ensure it's a valid non-negative number
    if (isNaN(radius) || radius < 0) {
        // Display NaN if the input is not valid
        document.getElementById('volumeOutput').textContent = 'NaN';
    } else {
        // Calculate the volume using the formula V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the result, rounded to 4 decimal places
        document.getElementById('volumeOutput').textContent = volume.toFixed(4);
    }
}
