const imgUrl = document.getElementById("img-url");
const title = document.getElementById("title");
const detail = document.getElementById("detail");
const price = document.getElementById("price");
const btn = document.getElementById("button");
const form = document.getElementById("form");
const menu = document.getElementById("menu");

const menuItems = [];

const loadData = () => {
  menu.innerHTML = "";

  menuItems.forEach((item) => {
    menu.innerHTML += `
        <div class="col-md-3">
        <div id="card" class="card mt-3 card-set">
          <img
            src=${item.img}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.detail}</p>
          </div>
          <div class="card-footer d-grid">
            <a href="#" class="btn btn-set">Add <span class="float-end">Rs.${item.price}</span></a>
          </div>
        </div>
      </div>
      
      `;
  });
};
window.addEventListener("load", (e) => {
  loadData();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    img: imgUrl.value.trim(),
    title: title.value.trim(),
    detail: detail.value.trim(),
    price: price.value.trim(),
  };

  menuItems.push(formData);
  loadData();
});
