// let display = document.querySelector(".display");

// let buttons = Array.from(document.querySelectorAll(".btn"));

// buttons.map((btn) => {
//   btn.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "AC":
//         display.innerText = "0";
//         break;
//         case "⌫":
//           display.innerText = display.innerText.slice(0, -1) || "0";
//         break;
//       case "=":
//         try {
//           display.innerText = eval(display.innerText);
//         } catch (e) {
//           display.innerText = "Error!";
//         }
//         break;
//       case "%":
//         let passedText = display.innerText + "/100";
//         display.innerText = eval(passedText);
//         break;
//       default:
//         if (display.innerText === "0" && e.target.innerText !== ".") {
//           display.innerText = e.target.innerText;
//         } else {
//           display.innerText += e.target.innerText;
//         }
//     }
//   });
// });



let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "⌫":
          display.innerText = display.innerText.slice(0, -1) || "0";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ",") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});