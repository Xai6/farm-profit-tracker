const basePrices = {
    pickles: 192,
    bamboo: 192,
    sweetberries: 640,
    kelp: 256
};

const farmData = {
    "3706": {
        slotsPerModule: 27,
        extraHoppersPer3: 32
    },
    "flow": {
        slotsPerModule: 9,
        extraChestSlots: 53,
        extraHoppersPer3: 3
    }
};

function updateFarmImage() {
    let farmType = document.getElementById('farmType');
    let selectedOption = farmType.options[farmType.selectedIndex];
    let farmImage = document.getElementById('farmImage');
    farmImage.src = selectedOption.getAttribute('data-img');
    farmImage.alt = selectedOption.text;
}

function calculateProfit() {
    let farmType = document.getElementById('farmType').value;
    let rows = parseInt(document.getElementById('rows').value);
    let height = parseInt(document.getElementById('height').value);
    let doubleSided = document.getElementById('doubleSided').checked ? 2 : 1;
    let multiplier = parseFloat(document.getElementById('multiplier').value);
    let basePricePerStack = basePrices[farmType];

    let stacksPerChest = 54;
    let totalStacks = rows * height * doubleSided * stacksPerChest;
    let baseProfit = totalStacks * basePricePerStack;
    let profit = baseProfit * multiplier;

    document.getElementById('result').innerText = `Profit: $${profit.toLocaleString()}`;
}

function updateBones() {
    let farmDesign = document.getElementById('farmDesign').value;
    let modules = parseInt(document.getElementById('modules').value);

    let bonemealSlots = 0;
    let extraHoppers = 0;

    if (farmDesign === "3706") {
        bonemealSlots = modules * farmData["3706"].slotsPerModule;
        extraHoppers = Math.floor(modules / 3) * farmData["3706"].extraHoppersPer3;
    } else if (farmDesign === "flow") {
        bonemealSlots = modules * farmData["flow"].slotsPerModule + farmData["flow"].extraChestSlots;
        extraHoppers = Math.floor(modules / 3) * farmData["flow"].extraHoppersPer3;
    }

    let bonemealStacks = bonemealSlots + (extraHoppers * 5);
    let bonesNeeded = Math.ceil((bonemealStacks * 64) / 3);

    // Calculate the cost of bones (each bone costs 49)
    let bonesCost = bonesNeeded * 49;

    // Format numbers with commas
    document.getElementById('bonesResult').innerText = `Bones Needed: ${bonesNeeded.toLocaleString()}`;
    document.getElementById('bonesCost').innerText = `Cost for Bones: $${bonesCost.toLocaleString()}`;
}

function toggleScreen() {
    let profitTracker = document.getElementById('profitTracker');
    let boneCalculator = document.getElementById('boneCalculator');
    let toggleButton = document.getElementById('toggleButton');

    if (profitTracker.style.display === "none") {
        profitTracker.style.display = "block";
        boneCalculator.style.display = "none";
        toggleButton.innerText = "Switch to Bone Calculator";
    } else {
        profitTracker.style.display = "none";
        boneCalculator.style.display = "block";
        toggleButton.innerText = "Switch to Profit Tracker";
    }
}

document.addEventListener("DOMContentLoaded", updateBones);
