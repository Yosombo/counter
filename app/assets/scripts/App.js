import "../styles/style.css";
import AddCounter from "./modules/AddCounter";
import Modal from "./modules/Modal";

const state = {};

state.addcounter = new AddCounter();
state.modal = new Modal();

window.addEventListener("load", () => {
  if (!state.addcounter.allItems) state.addcounter.allItems;

  state.addcounter.allItems.forEach((e) => {
    document.querySelector(".items").insertAdjacentHTML(
      "afterbegin",
      `
      <div class="flexer" data-counterid=${e.id}>
      <div class="flexer__item to-modal">
        <h4 class="flexer__item__title">${e.name}</h4>
      </div>
      <div class="flexer__close">x</div>
      <div class="flexer__item__line"></div>
    </div>
      `
    );
  });
  state.addcounter.deleteItem();
});

if (module.hot) {
  module.hot.accept();
}
