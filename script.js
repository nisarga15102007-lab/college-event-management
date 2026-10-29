
const STORAGE_KEY = "unifest_registrations";

function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function registerEvent(eventName) {
  const registrations = getRegistrations();

  if (registrations.includes(eventName)) {
    alert("You have already registered for " + eventName + "!");
    return;
  }

  const confirmRegistration = confirm(
    "Do you want to register for " + eventName + "?"
  );

  if (confirmRegistration) {
    registrations.push(eventName);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(registrations)
    );

    alert("Registration successful for " + eventName + "!");
  }
}

document.getElementById("year").textContent =
  new Date().getFullYear();
