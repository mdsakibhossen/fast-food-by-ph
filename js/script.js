// Variable Declaration & Initializations
const menuBtn = document.querySelector("#menuBtn");
const menuBar = document.querySelector(".bar");
const menuClose = document.querySelector(".close");
const nav = document.querySelector(".header__container nav");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const searchIcon = document.querySelector("#searchIcon");
const searchClose = document.querySelector("#searchClose");
const productBtn = document.querySelector("#productBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const happyClientCards = document.querySelectorAll(".happy-clients__container .left-content .card");
const productContainer = document.querySelector(".popular-items__container");
const subscriptionBtn1 = document.querySelector("#subscriptionBtn1");
const subscriptionMsg1 = document.querySelector("#subscriptionMsg1");
const subscriptionEmail1 = document.querySelector("#subscriptionEmail1");
const subscriptionBtn2 = document.querySelector("#subscriptionBtn2");
const subscriptionMsg2 = document.querySelector("#subscriptionMsg2");
const subscriptionEmail2 = document.querySelector("#subscriptionEmail2");

let isMenuOpen = false;
let isSearchOpen = false;
let hasAllProductShown = false;



// Header Scroll
window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        document.querySelector("#header").classList.add("active");
    } else {
        document.querySelector("#header").classList.remove("active");
    }
})

// Navbar Section Start
const toggleMenu = (isMenuOpen) => {
    if (isMenuOpen) {
        menuBar.style.display = "none";
        menuClose.style.display = "block";
        nav.style.transform = "scaleY(1)";
    } else {
        menuBar.style.display = "block";
        menuClose.style.display = "none";
        nav.style.transform = "scaleY(0)";

    }
}
menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    toggleMenu(isMenuOpen)
})
nav.addEventListener("click", () => {
    isMenuOpen = false;
    toggleMenu(isMenuOpen);
})
// Navbar Section End


// Search Bar Section Start
const toggleSearchBar = (isSearchOpen) => {
    if (isSearchOpen) {
        searchIcon.style.display = "none";
        searchClose.style.display = "block";
        search.style.transform = "scaleX(1)";
    } else {
        searchIcon.style.display = "block";
        searchClose.style.display = "none";
        search.style.transform = "scaleX(0)";
    }
}
searchBtn.addEventListener("click", () => {
    if (innerWidth < 1024) {
        isSearchOpen = !isSearchOpen;
        toggleSearchBar(isSearchOpen)

    }
})
// Search Bar Section End







// Popular Item Section Start
const toggleProducts = (n) => {
    Array.from(productContainer.children).forEach((card, i) => {
        if (i > n) {
            card.style.display = "none";
        } else {
            card.style.display = "block";
        }
    })

}
toggleProducts(5);
const showProducts = (hasAllProductShown) => {
    if (hasAllProductShown) {
        productBtn.firstElementChild.innerHTML = "See Less Products";
        toggleProducts(productContainer.children.length);
    } else {
        productBtn.firstElementChild.innerHTML = "See More Products";
        toggleProducts(5);
    }

}
productBtn.addEventListener("click", () => {
    hasAllProductShown = !hasAllProductShown;
    showProducts(hasAllProductShown);

})
// Popular Item Section End





// Happy Client Slider Start
const happyClientCardsArr = Array.from(happyClientCards);
const btnStatus = () => {

    let activeItem = happyClientCardsArr.find(item => item.classList.contains("active"));
    if (!activeItem.previousElementSibling) {
        prevBtn.style.cursor = "not-allowed";
        prevBtn.style.backgroundColor = "#ccc";
    } else {
        prevBtn.style.cursor = "pointer";
        prevBtn.style.backgroundColor = "#F48E28";
    }
    if (!activeItem.nextElementSibling) {
        nextBtn.style.cursor = "not-allowed";
        nextBtn.style.backgroundColor = "#ccc";
    } else {
        nextBtn.style.cursor = "pointer";
        nextBtn.style.backgroundColor = "#F48E28";
    }

}
btnStatus();
prevBtn.addEventListener("click", () => {
    let activeCardIndex = happyClientCardsArr.findIndex(item => item.classList.contains("active"));
    happyClientCardsArr.forEach((item, i) => {
        if (i === activeCardIndex) {
            if (item.previousElementSibling) {
                item.classList.remove("active");
                item.classList.add("left");
                item.previousElementSibling.classList.remove("right");
                item.previousElementSibling.classList.add("active");
            }
        }
    })
    btnStatus();

})
nextBtn.addEventListener("click", () => {
    let activeCardIndex = happyClientCardsArr.findIndex(item => item.classList.contains("active"));
    happyClientCardsArr.forEach((item, i) => {
        if (i === activeCardIndex) {
            if (item.nextElementSibling) {
                item.classList.remove("active");
                item.classList.add("right");
                item.nextElementSibling.classList.remove("left");
                item.nextElementSibling.classList.add("active");
            }
        }
    })
    btnStatus();

})
// Happy Client Slider End




























// Newsletter & Footer Subscription Section Start
const showMsg = (email, msgBox) => {
    // console.log(email);
    if (email && email.includes("@") && email.includes(".") && email.length > 7) {
        msgBox.innerHTML = "Subscribed Successfully !!!";
        msgBox.style.color = "lightgreen";
    } else {
        msgBox.innerHTML = "Failed To Subscribe!!! Please Check Your Email...";
        msgBox.style.color = "red";
    }

}
subscriptionBtn1.addEventListener("click", () => {
    showMsg(subscriptionEmail1.value, subscriptionMsg1);
})
subscriptionBtn2.addEventListener("click", () => {
    showMsg(subscriptionEmail2.value, subscriptionMsg2);
})
// Newsletter & Footer Subscription Section End