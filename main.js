import { elt } from "./utils.js";

document.body.appendChild(
  elt(
    "button",
    {
      onclick: () => console.log("click"),
      style: "color: #ff4500;",
    },
    "The button"
  )
);
