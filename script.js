cart = []
editItemNum = ""
const addItem = () => {

    if (product.value.trim() === "") {
        // alert('Input a Product')
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
        cart.push(product.value)
        product.value = ""
        display()
    }
}

const delItem = (figure) => {
    var delConfirm = confirm("Are You Sure you want to delete , This action is not reversible")
    if (delConfirm === true) {
        cart.splice(figure, 1)
        display()
    } else {
        display()
    }

}
const editItem = (data, num) => {
    product.value = data
    editItemNum = num
}

const delAllItem = () => {

    var delAllConfirm = confirm("Are You Sure you want to delete all product , This action is not reversible")
    if (delAllConfirm === true) {
        cart.splice(editItemNum, cart.length)
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
            <td>${index + 1}. ${item}</td>
            <td> <button onclick='editItem(${JSON.stringify(item)}, ${index})'>Edit</button> </td>
            <td> <button onclick="delItem(${index})">Delete</button> </td>
        </tr>
      `
    })

    if(cart.length >= 2){
        delAll.style.display = "block"
    }else{
        delAll.style.display = "none"
    }
}