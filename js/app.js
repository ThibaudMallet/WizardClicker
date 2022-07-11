const beasts = 
[
    {
        name : "Crapaud",
        cost : 10,
        gain : 2,
        number: 0
    },
    {
        name: "Lutin",
        cost: 50,
        gain: 10,
        number: 0
    },
    {
        name: "Epouvantard",
        cost: 1500,
        gain: 30,
        number: 0
    },
    {
        name: "Centaure",
        cost: 5000,
        gain: 100,
        number: 0
    },
    {
        name: "Acromantule",
        cost: 15000,
        gain: 300,
        number: 0
    },
    {
        name: "Hippogriffe",
        cost: 50000,
        gain: 1000,
        number: 0
    },
    {
        name: "Sombral",
        cost: 150000,
        gain: 3000,
        number: 0
    },
    {
        name: "Détraqueur",
        cost: 1000000,
        gain: 10000,
        number: 0
    },
    {
        name: "Elfe de maison",
        cost: 5000000,
        gain: 30000,
        number: 0
    },
]

const spells = 
[
    {
        name: "Lumos",
        gain: 1
    },
    {
        name: "Accio",
        gain: 2
    },
    {
        name: "Incendio",
        gain: 4
    },
    {
        name: "Morsmordre",
        gain: 8
    },
    {
        name: "Stupefix",
        gain: 16
    },
    {
        name: "Imperium",
        gain: 32
    },
    {
        name: "Endoloris",
        gain: 64
    },
    {
        name: "Avada Kedavra",
        gain: 128
    },
]

const avada = {
    name: "Avada Kedavra",
    gain: 128
};

document.addEventListener("DOMContentLoaded", init);

function init() {

    
    let count = 0;
    
    document.getElementById('game-info__wallet').textContent = `${count} Or`;
    
    let incomePerSec = 0;
    
    document.getElementById('incomePerSec').textContent = `Income : ${incomePerSec} Or/sec`;
    
    const castSpell = document.getElementById('game__increment-gold');
    castSpell.addEventListener('click', incrementGold);
    castSpell.textContent = "Lancer un sort !";
    
    function incrementGold() {
        count = count + 1;
        document.getElementById('game-info__wallet').textContent = `${count} Or`;
    };
    
    const beastsList = document.querySelector('.beast__list');
    for (const beast of beasts) {
        const liBeast = document.createElement('li');
        liBeast.textContent = `${beast.name} (${beast.number})`;
        liBeast.classList.add('beast-list__item');
        beastsList.appendChild(liBeast);
    }

    const spellList = document.querySelector('.spell__list');
    for (const spell of spells) {
        const liSpell = document.createElement('li');
        liSpell.textContent = `${spell.name} (${spell.gain} Or)`;
        liSpell.classList.add('spell-list__item');
        spellList.appendChild(liSpell);
    }

    const buySection = document.querySelector('.buyButton');
    for (const beast of beasts) {
        const buyButton = document.createElement('button');
        buyButton.textContent = `Acheter un ${beast.name} (${beast.cost} Or)`;
        buySection.appendChild(buyButton);
        
        buyButton.addEventListener('click', buyBeast);
        buyButton.addEventListener('click', refreshIncome);
        function buyBeast() {
            if (count >= beast.cost) {
                count = count - beast.cost;
                beast.cost = Math.round(beast.cost * 1.2);
                beast.number++;
                buyButton.textContent = `Acheter un ${beast.name} (${beast.cost} Or)`;
                document.getElementById('game-info__wallet').textContent = `${count} Or`;
                const liBeast = document.querySelectorAll('.beast-list__item');
                for (const beastLi of liBeast) {
                        if (beastLi.textContent.startsWith(beast.name)) {
                            beastLi.textContent = `${beast.name} (${beast.number})`;
                        };
                    }
            }
        }
        function refreshIncome() {
            
        }
        
    }

    setInterval(increment, 1000);
    function increment() {
        for (const beast of beasts) {
            count = count + (beast.number * beast.gain);
        }
        document.getElementById('game-info__wallet').textContent = `${count} Or`;
    };
}
