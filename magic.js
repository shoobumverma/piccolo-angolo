document.addEventListener("DOMContentLoaded", function () {
  var samay = new Date();
  var videshSamay = samay.getUTCHours();

  if ((videshSamay >= 0 && videshSamay < 8) || videshSamay > 22) {
    document.getElementById("isHeSleeping").innerHTML =
      "honestly, given the late hour, he's probably catching up on his beauty sleep. 💤";
  } else {
    var wakeButton = document.getElementById("wakeButton");
    wakeButton.innerHTML = "[ get a fun fact 🎈 ]";
  }
});

function thankyou() {
  alert("Thaaaaaaaaaank you");
  window.location.href = "https://www.shoob.design";
}

function wakeup() {
  var space = document.getElementById("activitySpace");
  var activityContent = document.getElementById("isHeSleeping");
  var wakeButton = document.getElementById("wakeButton");

  space.classList.add("fadeOut");

  setTimeout(() => {
    if (
      activityContent.innerHTML ===
      "honestly, given the late hour, he's probably catching up on his beauty sleep. 💤"
    ) {
      activityContent.innerHTML = "Oh boi, are you sure? 👀";
    } else if (activityContent.innerHTML === "Oh boi, are you sure? 👀") {
      activityContent.innerHTML =
        "He clearly didn't think this through. How about I give you a riddle instead? 🧠";
    } else if (
      activityContent.innerHTML ===
      "He clearly didn't think this through. How about I give you a riddle instead? 🧠"
    ) {
      activityContent.innerHTML =
        "These emojis represent some of his favorite things. Can you identify them? 🍳 🏃‍♂️ 👑 🍵";
    } else if (
      activityContent.innerHTML ===
      "These emojis represent some of his favorite things. Can you identify them? 🍳 🏃‍♂️ 👑 🍵"
    ) {
      activityContent.innerHTML =
        "His favorite things include cooking 🍳 , running 🏃‍♂️ , playing chess 👑 , and sipping on tea 🍵.";
    } else if (
      activityContent.innerHTML ===
      "okay, he could also be cooking 🍳 , running 🏃‍♂️ , playing chess 👑 , or trying to get vaccinated 💉."
    ) {
      activityContent.innerHTML = "shubham in emoji is 👟🍑";
    } else {
      activityContent.innerHTML =
        "okay, he could also be cooking 🍳 , running 🏃‍♂️ , playing chess 👑 , or trying to get vaccinated 💉.";
    }

    if (wakeButton.innerHTML === "[ wake him up ]") {
      wakeButton.innerHTML = "[ wasn't this his idea? ]";
    } else if (wakeButton.innerHTML === "[ wasn't this his idea? ]") {
      wakeButton.innerHTML = "[ sure, I'll take it ]";
    } else if (wakeButton.innerHTML === "[ sure, I'll take it ]") {
      wakeButton.innerHTML = "[ click here for answer ]";
    } else if (wakeButton.innerHTML === "[ click here for answer ]") {
      wakeButton.style.display = "none";
    } else if (wakeButton.innerHTML === "[ see activities 👀 ]") {
      wakeButton.innerHTML = "[ get a fun fact 🎈 ]";
    } else {
      wakeButton.innerHTML = "[ see activities 👀 ]";
    }
  }, 200);

  setTimeout(() => {
    space.classList.remove("fadeOut");
  }, 200);
}
