(function () {
  "use strict";

  // Fixed target instant: 5 January 2029, 00:00:00 Universal Time (UTC).
  // Using an explicit "Z" offset makes the underlying instant identical
  // for every visitor, no matter what time zone their own device is set to.
  var TARGET_DATE = new Date("2029-01-05T00:00:00Z").getTime();

  var elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  var countdownEl = document.getElementById("countdown");
  var completeEl = document.getElementById("countdown-complete");

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function render() {
    var remainingMs = TARGET_DATE - Date.now();

    if (remainingMs <= 0) {
      elements.days.textContent = "00";
      elements.hours.textContent = "00";
      elements.minutes.textContent = "00";
      elements.seconds.textContent = "00";

      countdownEl.hidden = true;
      completeEl.hidden = false;

      clearInterval(intervalId);
      return;
    }

    var totalSeconds = Math.floor(remainingMs / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    elements.days.textContent = pad(days);
    elements.hours.textContent = pad(hours);
    elements.minutes.textContent = pad(minutes);
    elements.seconds.textContent = pad(seconds);
  }

  render();
  var intervalId = setInterval(render, 1000);
})();
