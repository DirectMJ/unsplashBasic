const requestUrl =
      'https://api.unsplash.com/photos/random?query=london&client_id=QOgmX-j37Vk_L9eoAo1osbg2FKb9PIvFDbxUK4JBXbA;'
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    getImagesButton.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    });

    async function getNewImage() {
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let allImages = data;
          return allImages.urls.regular;
        });
    }
   
    ``