var paymentSelect = document.querySelector(".form-group [name='paymentSelect']")



paymentSelect.addEventListener("change", function(){
    var cityList = document.querySelector(".cityList");
    var newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
    newLi.innerText = this.value;

    cityList.appendChild(newLi);
    this.children[this.selectedIndex].remove();
    this.value = this.children[0].value;

   
})
