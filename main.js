const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzGg5FjEqDAMT2jD-5G6iwC3UeamIqNlCHqyvhkgnQCQmWLtvbkwmq0cXDf8sI18bzFeQ/exec";
const form = document.forms["mailing-list"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(SCRIPT_URL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
