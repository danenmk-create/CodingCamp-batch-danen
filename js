function updateDateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    const hour = now.getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    document.getElementById("greeting").textContent = greeting;
}

updateDateTime();

setInterval(updateDateTime, 1000);