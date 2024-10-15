import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const success = "linear-gradient(to right, #00b09b, #96c93d)"  //green
export const warning = "linear-gradient(to right, #f57c00, #fbc02d)"  //yellow/orange
export const info = "linear-gradient(to right, #ffeb3b, #ffc107)"   //yellow
export const danger = "linear-gradient(to right, #ff5f6d, #ffc371)"   //red
export const primary = "linear-gradient(to right, #2196f3, #00bcd4)"   //blue



// we use this for giving instruction to user when any event occur(like registration successful , failed, etc).

export const shToast = (text, bgColor, color = "white") => {

    Toastify({
        text: `${text}`,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `${bgColor}`,
            color: `${color}`
        },
        // onClick: function () { } // Callback after click
    }).showToast()

}




/* 

Instruction For Using This Toast:

1) Your js file type must be module in your html page for example - (<script type="module" src="/scripts/login.js"></script>).

2) In your js file import shToast function and one bgColor according to your need from module / toast.js, eg(import { shToast, danger } from "../modules/toast").

3) Call shToast() function when any event occur.

4) shToast() function takes 3 parameter(1 - Message, 2 - bgColor, 3 - textColor), 3rd one is optional.eg(shToast("login form not available", danger, "black")) for better understanding check login.js & login.html file.

*/