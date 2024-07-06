//Function to fetch dog images 
async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // display the fetched dog image
        displayDogImage(data.message);
    } catch (error) {
        console.error('Error fetching dog image:', error);
        document.getElementById('dog-image-container').innerText = 'Failed to load dog image.';
    }
}
function displayDogImage(imageUrl) {
    const dogImageContainer = document.getElementById('dog-image-container');
    dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
}

// fetch button
document.getElementById('fetch-dog').addEventListener('click', fetchDogImage);

// Fetch first dog image when the page loaded.
fetchDogImage();