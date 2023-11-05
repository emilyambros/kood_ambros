function harjutus1() {
    const name = prompt("Sisesta oma nimi");
    if (name) {
        console.log(`Tere, ${name}!`);
    }
}
harjutus1();

function harjutus2() {
    let mark = "Ford";
    let mudel = "Mustang"; 
    let värv = "punane";

    console.log(`Minu auto on ${värv} ${mark} ${mudel}.`);
}
harjutus2();

function harjutus3() {
    const kõrgus = parseFloat(prompt("Sisesta püramiidi kõrgus:"));
    const PõhjaPindala = parseFloat(prompt("Sisesta püramiidi põhjapindala:"));

    if (!isNaN(PõhjaPindala) && !isNaN(kõrgus)) {
        const Ruumala = (1/3)*PõhjaPindala*kõrgus;
    console.log(`Püramiidi pindala põhjapindalaga ${PõhjaPindala} ruutmeetrit ja kõrgusega ${kõrgus} meetrit on ${Ruumala} kuupmeetrit.`)    
    }
}
harjutus3();

function harjutus4(nimi) {
    if (nimi.length > 5) {
        nimi = nimi.slice(0, 5) + "...";
    }
    console.log(nimi);
}1
const kasutajaNimi = prompt("Sisesta nimi:");
harjutus4(kasutajaNimi);

function harjutus5(sisend) {
    const tähemärgid = sisend.split('');
    const pööratudTähemärgid = tähemärgid.reverse();
    const pööratudString = pööratudTähemärgid.join ('');
    console.log(pööratudString);
}
const kasutajaSisend = prompt("Sisesta string");
harjutus5(kasutajaSisend);

function harjutus6() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
harjutus6();

function harjutus7() {
    let arv = 100;
    while (arv >= 1) {
        console.log(arv);
        arv--;
    }
}
harjutus7();


const myNameComponents = ['Samuel', 'L', 'Jackson'];

function harjutus10() {
    const fullName = myNameComponents.join(' ');
    console.log(`Minu nimi on ${fullName}.`);
}
harjutus10();

function harjutus11(hinded) {
    let summa = 0;
    for (let i = 0; i < hinded.length; i++) {
        summa += hinded[i];
    }
    const keskmine = summa / hinded.length;
    console.log(`Õpilase keskmine hinne on ${keskmine}.`);
}
const hinded = [3, 5, 4, 3 , 4, 5, 3, 4, 2];
harjutus11(hinded);

function harjutus12() {
    for(let i = 1; i <= 100; i++) {
        let tulemus = ""
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("Lütseum")
        } 
        if (i === 50) {
            console.log("Tallinna Prantsuse Lütseum")
        }
        if (i % 3 === 0) {
            console.log("Tallinna")
        }
        if (i % 5 === 0) {
            console.log("Prantsuse")
        }
      
    }
}
harjutus12();

function harjutus13() {
    const input = prompt("Sisestage komadega eraldatud nimed:");
    const namesArray = input.split(",");
    
    if (namesArray.includes("Marek")) {
        console.log("Marek on massiivis.");
        } else {
            console.log("Marek ei ole massiivis.");
    }
}
harjutus13();

let inimesed =  [
    {
        nimi: "Alice",
        vanus: 28,
        address: "Park 7",
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: "Bob",
        vanus: 32,
        address: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: "Marek",
        vanus: 22,
        address: "Metsatee 3",
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function harjutus14(inimesed) {
    let vanemInimene = null;
    let pikemAadress = null;
    let lühemTelefoniNumber = null;
    let eestiEmail = null;

    for (const inimene of inimesed) {
        if (!vanemInimene || inimene.vanus > vanemInimene.vanus) {
            vanemInimene = inimene;
        }
        if (!pikemAadress || inimene.aadress.pikkus > pikemAadress.aadress.pikkus) {
            pikemAadress = inimene;
        }
        if (!lühemTelefoniNumber || inimene.telefon.pikkus < lühemTelefoniNumber.telefon.pikkus) {
            lühemTelefoniNumber = inimene;
          }
      
          if (inimene.email.includes("eesti")) {
            eestiEmail = inimene;
          }
    }
        console.log("Kõige vanema inimese nimi:", vanemInimene.nimi);
        console.log("Inimene, kellel on kõige pikem aadress:", pikemAadress.nimi);
        console.log("Inimene, kellel on kõige lühem telefoninumber:", lühemTelefoniNumber.nimi);
        console.log("Inimene, kelle emaili aadressis sisaldub sõna eesti:", eestiEmail.nimi);
}
harjutus14(inimesed)