var body = document.querySelector("body");

var container = document.createElement("div");

var mainTitle = document.createElement("h1");

var input = document.createElement("input");

var button = document.createElement("button");

body.appendChild(container);
container.appendChild(mainTitle);
container.appendChild(input);
container.appendChild(button);

//////////////////////css dad tag-------------------
body.style.backgroundColor = "#f7e7c8d6";

container.style.padding = "20px";
container.style.width = "400px";
container.style.border = "solid 3px black";
container.style.margin = "50px auto ";
container.style.borderRadius = "25px";
container.style.height = "auto";
container.style.backgroundColor = "#d42a2a73";
container.style.boxShadow = "5px 7px 0px 2px";

mainTitle.style.margin = "10px auto";

///////////////////////////////// child element

var title = document.createTextNode("My ToDo");
mainTitle.appendChild(title);

var textBtt = document.createTextNode("Add");
button.appendChild(textBtt);

/////////////////logic

button.addEventListener("click", function () {
  if (input.value == "") {
    alert("truong nay bat buoc nhap");
  } else {
    var item = document.createElement("div");
    var item_child_input = document.createElement("div");
    var change = document.createElement("button");
    var del = document.createElement("button");

    del.setAttribute("class", "fa-regular fa-trash");
    change.setAttribute("class", "fa-solid fa-pen");

    container.appendChild(item);
    item.appendChild(item_child_input);
    item.appendChild(change);
    item.appendChild(del);

    /////////css attribute /////////////////////////

    item.style.border = "solid 1px";
    item.style.margin = "15px auto";
    item.style.width = "40%";
    item.style.display = "flex";
    item.style.justifyContent = "flex-end";
    item.style.padding = "9px";
    item.style.borderRadius = "9px";
    item.style.backgroundColor = "white";

    item_child_input.textContent = input.value;
    item_child_input.style.display = "inline-block";
    item_child_input.style.width = "30%";
    item_child_input.style.padding = "5px";
    item_child_input.style.margin = "2px";

    change.style.padding = "5px";

    del.style.fontWeight = "900";
    del.style.padding = "5px";

    change.addEventListener("click", function () {
      // Yêu cầu người dùng nhập thông tin mới
      var newText = prompt("Nhập nội dung mới:", item_child_input.textContent);

      // Nếu người dùng không bấm "Cancel" và nhập nội dung mới, thay đổi nội dung "item_child_input"
      if (newText !== null) {
        item_child_input.textContent = newText;
      }
    });
    del.addEventListener("click", function () {
      var choice = confirm("bạn có chắc muốn xóa không ?");
      if (choice == true) {
        item.remove();
      }
    });
  }
});
