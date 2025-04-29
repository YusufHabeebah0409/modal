cart = []
editItemNum = ""


if (localStorage.getItem('product')) {
    cart = JSON.parse(localStorage.getItem('product'));
}
const addItem = () => {

    if (product.value.trim() === "") {
        // alert('Input a Product')
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
        cart.push(product.value)
        localStorage.setItem('product', JSON.stringify(cart))
        product.value = ""
        display()
    }
}

const delItem = (figure) => {
    var delConfirm = confirm("Are You Sure you want to delete , This action is not reversible")
    if (delConfirm === true) {
        cart.splice(figure, 1)
        localStorage.setItem('product', JSON.stringify(cart))
        display()
    } else {
        display()
    }

}
const editItem = (data, num) => {
    updateProduct.value = data
    editItemNum = num
}

const updateEdit = () => {
    cart.splice(editItemNum, 1, updateProduct.value)
    localStorage.setItem('product', JSON.stringify(cart))
    updateProduct.value = ""
    display()

}

const delAllItem = () => {

    var delAllConfirm = confirm("Are You Sure you want to delete all product , This action is not reversible")
    if (delAllConfirm === true) {
        cart = []
        localStorage.setItem('product', JSON.stringify(cart))
        display()
    } else {
        display()
    }
}


const display = () => {
    show.innerHTML = ""
    cart.map((item, index) => {
        show.innerHTML += `
        <tr>
      <td class="table-light fs-3 text-center">${index + 1}.</td>
      <td class="table-light fs-3 text-center"> ${item}</td>
      <td class="table-light"> 
         <button onclick='editItem(${JSON.stringify(item)}, ${index})'class=" btn btn-info text-center w-50 " data-bs-toggle="modal" data-bs-target="#exampleModal">
         <img src="./icons8-create-24.png" alt="edit" >
         </button> </td>
      <td class="table-light"> 
         <button onclick="delItem(${index})"class=" btn btn-danger text-center w-50 "> 
         <img src="./icons8-delete-30.png" alt="delete" width="25px"></button> </td>
 </tr>

      `
    })

    if (cart.length >= 2) {
        delAll.style.display = "block"
    } else {
        delAll.style.display = "none"
    }
}


display()