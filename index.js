const container = document.getElementById("container");
function makeCard(img, title) {
  const template = `
        <h1>${title}</h1>
        <img src="${img}"/>
    `;
  const card = document.createElement("div");
  card.innerHTML = template;
  container.insertAdjacentElement("beforeend", card);
}

const cardElements = [
  {
    img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "pizza 1",
  },
  {
    img: "https://images.pexels.com/photos/1552642/pexels-photo-1552642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pizza 2",
  },
];

cardElements.forEach((el) => makeCard(el.img, el.title));
