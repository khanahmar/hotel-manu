const imgUrl = document.getElementById("img-url");
const title = document.getElementById("title");
const detail = document.getElementById("detail");
const price = document.getElementById("price");
const btn = document.getElementById("button");
const form = document.getElementById("form");
const menu = document.getElementById("menu");

const menuItems = [
  {
    img: "https://ph-web-bucket.s3.us-east-2.amazonaws.com/data/img/products/images/111-1627418162-chicken-tikka.jpeg",
    title: "Chiken tandori tikka",
    detail: "Spicy Pakistani Tikka chunks & Onions",
    price: 499,
  },
];

const loadData = () => {
  menu.innerHTML = "";

  menuItems.forEach((item) => {
    menu.innerHTML += `

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Img url</th>
        <th scope="col">Title</th>
        <th scope="col">Detail</th>
        <th scope="col">Price</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${item.img}</td>
        <td>${item.title}</td>
        <td>${item.detail}</td>
        <td>${item.price}</td>
        <td scope="col"><button id="update" class="btn btn-danger" type="button">Update</button></td>
        <td scope="col"><button id="delete" class="btn btn-success" type="button">Delete</button></td>
      </tr>
    </tbody>
  </table>
  
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

const updateBtn = document.getElementById("update");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", (e) => {
  menuItems.remove();
});
