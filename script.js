const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const main = document.getElementsByClassName("main");

let init = 0;
botSession();

let botSay = (data) => {
  return [
    `Hai, Saya adalah Bot Kamu, siapa nama kamu?`,
    `Halo ${data?.jawaban} salam kenal, kalau boleh tau kamu umur berapa?`,
    `Ohhh ${data?.jawaban}, kalau boleh tau hobi kamu apa?`,
    `Wahh sama dong hobi aku juga suka ${data?.jawaban}, btw punya pacar gak?`,
    `Ohh ${data?.jawaban}, yaudah aku pergi dulu ya`,
  ];
};

pertanyaan.innerHTML = botSay()[0];
const usersData = [];

function botStart() {
  if (jawaban.value.length == 0) return alert("Silahkan isi Jawaban dahulu!!!");
  init++;
  if (init === 1) {
    botDelay({ jawaban: jawaban.value });
  } else if (init === 2) {
    botDelay({ jawaban: jawaban.value });
  } else if (init === 3) {
    botDelay({ jawaban: jawaban.value });
  } else if (init === 4) {
    botDelay({ jawaban: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botSession();
    botReload();
  }
}

function botDelay(params) {
  loaders.style.display = "block";
  main[0].style.filter = "blur(1rem)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(params)[init];
    jawaban.value = "";
    loaders.style.display = "none";
    main[0].style.filter = "none";
  }, 1500);
  usersData.push(jawaban.value);
}

function finishing() {
  if (jawaban.value.length == 0) return alert("Silahkan isi Jawaban dahulu!!!");
  loaders.style.display = "block";
  main[0].style.filter = "blur(1rem)";
  setTimeout(() => {
    pertanyaan.innerHTML = `Makasih ya ${usersData[0]} Udah mampir:D`;
    loaders.style.display = "none";
    main[0].style.filter = "none";
    jawaban.value = "Iya:)";
  }, 1800);
}

function botSession() {
  if (init <= 5) {
    console.log("Bot is starting now...");
  } else {
    console.log("Bot Session is End");
  }
}

function botReload() {
  alert("Terimakasih!!!");
  loaders.style.display = "block";
  main[0].style.filter = "blur(1rem)";
  setTimeout(() => {
    loaders.style.display = "none";
    main[0].style.filter = "none";
    window.location.reload();
  }, 3000);
}
