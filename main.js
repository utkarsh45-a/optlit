import { shToast, primary } from "./modules/toast"


const contetnBtn = document.querySelector(".content-btn")

contetnBtn.addEventListener("click", () => {
    shToast("this is a toast message", primary, "black")
})