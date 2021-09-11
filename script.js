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
  if (player == com) return "SERI!";
  if (player == "gunting") return com == "batu" ? "Kalah!" : "Menang!";
  if (player == "batu") return com == "gunting" ? "Menang!" : "kalah!";
  if (player == "kertas") return com == "gunting" ? "Kalah!" : "Menang!";
};

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((choice) => {
  choice.addEventListener("click", () => {
    const pilihanCom = getPilihanCom();
    const pilihanPlayer = choice.className;
    const hasil = getResult(pilihanPlayer, pilihanCom);

    const imgCom = document.querySelector(".area-com");
    imgCom.setAttribute("src", `./assets/${pilihanCom}.png`);

    alert(hasil);
  });
});
