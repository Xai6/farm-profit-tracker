       const basePrices = {
            pickles: 192,
            bamboo: 50,
            sweetberries: 75,
            kelp: 100
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
