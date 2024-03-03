<<<<<<< HEAD
const hamburger = document.querySelector("#hamburger")
const hamburger1 = document.querySelector("#hamburger1")
const hamburger2 = document.querySelector("#hamburger2")
const hamburger3 = document.querySelector("#hamburger3")
const menu = document.querySelector("#menu")

const hLinks = document.querySelectorAll("#hLink")

const bulan = document.querySelector("#bulan")
const body = document.querySelector("body")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
   
    if (!menu.classList.contains("hidden")) {
        // Jika menu memiliki kelas hidden, atur warna latar belakang elemen hamburger menjadi putih
        hamburger1.style.backgroundColor = "white";
        hamburger2.style.backgroundColor = "white";
        hamburger3.style.backgroundColor = "white";
    } else {
        // Jika menu tidak memiliki kelas hidden, atur warna latar belakang elemen hamburger menjadi hitam
        hamburger1.style.backgroundColor = "black";
        hamburger2.style.backgroundColor = "black";
        hamburger3.style.backgroundColor = "black";
    }
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })

bulan.addEventListener("click", ()=>{
    body.classList.toggle("dark")
=======
const hamburger = document.querySelector("#hamburger")
const hamburger1 = document.querySelector("#hamburger1")
const hamburger2 = document.querySelector("#hamburger2")
const hamburger3 = document.querySelector("#hamburger3")
const menu = document.querySelector("#menu")

const hLinks = document.querySelectorAll("#hLink")

const bulan = document.querySelector("#bulan")
const body = document.querySelector("body")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
   
    if (!menu.classList.contains("hidden")) {
        // Jika menu memiliki kelas hidden, atur warna latar belakang elemen hamburger menjadi putih
        hamburger1.style.backgroundColor = "white";
        hamburger2.style.backgroundColor = "white";
        hamburger3.style.backgroundColor = "white";
    } else {
        // Jika menu tidak memiliki kelas hidden, atur warna latar belakang elemen hamburger menjadi hitam
        hamburger1.style.backgroundColor = "black";
        hamburger2.style.backgroundColor = "black";
        hamburger3.style.backgroundColor = "black";
    }
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })

bulan.addEventListener("click", ()=>{
    body.classList.toggle("dark")
>>>>>>> 7679035d665d2c43ed4e1800c20da3143d6db980
  })