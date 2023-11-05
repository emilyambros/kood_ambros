function suurim() {
    let sisendMassiiv = [];
    let arv = parseFloat(prompt("Sisesta number (või sisesta tühi kast lõpetamiseks):"));
    while (!isNaN(arv)) {
      sisendMassiiv.push(arv);
      arv = parseFloat(prompt("Sisesta järgmine number (või sisesta tühi kast lõpetamiseks):"));
    }
    if (sisendMassiiv.length === 0) {
      console.log("Sisestasid tühja kasti. Programmi lõpetamine.");
    } else {
      const suurimArv = Math.max(...sisendMassiiv);
      console.log("Sisestatud arvudest suurim on: " + suurimArv);
    }
  } 
  suurim();

function celsiusToFahrenheit() {
    const C = parseFloat(prompt("Sisesta temperatuur celsiuses: "));
    if(!isNaN(C)) {
        const fahrenheit = (C * 9/5) + 32;
        console.log(`${C} °C on ${fahrenheit} °F.`); 
    }
  
}
celsiusToFahrenheit();

function korrutustabel() {
    const number = parseFloat(prompt("Sisesta number: "));
  
    console.log(`Korrutustabel numbriga ${number}:`);
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      console.log(`${number} * ${i} = ${result}`);
    }

  }
korrutustabel();

function faktoriaal() {
    var arv = parseInt(prompt("Sisesta arv, mille faktoriaali soovid arvutada:"));
    if (arv < 0) {
        return "Faktoriaali ei saa võtta negatiivsest arvust.";
      } else if (arv === 0) {
        return 1;
      } else {
        let factorial = 1;
        for (let i = 1; i <= arv; i++) {
          factorial *= i;
        }
        console.log(factorial)
      }
    }
faktoriaal();

function tähed() {
    var kujundiKõrgus = parseInt(prompt("Sisesta arv, mitmerealist kujundit tahaksid"));

    let kujundiLaius = 2 * kujundiKõrgus - 1;
    for (let rida = 1; rida <= kujundiKõrgus; rida++) {
      let ridaMuster = '';
      for (let tark = 1; tark <= kujundiLaius; tark++) {
        if (tark >= kujundiKõrgus - rida + 1 && tark <= kujundiKõrgus + rida - 1) {
            ridaMuster += '*';
          } else {
            ridaMuster += ' ';
        }
     } 
        console.log(ridaMuster);
    }
}
  tähed();
  
  function Ül20() {
    const number = parseFloat(prompt("Sisesta arv:"));
    if (number <= 1) {
      console.log(`${number} ei ole algarv.`);
      return;
    }
  
    let onAlgarv = true;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        onAlgarv = false;
        break;
      }
    }
  
    if (onAlgarv) {
      console.log(`${number} on algarv.`);
    } else {
      console.log(`${number} ei ole algarv.`);
    }
  }
 Ül20()