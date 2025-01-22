// Simulated class timing (start and end hours)
const classStartHour = 9;
const classEndHour = 17;

// Attendance tracking
const attendance = [];

// Form submission for marking attendance
document.getElementById("attendanceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const currentHour = new Date().getHours();
    const statusMessage = document.getElementById("statusMessage");
    const attendanceList = document.getElementById("attendanceList");

    // Validate student ID
    if (studentId === "") {
        statusMessage.textContent = "Please enter a valid Student ID.";
        statusMessage.style.color = "red";
        return;
    }

    // Check if within class hours
    if (currentHour < classStartHour || currentHour >= classEndHour) {
        statusMessage.textContent = "Attendance can only be marked during class hours (9 AM - 5 PM).";
        statusMessage.style.color = "red";
        return;
    }

    // Check if student has already marked attendance
    if (attendance.includes(studentId)) {
        statusMessage.textContent = "You have already marked your attendance.";
        statusMessage.style.color = "red";
        return;
    }

    // Mark attendance
    attendance.push(studentId);
    const listItem = document.createElement("li");
    listItem.textContent = `Student ID: ${studentId}`;
    if (attendanceList.children[0] && attendanceList.children[0].textContent === "No students have checked in yet.") {
        attendanceList.innerHTML = "";
    }
    attendanceList.appendChild(listItem);

    // Show success message
    statusMessage.textContent = "Attendance marked successfully!";
    statusMessage.style.color = "green";

    // Clear input field
    document.getElementById("attendanceForm").reset();
});
