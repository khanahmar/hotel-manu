import menuItems from "./module-menu.js";
const menu = document.getElementById("menu");

menuItems.map((item) => {
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
