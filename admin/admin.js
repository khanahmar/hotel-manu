import menuItems from "../data.js";
// import onLoad from "./login.js";

// console.log(onLoad);

// window.addEventListener("load", (e) => {
//   if (onLoad == "false") {
//     window.location.assign("login.html");
//   } else {
//     window.location.assign("admin.html");
//   }
// });

const imgUrl = document.getElementById("img-url");
const title = document.getElementById("title");
const detail = document.getElementById("detail");
const price = document.getElementById("price");
const btn = document.getElementById("button");
const form = document.getElementById("form");
const menu = document.getElementById("menu");
const updateBtn = document.querySelector(".update");
const delBtn = document.getElementsByClassName("del");

const loadData = () => {
  menu.innerHTML = "";

  menuItems.map((item, index) => {
    menu.innerHTML += `

      <tr>
        <th scope="row">${index + 1}</th>
        <td> <img src="${item.img}" alt='' width='100'></td>
        <td>${item.title}</td>
        <td>${item.detail}</td>
        <td>${item.price}</td>
        <td scope="col"><button  data-upid=${index}  class="btn btn-danger update" >Update</button></td>
        <td  scope="col"><button data-delid=${index}  class="btn btn-success del" >Delete</button></td>
      </tr>

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
  form.reset();
});

menu.addEventListener("click", (e) => {
  const id = e.target.dataset.delid;
  if (id == undefined) {
    !loadData();
  } else {
    menuItems.splice(id, 1);
    loadData();
    console.log(id);
  }

  let upid = e.target.dataset.upid;
  if (upid == undefined) {
    !loadData();
  } else {
    console.log(item.img);

    // imgUrl.value = item.img.innerHTML;
    // title.value = item.title.innerHTML;
    // detail.value = item.detail.innerHTML;
    // price.value = item.price.innerHTML;
  }
});

// menu.addEventListener("click", (e) => {
//   console.log(e.target.dataset.upid);
// });
