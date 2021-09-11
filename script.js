const getPilihanCom = () => {
  // Com
  const com = Math.random();

  // random
  if (com < 0.34) return "gunting";
  if (com >= 0.34 && com < 0.67) return "batu";
  return "kertas";
};

const getResult = (player, com) => {
  // rules
  if (player == com) return "DRAW";
  if (player == "gunting") return com == "batu" ? "COM WIN" : "PLAYER 1 WIN";
  if (player == "batu") return com == "gunting" ? "PLAYER 1 WIN" : "COM WIN";
  if (player == "kertas") return com == "gunting" ? "COM WIN" : "PLAYER 1 WIN";
};

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((choice) => {
  choice.addEventListener("click", () => {
    const pilihanCom = getPilihanCom();
    const pilihanPlayer = choice.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const imgCom = document.querySelector(".area-com");
    imgCom.setAttribute("src", `./assets/${pilihanCom}.png`);

    const info = document.querySelector(".vs");
    info.innerHTML = hasil;

    // alert(hasil);
  });
});

const refresh = () => {};
