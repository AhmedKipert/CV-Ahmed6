function createConf() {
  const conf = document.createElement("div");
  const body = document.querySelector("body");
  const colors = [
    "red",
    "navy",
    "skyblue",
    "orange",
    "goldenrod",
    "white",
    "cyan",
    "green",
    "pink",
    "purple",
    "orangered",
  ];

  const taille = Math.floor(Math.random() * (13 - 5 + 1) + 5);
  const color = colors[Math.floor(Math.random() * colors.length + 1)];
  const duree = Math.floor(Math.random() * (5 - 3 + 1) + 3);
  const left = Math.floor(Math.random() * 100);
  conf.classList.add("conf");
  conf.style.width = taille + "px";
  conf.style.height = taille + "px";
  conf.style.left = left + "vw";

  conf.style.backgroundColor = color;
  conf.style.animationDuration = duree + "s";
  if (Math.floor(Math.random() * 5) < 3) {
    conf.style.borderRadius = "50%";
  }
  body.appendChild(conf);
  setTimeout(function () {
    conf.remove();
  }, duree * 1000);

  console.log(`taille: ${taille}\n duree:${duree}`);
}

for (let i = 0; i < 300; i++) {
  setTimeout(createConf, i*10);
}
