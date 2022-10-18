import menuItems from "../data.js";
// import onLoad from "./login.js";

// console.log(onLoad);

// window.addEventListener("load", (e) => {
//   if (onLoad == "false") {
//     window.location.assign("login.html");
//   } else {
//     window.location.assign("index.html");
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
        <td scope="col"><button  data-upid=${index}  data-bs-toggle="modal"
        data-bs-target="#updatePizzaModal-${index}"  class="btn btn-danger update" >Update</button></td>
        <td  scope="col"><button data-delid=${index}  class="btn btn-success del" >Delete</button></td>
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
                  class="btn btn-primary"
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
  loadData();
  form.reset();
});

menu.addEventListener("click", (e) => {
  const delid = e.target.dataset.delid;
  if (delid == undefined) {
    !loadData();
  } else {
    menuItems.splice(delid, 1);
    loadData();
    console.log(delid);
  }

  const upid = e.target.dataset.upid;
  if (upid == undefined) {
    !loadData();
  } else {
    console.log((menuItems[upid].title = title.value));
  }
});

// menu.addEventListener("click", (e) => {
//   console.log(e.target.dataset.upid);
// });
// console.log(menuItems[0]);
// menuItems[].title = "beef tikka";
// console.log(menuItems);
