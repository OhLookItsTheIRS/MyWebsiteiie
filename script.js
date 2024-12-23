document.addEventListener("DOMContentLoaded", () => {
    const dogButton = document.getElementById("dog-button");
    const catButton = document.getElementById("cat-button");
    const animalImageContainer = document.getElementById("animal-image");

    const fetchImage = async (type) => {
        let url = "";
        if (type === "dog") {
            url = "https://dog.ceo/api/breeds/image/random";
        } else if (type === "cat") {
            url = "https://api.thecatapi.com/v1/images/search";
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            let imageUrl = "";
            if (type === "dog") {
                imageUrl = data.message;
            } else if (type === "cat") {
                imageUrl = data[0].url;
            }
            displayImage(imageUrl);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    const displayImage = (url) => {
        animalImageContainer.innerHTML = `<img src="${url}" alt="Cute Animal">`;
    };

    dogButton.addEventListener("click", () => fetchImage("dog"));
    catButton.addEventListener("click", () => fetchImage("cat"));
});
