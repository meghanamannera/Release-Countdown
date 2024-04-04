// Set the target date for the countdown (format: YYYY-MM-DD)
const targetDate = new Date("2024-12-31").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining until the target date
    const timeRemaining = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown expired!";
    }
}, 1000);
