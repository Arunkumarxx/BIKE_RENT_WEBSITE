      // Function to generate a random rental price between Rs. 2000 and Rs. 500
        function getRandomRentalPrice() {
            return Math.floor(Math.random() * (2000 - 500 + 1) + 500);
        }

     const bikeData = [
    { name: "Bajaj Auto", imageUrl: "ph9bm6cg_2019-bajaj-pulsar-150-neon_625x300_29_November_18.webp" },
    { name: "Harley-Davidson", imageUrl: "profile1661764705.avif" },
    { name: "TVS Motor ", imageUrl: "tvs-sport-bike.jpg" },
    { name: "KTM", imageUrl: "duke-black.jpg" },
    { name: "Yamaha Motor", imageUrl: "2021-yamaha-r15-black-indonesia-ebf1.png" },
   
    { name: "Kawasaki", imageUrl: "kawasaki-z900-standard1677040176062.webp" },
    { name: "Ducati", imageUrl: "ducati-supersport-ducati-red-std.png" },
    { name: "BMW", imageUrl: "2020-BMW-R-1250-RS.jpg" },
    { name: "Honda", imageUrl: "img-models04.jpg" },
    { name: "Suzuki", imageUrl: "2015-suzuki-gsx-s1000f-1.jpg" }
];

        // Add random rental prices to bike data
        bikeData.forEach(bike => {
            bike.price = getRandomRentalPrice();
        });

        // Function to display bike brands, images, and rental prices
        function displayBikeBrands() {
            const bikeList = document.getElementById('bike-list');

            bikeData.forEach(bike => {
                const brandContainer = document.createElement('div');
                brandContainer.classList.add('bike-card-container');

                const brandImage = document.createElement('img');
                brandImage.classList.add('bike-card');
                brandImage.src = bike.imageUrl;
                brandImage.alt = bike.name;

                const brandName = document.createElement('h3');
                brandName.textContent = bike.name;

                const brandPrice = document.createElement('p');
                brandPrice.textContent = `Rent: Rs. ${bike.price}/day`;

                brandContainer.appendChild(brandImage);
                brandContainer.appendChild(brandName);
                brandContainer.appendChild(brandPrice);
                bikeList.appendChild(brandContainer);
            });
        }

        // Initialize the bike brand listings
        displayBikeBrands();
  
