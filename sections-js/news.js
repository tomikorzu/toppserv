const newsContainer = document.querySelector(".news-container");
const moreNews = document.getElementById("more-news");
const newContent = [
  {
    img: "https://static.toiimg.com/thumb/msid-112939866,width-400,resizemode-4/112939866.jpg",
    title: "Tennis argentino",
    date: "02/09/24",
    description:
      "El tenis argentino sigue creciendo y en el último torneo de la ATP, el argentino Juan Martín del Potro se consagró campeón.",
    descriptionImage: "Juan Martín del Potro",
  },
  {
    img: "img/news/1.jpg",
    title: "Tennis argentino",
    date: "02/09/24",
    description:
      "El tenis argentino sigue creciendo y en el último torneo de la ATP, el argentino Juan Martín del Potro se consagró campeón.",
    descriptionImage: "Juan Martín del Potro",
  },
  {
    img: "img/news/1.jpg",
    title: "Tennis argentino",
    date: "02/09/24",
    description:
      "El tenis argentino sigue creciendo y en el último torneo de la ATP, el argentino Juan Martín del Potro se consagró campeón.",
    descriptionImage: "Juan Martín del Potro",
  },
  {
    img: "img/news/1.jpg",
    title: "Tennis argentino",
    date: "02/09/24",
    description:
      "El tenis argentino sigue creciendo y en el último torneo de la ATP, el argentino Juan Martín del Potro se consagró campeón.",
    descriptionImage: "Juan Martín del Potro",
  },
  {
    img: "img/news/1.jpg",
    title: "Tennis argentino",
    date: "02/09/24",
    description:
      "El tenis argentino sigue creciendo y en el último torneo de la ATP, el argentino Juan Martín del Potro se consagró campeón.",
    descriptionImage: "Juan Martín del Potro",
  },
];
if(newContent.length >= 4){
    moreNews.addEventListener("click", viewMore);
} else{
    moreNews.style.PointerEvent = 'none'
}
createNew();
function createNew() {
  newContent.forEach((news) => {
    let newCard = document.createElement("div");
    newCard.classList.add("new");
    newCard.innerHTML = `
      <img src="${news.img}" alt="${news.descriptionImage}" class="new-img" id="new-img">
      <div class="text-news">
      <h4 class="new-title">${news.title}</h4>
                            <h6 class="time">${news.date}</h6>
                            <p class="new-text">${news.description}</p>
                            </div>`;
    newsContainer.appendChild(newCard);
  });
}

function viewMore(){
    newsContainer.style.transform = 'translateX(calc(-100% - 20px))';
}