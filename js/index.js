// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const priceValue = parseInt(price.innerHTML);
  const quantityValue = quantity.valueAsNumber;
  const subtotalSum = priceValue * quantityValue;

  subtotal.innerText = subtotalSum;
  console.log(subtotalSum);
  return subtotalSum;
}

function calculateAll() {
  const productNodes = document.querySelectorAll('.product');
  const totalCalculated = document.querySelector('#total-value span');
  console.log(productNodes);

  let total = [];
  for (item of productNodes) {
    total.push(updateSubtotal(item));
  }

  totalCalculated.innerText = total.reduce((acc, next) => acc + next);
}

// ITERATION 4

function removeProduct(event) {
  const parent = document.querySelector('tbody');
  const product = document.querySelector('.product');
  const target = event.currentTarget;

  console.log('hello');

  parent.removeChild(product);
}

// ITERATION 5

function createProduct() {
  const inputName = document.querySelector('.prodName');
  const inputCost = document.querySelector('.numInput');
  const parent = document.querySelector('tbody');

  parent.innerHTML += `<tr class="product">
  <td class="name">
    <span>${inputName.value}</span>
  </td>
  <td class="price">
    $<span>${inputCost.valueAsNumber}</span>
  </td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">
    $<span>0</span>
  </td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr> `;
  const removalButton = document.querySelectorAll('.action button');
  for (let button of removalButton) {
    button.addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const removalButton = document.querySelectorAll('.action button');
  const creationButton = document.querySelector('#create-something');

  creationButton.addEventListener('click', createProduct);

  for (let button of removalButton) {
    button.addEventListener('click', removeProduct);
  }

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
