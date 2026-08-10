/* js for quiz find role */
function showRole(role, selectedButton) {

    const roles = {
        clash: {
            name: "Clash Lane",
            icon: "⚔️",
            description:
                "You enjoy direct battles and independent gameplay. " +
                "Clash Lane suits players who enjoy fighting enemies " +
                "head-on and handling 1v1 situations."
        },

        jungle: {
            name: "Jungle",
            icon: "🗺️",
            description:
                "You enjoy strategy and moving around the battlefield. " +
                "Jungle suits players who like creating opportunities " +
                "and controlling objectives."
        },

        mid: {
            name: "Mid Lane",
            icon: "✨",
            description:
                "You enjoy powerful abilities and fast decisions. " +
                "Mid Lane lets you deal burst damage while helping " +
                "different areas of the map."
        },

        farm: {
            name: "Farm Lane",
            icon: "🏹",
            description:
                "You are patient and enjoy becoming stronger over time. " +
                "Farm Lane suits players who want to become a powerful " +
                "damage dealer later in the match."
        },

        roamer: {
            name: "Roamer",
            icon: "🛡️",
            description:
                "You are a team player who enjoys helping others. " +
                "Roamer lets you protect teammates, provide support " +
                "and help set up team fights."
        }
    };

    const result = roles[role];
    const resultBox = document.getElementById("roleResult");


    // Remove previous selection
    document.querySelectorAll(".role-option").forEach(button => {
        button.classList.remove("selected");
    });


    // Highlight selected answer
    selectedButton.classList.add("selected");


    // Show result
    resultBox.innerHTML = `
        <span>YOUR RECOMMENDED ROLE</span>

        <h2>
            ${result.icon} ${result.name}
        </h2>

        <p>
            ${result.description}
        </p>
    `;

    resultBox.style.display = "block";
}

/* js for find hero */
const heroRecommendations = {

    clash: [
        {
            name: "Arthur",
            image: "images/arthur.jpg",
            description:
                "A durable fighter with simple abilities. Arthur is easy to control and forgiving for beginners."
        },

        {
            name: "Dun",
            image: "images/dun.jpg",
            description:
                "A tough fighter with good survivability and crowd control, making him easier to learn in Clash Lane."
        },

        {
            name: "Biron",
            image: "images/biron.jpg",
            description:
                "A strong fighter with straightforward skills, good damage and useful sustain during fights."
        }
    ],

    jungle: [
        {
            name: "Butterfly",
            image: "images/butterfly.jpg",
            description:
                "A straightforward assassin who can quickly finish low-health enemies and move between fights."
        },

        {
            name: "Wukong",
            image: "images/wukong.jpg",
            description:
                "A beginner-friendly assassin with strong basic attacks and simple burst damage."
        },

        {
            name: "Lam",
            image: "images/lam.jpg",
            description:
                "A mobile assassin who can move quickly around the map and chase down enemies."
        }
    ],

    mid: [
        {
            name: "Angela",
            image: "images/angela.jpg",
            description:
                "A simple mage with strong ranged abilities and burst damage, making her easy for beginners to understand."
        },

        {
            name: "Princess Frost",
            image: "images/princess-frost.jpg",
            description:
                "A mage with useful crowd control and long-range abilities that can help control team fights."
        },

        {
            name: "Milady",
            image: "images/milady.jpg",
            description:
                "A straightforward mage who can summon machines and pressure enemy towers from a safe distance."
        }
    ],

    farm: [
        {
            name: "Hou Yi",
            image: "images/hou-yi.jpg",
            description:
                "A beginner-friendly marksman with simple attacks and strong continuous damage."
        },

        {
            name: "Lady Sun",
            image: "images/lady-sun.jpg",
            description:
                "A marksman with good mobility and straightforward damage, suitable for learning positioning."
        },

        {
            name: "Alessio",
            image: "images/alessio.jpg",
            description:
                "A ranged damage dealer with easy-to-understand attacks and useful movement abilities."
        }
    ],

    roamer: [
        {
            name: "Yaria",
            image: "images/yaria.jpg",
            description:
                "A supportive hero who can protect teammates and is relatively easy for new players to understand."
        },

        {
            name: "Dolia",
            image: "images/dolia.jpg",
            description:
                "A team-focused support hero with healing and useful abilities that help teammates during fights."
        },

        {
            name: "Zhang Fei",
            image: "images/zhang-fei.jpg",
            description:
                "A durable tank who can protect teammates and absorb damage during team fights."
        }
    ]
};


function showHeroes(role, clickedButton) {

    const heroes = heroRecommendations[role];

    document.getElementById("heroImg1").src = heroes[0].image;
    document.getElementById("heroName1").textContent = heroes[0].name;
    document.getElementById("heroDesc1").textContent =
        heroes[0].description;


    document.getElementById("heroImg2").src = heroes[1].image;
    document.getElementById("heroName2").textContent = heroes[1].name;
    document.getElementById("heroDesc2").textContent =
        heroes[1].description;


    document.getElementById("heroImg3").src = heroes[2].image;
    document.getElementById("heroName3").textContent = heroes[2].name;
    document.getElementById("heroDesc3").textContent =
        heroes[2].description;


    document.querySelectorAll(".role-buttons button").forEach(button => {
        button.classList.remove("active");
    });

    clickedButton.classList.add("active");
}