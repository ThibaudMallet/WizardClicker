const crapaud = {
    name : "Crapaud",
    cost : 100,
    gain : 2,
    number: 0
};
const lutin = {
    name: "Lutin",
    cost: 500,
    gain: 10,
    number: 0
};
const epouvantard = {
    name: "Epouvantard",
    cost: 1500,
    gain: 30,
    number: 0
};
const centaure = {
    name: "Centaure",
    cost: 5000,
    gain: 100,
    number: 0
};
const acromantule = {
    name: "Acromantule",
    cost: 15000,
    gain: 300,
    number: 0
};
const hippogriffe = {
    name: "Hippogriffe",
    cost: 50000,
    gain: 1000,
    number: 0
};
const sombral = {
    name: "Sombral",
    cost: 150000,
    gain: 3000,
    number: 0
};
const detraqueur = {
    name: "Détraqueur",
    cost: 1000000,
    gain: 10000,
    number: 0
};
const elfe = {
    name: "Elfe de maison",
    cost: 5000000,
    gain: 30000,
    number: 0
};
const lumos = {
    name: "Lumos",
    gain: 1
};
const accio = {
    name: "Accio",
    gain: 2
};
const incendio = {
    name: "Incendio",
    gain: 4
};
const morsmordre = {
    name: "Morsmordre",
    gain: 8
};
const stupefix = {
    name: "Stupefix",
    gain: 16
};
const imperium = {
    name: "Imperium",
    gain: 32
};
const endoloris = {
    name: "Endoloris",
    gain: 64
}
const avada = {
    name: "Avada Kedavra",
    gain: 128
};

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById('crapaud').textContent = `${crapaud.name} (${crapaud.number})`;
    document.getElementById('lutin').textContent = `${lutin.name} (${lutin.number})`;
    document.getElementById('epouvantard').textContent = `${epouvantard.name} (${epouvantard.number})`;
    document.getElementById('centaure').textContent = `${centaure.name} (${centaure.number})`;
    document.getElementById('acromantule').textContent = `${acromantule.name} (${acromantule.number})`;
    document.getElementById('hippogriffe').textContent = `${hippogriffe.name} (${hippogriffe.number})`;
    document.getElementById('sombral').textContent = `${sombral.name} (${sombral.number})`;
    document.getElementById('detraqueur').textContent = `${detraqueur.name} (${detraqueur.number})`;
    document.getElementById('elfe').textContent = `${elfe.name} (${elfe.number})`;
    document.getElementById('lumos').textContent = lumos.name;
    document.getElementById('accio').textContent = accio.name;
    document.getElementById('incendio').textContent = incendio.name;
    document.getElementById('morsmordre').textContent = morsmordre.name;
    document.getElementById('stupefix').textContent = stupefix.name;
    document.getElementById('imperium').textContent = imperium.name;
    document.getElementById('endoloris').textContent = endoloris.name;
    document.getElementById('avada').textContent = avada.name;

    let count = 0;

    document.getElementById('game__title').textContent = `${count} Or`;

    const castSpell = document.getElementById('game__increment-gold');
    castSpell.addEventListener('click', incrementGold);
    castSpell.textContent = "Lancer un sort !";

    function incrementGold() {
        count = count + 1;
        document.getElementById('game__title').textContent = `${count} Or`;
    };

    const buyToad = document.getElementById('game__buy-toad');
    buyToad.addEventListener('click', addToad);
    buyToad.textContent = `Acheter un ${crapaud.name} - ${crapaud.cost} Or`;

    function addToad() {
        if (count >= crapaud.cost) {
            count = count - crapaud.cost;
            crapaud.cost = Math.round(crapaud.cost * 1.2);
            crapaud.number++;
            buyToad.textContent = `Acheter un ${crapaud.name} - ${crapaud.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyLeprechaun = document.getElementById('game__buy-leprechaun');
    buyLeprechaun.addEventListener('click', addLeprechaun);
    buyLeprechaun.textContent = `Acheter un ${lutin.name} - ${lutin.cost} Or`;
    
    function addLeprechaun() {
        if (count >= lutin.cost) {
            count = count - lutin.cost;
            lutin.cost = Math.round(lutin.cost * 1.2);
            lutin.number++;
            buyLeprechaun.textContent = `Acheter un ${lutin.name} - ${lutin.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyScarecrow = document.getElementById('game__buy-scarecrow');
    buyScarecrow.addEventListener('click', addScarecrow);
    buyScarecrow.textContent = `Acheter un ${epouvantard.name} - ${epouvantard.cost} Or`;

    function addScarecrow() {
        if (count >= epouvantard.cost) {
            count = count - epouvantard.cost;
            epouvantard.cost = Math.round(epouvantard.cost * 1.2);
            epouvantard.number++;
            buyScarecrow.textContent = `Acheter un ${epouvantard.name} - ${epouvantard.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyCentaur = document.getElementById('game__buy-centaur');
    buyCentaur.addEventListener('click', addCentaur);
    buyCentaur.textContent = `Acheter un ${centaure.name} - ${centaure.cost} Or`;

    function addCentaur() {
        if (count >= centaure.cost) {
            count = count - centaure.cost;
            centaure.cost = Math.round(centaure.cost * 1.2);
            centaure.number++;
            buyCentaur.textContent = `Acheter un ${centaure.name} - ${centaure.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyAcromantule = document.getElementById('game__buy-acromantule');
    buyAcromantule.addEventListener('click', addAcromantule);
    buyAcromantule.textContent = `Acheter un ${acromantule.name} - ${acromantule.cost} Or`;

    function addAcromantule() {
        if (count >= acromantule.cost) {
            count = count - acromantule.cost;
            acromantule.cost = Math.round(acromantule.cost * 1.2);
            acromantule.number++;
            buyAcromantule.textContent = `Acheter un ${acromantule.name} - ${acromantule.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyHippogriffe = document.getElementById('game__buy-hippogriffe');
    buyHippogriffe.addEventListener('click', addHyppogriffe);
    buyHippogriffe.textContent = `Acheter un ${hippogriffe.name} - ${hippogriffe.cost} Or`;

    function addHyppogriffe() {
        if (count >= hippogriffe.cost) {
            count = count - hippogriffe.cost;
            hippogriffe.cost = Math.round(hippogriffe.cost * 1.2);
            hippogriffe.number++;
            buyHippogriffe.textContent = `Acheter un ${hippogriffe.name} - ${hippogriffe.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buySombral = document.getElementById('game__buy-sombral');
    buySombral.addEventListener('click', addSombral);
    buySombral.textContent = `Acheter un ${sombral.name} - ${sombral.cost} Or`;

    function addSombral() {
        if (count >= sombral.cost) {
            count = count - sombral.cost;
            sombral.cost = Math.round(sombral.cost * 1.2);
            sombral.number++;
            buySombral.textContent = `Acheter un ${sombral.name} - ${sombral.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyDementor = document.getElementById('game__buy-dementor');
    buyDementor.addEventListener('click', addDementor);
    buyDementor.textContent = `Acheter un ${detraqueur.name} - ${detraqueur.cost} Or`;

    function addDementor() {
        if (count >= detraqueur.cost) {
            count = count - detraqueur.cost;
            detraqueur.cost = Math.round(detraqueur.cost * 1.2);
            detraqueur.number++;
            buyDementor.textContent = `Acheter un ${detraqueur.name} - ${detraqueur.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    const buyElf = document.getElementById('game__buy-elf');
    buyElf.addEventListener('click', addElf);
    buyElf.textContent = `Acheter un ${elfe.name} - ${elfe.cost} Or`;

    function addElf() {
        if (count >= elfe.cost) {
            count = count - elfe.cost;
            elfe.cost = Math.round(elfe.cost * 1.2);
            elfe.number++;
            buyElf.textContent = `Acheter un ${elfe.name} - ${elfe.cost} Or`;
            document.getElementById('game__title').textContent = `${count} Or`;
        }
    };

    setInterval(increment, 1000);
    function increment() {
        count = count + (crapaud.number * crapaud.gain);
        count = count + (lutin.number * lutin.gain);
        count = count + (epouvantard.number * epouvantard.gain);
        count = count + (centaure.number * centaure.gain);
        count = count + (acromantule.number * acromantule.gain);
        count = count + (hippogriffe.number * hippogriffe.gain);
        count = count + (sombral.number * sombral.gain);
        count = count + (detraqueur.number * detraqueur.gain);
        count = count + (elfe.number * elfe.gain);
        document.getElementById('game__title').textContent = `${count} Or`;
    };
}
