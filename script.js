import { imagens } from "./dados.js";

const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
const imagesPerPage = 4;
let currentImageIndex = 0;

function loadImage() {
    // Criar a div da imagem
    // Criar a imagem
    // E o source pegar do arquivos imagens.src
    const pageImages = imagens.slice(currentImageIndex, currentImageIndex + imagesPerPage)
  
    // For -> ForEach
    pageImages.forEach(imagens => {
        const galleryItem = document.createElement('div');
        // quando imagens.wide for true, adiciona a classe wide ou
        // if(imagens.wide === true) adicona a classe ou
        // imagens.wide === true ? 'wide : '';
       galleryItem.className = `gallery-item ${imagens.wide === true ? "wide" : ""}`

        const imgItem = document.createElement('img');
        imgItem.src = imagens.src;
        imgItem.alt = imagens.alt

        galleryItem.appendChild(imgItem);
        galleryContainer.appendChild(galleryItem);
    })

    currentImageIndex += imagesPerPage;
    if (currentImageIndex >= imagens.length) {
        loadMoreButton.style.display = 'none';
    }
    
}
loadImage()
loadMoreButton.addEventListener('click', loadImage)

window.addEventListener('scroll', () => {
    // console.log('teste');
    // altura da janela
    const viewHeigth = window.innerHeight;

    // altura atual do scroll
    const scrollPosition = window.scrollY;

    // altura total da página
    const pageHeight = document.body.offsetHeight;

    // antes de chegar até o final da página
    const offset = pageHeight - 100;

    if (viewHeigth + scrollPosition >= offset) {
        loadImage()
    }
})