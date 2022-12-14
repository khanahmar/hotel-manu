// import menuItems from "../data.js";
// import onLoad from "./login.js";

// console.log(onLoad);

// window.addEventListener("load", (e) => {
//   if (onLoad == false) {
//     window.location.assign("login.html");
//   } else {
//     window.location.assign("index.html");
//   }
// });

let menuItems = [];
const imgUrl = document.getElementById("img-url");
const title = document.getElementById("title");
const detail = document.getElementById("detail");
const price = document.getElementById("price");
const btn = document.getElementById("button");
const form = document.getElementById("form");
const menu = document.getElementById("menu");
const updateBtn = document.querySelector(".update");

console.log(updateBtn);

const loadData = () => {
  menuItems = JSON.parse(localStorage.getItem("menuItems"));
  console.log(menuItems);
  menu.innerHTML = "";

  menuItems.map((item, index) => {
    menu.innerHTML += `

      <tr>
        <th scope="row">${index + 1}</th>
        <td> <img src="${item.img}" alt='' width='100'></td>
        <td>${item.title}</td>
        <td>${item.detail}</td>
        <td>${item.price}</td>
        <td scope="col"><button  data-upid=${index}  data-bs-toggle="modal"
        data-bs-target="#updatePizzaModal-${index}"  class="btn btn-danger" >Update</button></td>
        <td  scope="col"><button data-delid=${index}  class="btn btn-success" >Delete</button></td>
      </tr>

      <!-- update Pizza Modal starts -->
      <div
        class="modal fade"
        id="updatePizzaModal-${index}"
        tabindex="-1"
        aria-labelledby="updatePizzaModalLabel-${index}"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="updatePizzaModalLabel-${index}">Update Pizza</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

              <!-- form starts -->
              <form id="form">
                <div class="mb-3">
                  <label for="img-url" class="form-label">img url</label>
                  <input type="text" class="form-control" id="img-url" value=${
                    item.img
                  } />
                </div>
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" class="form-control" id="title" value=${
                    item.title
                  } />
                </div>
                <div class="mb-3">
                  <label for="detail" class="form-label">Detail</label>
                  <input type="text" class="form-control" id="detail" value=${
                    item.detail
                  } />
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input type="text" class="form-control" id="price" value=${
                    item.price
                  } />
                </div>
  
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class=" update btn btn-primary"
                  data-addid=${index}
                >
                 Update
                </button>
              </form>
              <!-- form ends -->
            </div>
          </div>
        </div>
      </div>
      <!--update Pizza Modal ends -->
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
  addLocalStorage();
  loadData();
  form.reset();
});

menu.addEventListener("click", (e) => {
  e.preventDefault();

  const delid = e.target.dataset.delid;
  if (delid == undefined) {
    !loadData();
  } else {
    menuItems.splice(delid, 1);
    loadData();
    console.log(delid);
  }

  // const upid = e.target.dataset.upid;
  // const addId = e.target.dataset.addid;

  // console.log(e.target.dataset);

  // if (upid == undefined) {
  //   !loadData();
  // } else {
  //   if (addid !== undefined) {
  //     console.log(menuItems[upid].title);
  //   }
  //   loadData();
  // }
});

const addLocalStorage = () => {
  localStorage.setItem("menuItems", JSON.stringify(menuItems));
};
