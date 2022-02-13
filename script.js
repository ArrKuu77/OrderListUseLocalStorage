const DownArrowTag = document.getElementsByClassName("DownArrow")[0];
const ProductTag = document.getElementsByClassName("Product")[0];

DownArrowTag.addEventListener("click",() => {
    if (ProductTag.classList.contains("ProductListOpen")) {
        ProductTag.classList.remove("ProductListOpen");
        ProductTag.style.display = "none";
    }else{
        ProductTag.style.display = "block";
        ProductTag.classList.add("ProductListOpen");
    }
})

const ProductNameTextTag = document.getElementsByClassName("ProductNameText")[0];
const ProductName = document.querySelectorAll(".ProductName");

ProductName.forEach((element) => {
    element.addEventListener("click",() => {
        const ProductNameText =  element.innerHTML;
        ProductNameTextTag.textContent = ProductNameText;
    })
})

const FillQuantity = document.getElementsByClassName("FillQuantity")[0];
const FillPlace = document.getElementsByClassName("FillPlace")[0];
const dateandtime = document.getElementsByClassName("dateandtime")[0];
const SaveButton = document.getElementsByClassName("SaveButton")[0];
const OrderList = document.getElementsByClassName("OrderList")[0];

const CurrentDate = new Date();
const currentGetTime = CurrentDate.getTime();
let countNumber = 1;

SaveButton.addEventListener("click",() => {
    ProductTag.style.display = "none";
    const OrderListOneLine = document.createElement("div");
    OrderListOneLine.classList.add("OrderListOneLine");

    const OrderListContainer = document.createElement("div");
    OrderListContainer.classList.add("OrderListContainer");

    const OrderProduct = ProductNameTextTag.innerHTML;
    const OrderQuantity = parseInt(FillQuantity.value);
    const OrderPlace = FillPlace.value;
    const PayOrderDate = new Date(dateandtime.value);
    const PayOrderDateGetTime = PayOrderDate.getTime();
    
    if (OrderProduct === "ProductName"  ||parseInt(OrderQuantity)<1 || FillQuantity.value === "" || OrderPlace === ""|| PayOrderDateGetTime < currentGetTime) {
        alert("Checkout  your list.Your mistake your order list")
    }else{
        console.log(typeof FillQuantity.value)
        const deleIconTag = document.createElement("i");
        deleIconTag.classList.add("fas","fa-trash");
        deleIconTag.id = countNumber;

        deleIconTag.addEventListener("click",(event) =>{
            if (OrderListOneLine.classList.contains("purchased")) {
                const deleIconTag = event.target.id;
                OrderListContainer.remove();

                localStorage.removeItem(deleIconTag);
            }else{
                alert("If you want to delete,click on your text")
            }
        });

        OrderListOneLine.addEventListener("click",() => {
            if(OrderListOneLine.classList.contains("purchased")){
                OrderListOneLine.classList.remove("purchased");
            }else{
                OrderListOneLine.classList.add("purchased");
            }
        })

        OrderListOneLine.append(countNumber,". ProductName =>"+OrderProduct," /OrderQuantity =>" +OrderQuantity," /OrderPlace =>" +OrderPlace," /Delivery Date=>" + PayOrderDate.toLocaleDateString()," /Get Order Date =>" + CurrentDate.toLocaleDateString());
        OrderListContainer.append(OrderListOneLine,deleIconTag)
        OrderList.append(OrderListContainer);

        const OrderListOneLineLStorage = countNumber +". ProductName =>"+ OrderProduct + " /OrderQuantity =>" +OrderQuantity + " /OrderPlace =>" + OrderPlace + " /Delivery Date=>" + PayOrderDate.toLocaleDateString() + " /Get Order Date =>" + CurrentDate.toLocaleDateString();

        localStorage.setItem(countNumber,OrderListOneLineLStorage)
        countNumber =+1;
        ProductNameTextTag.innerHTML = "ProductName";
    }
})

const windowLocalStorage = (LSVstring,i) => {

    const OrderListOneLine = document.createElement("div");
    OrderListOneLine.classList.add("OrderListOneLine");

    const OrderListContainer = document.createElement("div");
    OrderListContainer.classList.add("OrderListContainer");

    const deleIconTag = document.createElement("i");
        deleIconTag.classList.add("fas","fa-trash");
        deleIconTag.id = countNumber;

        deleIconTag.addEventListener("click",() =>{
            if (OrderListOneLine.classList.contains("purchased")) {
                OrderListContainer.remove();

                localStorage.removeItem(i);
            }else{
                alert("If you want to delete,click on your text")
            }
        });

        OrderListOneLine.addEventListener("click",() => {
            if(OrderListOneLine.classList.contains("purchased")){
                OrderListOneLine.classList.remove("purchased");
            }else{
                OrderListOneLine.classList.add("purchased");
            }
        })

        OrderListOneLine.append(LSVstring);
        OrderListContainer.append(OrderListOneLine,deleIconTag)
        OrderList.append(OrderListContainer);
}


window.addEventListener("load",() =>{
    for(let i =0;i <localStorage.length+1;i++){
        // const LSV = localStorage.key(i).toString();
        const LSVstring = localStorage.getItem(i);
        // console.log(typeof LSVstring);
        if(LSVstring !== null){
            windowLocalStorage(LSVstring,i);
            countNumber = localStorage.length+1;
        }
    }
})
