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
const ProductPrice = document.getElementsByClassName("ProductPrice")[0];
const ProductPriceName = document.getElementsByClassName("ProductPriceName")[0];

const ProductPriceDisplay = (Number) => {
    ProductPrice.innerHTML = "";
    ProductPrice.append(Number);
}

ProductName.forEach((element) => {
    element.addEventListener("click",() => {
        FillNetQuantity.value = "";
        NetPriceDisplay.innerHTML = "";
        ProductPriceName.innerHTML = "";
        const ProductNameText =  element.innerHTML;
        ProductPriceName.append(ProductNameText,"Price =>");
        ProductNameTextTag.textContent = ProductNameText;
        if(ProductNameTextTag.innerHTML === "LifeCort (LPI)"){
            ProductPriceDisplay(1290);
        }else if (ProductNameTextTag.innerHTML === "Ceftrialife (CFIM)") {
            ProductPriceDisplay(1693);
        }else if (ProductNameTextTag.innerHTML === "Dicinac (DCN)") {
            ProductPriceDisplay(2042);
        }else if (ProductNameTextTag.innerHTML === "Locto-Calamine (LCLO)") {
            ProductPriceDisplay(6000);
        }else if (ProductNameTextTag.innerHTML === "Rinotin (RNT)") {
            ProductPriceDisplay(424);
        }else if (ProductNameTextTag.innerHTML === "Lopo Plus (LPP)") {
            ProductPriceDisplay(1131);
        }else if (ProductNameTextTag.innerHTML === "Aceta X (ACX)") {
            ProductPriceDisplay(633);
        }else if (ProductNameTextTag.innerHTML === "Asclop (ACP)") {
            ProductPriceDisplay(1320);
        }else if (ProductNameTextTag.innerHTML === "Panpro20 (PNP)") {
            ProductPriceDisplay(848);
        }else if (ProductNameTextTag.innerHTML === "Perilac (PLC)") {
            ProductPriceDisplay(1131);
        }else if (ProductNameTextTag.innerHTML === "Bacron (BOT)") {
            ProductPriceDisplay(4242);
        }else if (ProductNameTextTag.innerHTML === "Mextil 500 (MXT)") {
            ProductPriceDisplay(4619);
        }else if (ProductNameTextTag.innerHTML === "Glammer Capsule (GMC)") {
            ProductPriceDisplay(8432);
        }else if (ProductNameTextTag.innerHTML === "Andrex (OBS)") {
            ProductPriceDisplay(12437);
        }else if (ProductNameTextTag.innerHTML === "Nausidox (NSD)") {
            ProductPriceDisplay(3827);
        }else if (ProductNameTextTag.innerHTML === "Colla Max (CLM)") {
            ProductPriceDisplay(3536);
        }else if (ProductNameTextTag.innerHTML === "Q-10 Ultra Q10U") {
            ProductPriceDisplay(21131);
        }else if (ProductNameTextTag.innerHTML === "Mypar-500 (MYP)") {
            ProductPriceDisplay(753);
        }else if (ProductNameTextTag.innerHTML === "KORS (ORS)") {
            ProductPriceDisplay(870);
        }else if (ProductNameTextTag.innerHTML === "Troydom (TDM)") {
            ProductPriceDisplay(580);
        }else if (ProductNameTextTag.innerHTML === "Paraquick (PQK)") {
            ProductPriceDisplay(753);
        }
    })
})

const FillNetQuantity = document.getElementsByClassName("FillNetQuantity")[0];
const NetPriceDisplay = document.getElementsByClassName("NetPriceDisplay")[0];

FillNetQuantity.addEventListener("keyup",(event) => {
    NetPriceDisplay.innerHTML="";
    const ProductPriceNumber = parseInt(ProductPrice.innerHTML);
    console.log(typeof ProductPriceNumber)
   const NetPrice =  Math.floor(ProductPriceNumber*10/(1+event.target.value));
   NetPriceDisplay.append(NetPrice);
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
