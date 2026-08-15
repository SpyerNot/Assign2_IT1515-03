/* Find Your Role Quiz. Recommends a role based on user's answer */
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

/* Beginner Hero Recommendation. Stores 3 beginner heroes for each role */
const heroRecommendations = {

    clash: [
        {
            name: "Arthur",
            image: "image/arthur.jpg",
            description:
                "A durable fighter with simple abilities. Arthur is easy to control and forgiving for beginners."
        },

        {
            name: "Dun",
            image: "image/dun.jpg",
            description:
                "A tough fighter with good survivability and crowd control, making him easier to learn in Clash Lane."
        },

        {
            name: "Biron",
            image: "image/biron.jpg",
            description:
                "A strong fighter with straightforward skills, good damage and useful sustain during fights."
        }
    ],

    jungle: [
        {
            name: "Butterfly",
            image: "image/butterfly.jpg",
            description:
                "A straightforward assassin who can quickly finish low-health enemies and move between fights."
        },

        {
            name: "Wukong",
            image: "image/wukong.jpg",
            description:
                "A beginner-friendly assassin with strong basic attacks and simple burst damage."
        },

        {
            name: "Lam",
            image: "image/jungle.jpg",
            description:
                "A mobile assassin who can move quickly around the map and chase down enemies."
        }
    ],

    mid: [
        {
            name: "Angela",
            image: "image/angela.jpg",
            description:
                "A simple mage with strong ranged abilities and burst damage, making her easy for beginners to understand."
        },

        {
            name: "Princess Frost",
            image: "image/mid-lane.jpg",
            description:
                "A mage with useful crowd control and long-range abilities that can help control team fights."
        },

        {
            name: "Milady",
            image: "image/milady.jpg",
            description:
                "A straightforward mage who can summon machines and pressure enemy towers from a safe distance."
        }
    ],

    farm: [
        {
            name: "Hou Yi",
            image: "image/hou-yi.jpg",
            description:
                "A beginner-friendly marksman with simple attacks and strong continuous damage."
        },

        {
            name: "Lady Sun",
            image: "image/farm-lane.jpg",
            description:
                "A marksman with good mobility and straightforward damage, suitable for learning positioning."
        },

        {
            name: "Alessio",
            image: "image/alessio.jpg",
            description:
                "A ranged damage dealer with easy-to-understand attacks and useful movement abilities."
        }
    ],

    roamer: [
        {
            name: "Yaria",
            image: "image/yaria.jpg",
            description:
                "A supportive hero who can protect teammates and is relatively easy for new players to understand."
        },

        {
            name: "Dolia",
            image: "image/roamer.jpg",
            description:
                "A team-focused support hero with healing and useful abilities that help teammates during fights."
        },

        {
            name: "Zhang Fei",
            image: "image/zhang-fei.jpg",
            description:
                "A durable tank who can protect teammates and absorb damage during team fights."
        }
    ]
};

/* Updates hero cards based on the selected role */
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

/* Interactive Battlefield Guide. Stores information for each map area */
const mapInformation = {

    clash: {
        label: "CLASH LANE",
        title: "The Solo Battle",
        description:
            "Clash Lane is commonly played by fighters or tanks. " +
            "Players here often fight independently while gaining " +
            "gold and experience.",
        tip:
            "💡 Beginner Tip: Don't always rush into fights. " +
            "Clear your minions and watch the mini-map before attacking."
    },

    jungle: {
        label: "JUNGLE",
        title: "Control the Battlefield",
        description:
            "The Jungle contains monsters that provide gold, " +
            "experience and useful buffs. Junglers move around the " +
            "map to help different lanes and secure objectives.",
        tip:
            "💡 Beginner Tip: Keep moving around the map and look " +
            "for opportunities to help teammates."
    },

    mid: {
        label: "MID LANE",
        title: "The Centre of the Map",
        description:
            "Mid Lane is located in the centre of the battlefield. " +
            "It gives players quick access to both sides of the map " +
            "and is commonly played by mages.",
        tip:
            "💡 Beginner Tip: After clearing your minions, check " +
            "whether another lane needs your help."
    },

    farm: {
        label: "FARM LANE",
        title: "Build Your Power",
        description:
            "Farm Lane is commonly played by marksmen. The goal is " +
            "to earn gold, purchase equipment and become a powerful " +
            "damage dealer later in the match.",
        tip:
            "💡 Beginner Tip: Focus on farming and avoid dangerous " +
            "fights early in the game."
    },

    roamer: {
        label: "ROAMER",
        title: "More Important Than Kills",
        description:
            "Important neutral objectives can give your team useful " +
            "advantages. Working together to secure objectives can " +
            "help your team control the match.",
        tip:
            "💡 Beginner Tip: Don't focus only on kills. Help your " +
            "team secure objectives and destroy enemy towers."
    }
};

/* Updates battlefield information based on choice */
function showMapInfo(area, clickedButton) {

    const info = mapInformation[area];

    document.getElementById("mapLabel").textContent =
        info.label;

    document.getElementById("mapTitle").textContent =
        info.title;

    document.getElementById("mapDescription").textContent =
        info.description;

    document.getElementById("mapTip").textContent =
        info.tip;


    // Remove previous active button
    document.querySelectorAll(".map-buttons button")
        .forEach(button => {
            button.classList.remove("active");
        });


    // Highlight selected button
    clickedButton.classList.add("active");
}