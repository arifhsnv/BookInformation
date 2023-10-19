const bookName = document.querySelector(".book-name");
const bookAuthor = document.querySelector(".author-name");
const pageCount = document.querySelector(".page-count");
const bookPrice = document.querySelector(".book-price");
const bookTitle = document.querySelector(".book-title");
const tableBody = document.querySelector(".table-body");
const valueOfInput = document.querySelector(".giving-information .inputs");
const orderButton = document.querySelector(".order-button");
const validation = document.querySelector(".validation");

const priceValue = function () {
  let priceOfBook = bookPrice.value;
  for (let index = 0; index < priceOfBook.length; index++) {
    if (bookPrice.value > 10 && bookPrice.value != "") {
      return true;
    }
    return false;
  }
};
const pageOfValue = function () {
  const pageValue = pageCount.value;
  for (let index = 0; index < pageValue.length; index++) {
    if (pageValue > 100 && pageValue.value != "") {
      return true;
    }
    return false;
  }
};
const orderInput = function () {
  bookPrice.innerHTML = "";
  pageCount.innerHTML = "";
  validation.innerHTML = "";
  if (!priceValue()) {
    validation.innerHTML += `<div style='color:red'>Book price must be more than 10$</div>`;
  }
  if (!pageOfValue()) {
    validation.innerHTML += `<div style='color:red;margin-top:10px'>Book page must be more than 100 </div>`;
  }

  const tableTd = `<tr>
<td>${bookName.value}</td>
<td>${bookAuthor.value}</td>
<td>${pageCount.value}</td>
<td>${bookPrice.value}</td>
<td>${bookTitle.value}</td>
</tr>`;
  tableBody.innerHTML += tableTd;
};
orderButton.addEventListener("click", orderInput);
