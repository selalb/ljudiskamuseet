const pink = document.querySelector("#Klezmer-1");

const audioId = [
  "audiobeat1",
  "audiobeat2",
  "audiobeat3",
  "audiobeat4",
  "audiobeat5",
  "audiobeat6",
  "audiobeat7",
  "audiobeat8",
  "audiobeat9",
  "audiobeat10",
  "audiobeat11",
  "audiobeat12",
  "audiobeat13",
  "audiobeat14",
  "audiobeat15",
  "audiobeat16",
  "audiobeat17",
  "audiobeat18",
  "audiobeat19",
  "audiobeat20"
];

const dots = [
  "dot1",
  "dot2",
  "dot3",
  "dot4",
  "dot5",
  "dot6",
  "dot7",
  "dot8",
  "dot9",
  "dot10",
  "dot11",
  "dot12",
  "dot13",
  "dot14",
  "dot15",
  "dot16",
  "dot17",
  "dot18",
  "dot19",
  "dot20"
];

const $audio = [];
const $dots = [];

for (let id of audioId) {
  let el = document.getElementById(id);
  el.preload = "auto";
  el.loop = "true";
  el.muted = "true";
  $audio.push(el);
}

for (let id of dots) {
  let el = document.getElementById(id);
  $dots.push(el);
  el.onclick = function() {
    el.classList.toggle("active");
    let elAudio = el.querySelector("audio");
    if (elAudio.muted) {
      elAudio.muted = false;
    } else {
      elAudio.muted = true;
    }
  };
}

window.onclick = function() {
  for (let source of $audio) {
    source.play();
  }
};

window.onscroll = function() {
  var st =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  if (st > pink.offsetTop) {
    document.documentElement.classList.add("hide-logo");
  } else {
    document.documentElement.classList.remove("hide-logo");
  }
};

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Läs mer";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Stäng";
    moreText.style.display = "inline";
  }
}

function myFunction99() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Läs mer";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Stäng";
    moreText.style.display = "inline";
  }
}
