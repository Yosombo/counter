import "../styles/style.css";
import AddCounter from "./modules/AddCounter";

let modal;
new AddCounter();

document.querySelectorAll(".to-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal"*/ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => alert(error));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
