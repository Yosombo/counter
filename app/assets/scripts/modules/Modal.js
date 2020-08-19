import AddCounter from "./AddCounter";
class Modal {
  constructor() {
    this.addCounter = new AddCounter();
    this.storage;
    this.readDataFromLocalST();
    this.item = document.querySelector(".items");
    this.id;
    this.ind;
    this.renderer();
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.toHome = document.querySelector(".footer__right");

    this.events();
  }
  renderer() {
    this.item.addEventListener("click", (e) => {
      this.id = e.target.closest(".flexer").dataset.counterid;
      this.ind = this.storage.findIndex((e) => e.id === this.id);
    });
  }
  readDataFromLocalST() {
    this.storage = this.addCounter.allItems;
    return this.storage;
  }

  events() {
    this.item.addEventListener("click", (e) => {
      if (e.target.className == "flexer__item__title") {
        this.openModal();
      }
    });

    this.toHome.addEventListener("click", (e) => this.closeModal(e));
  }

  openModal() {
    this.modal.classList.add("modal--is-visible");
    console.log(this.ind);
    this.renderName();
    this.renderNumber();
    this.addNumber();
    this.deleteNumber();
  }
  deleteNumber() {
    document.querySelector(".minus").addEventListener("click", () => {
      this.addCounter.allItems[this.ind].number =
        this.addCounter.allItems[this.ind].number - 1;
      document.querySelector(".minus").classList.add("minus--is-clicked");
      this.renderNumber();
      this.addCounter.saveToLocalSt();
      setTimeout(() => {
        document.querySelector(".minus").classList.remove("minus--is-clicked");
      }, 250);
    });
  }
  addNumber() {
    document.querySelector(".circle").addEventListener("click", () => {
      this.addCounter.allItems[this.ind].number =
        this.addCounter.allItems[this.ind].number + 1;
      document.querySelector(".circle").classList.add("circle--is-clicked");
      this.renderNumber();
      this.addCounter.saveToLocalSt();
      setTimeout(() => {
        document
          .querySelector(".circle")
          .classList.remove("circle--is-clicked");
      }, 250);
    });
  }
  closeModal(e) {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML() {
    document.querySelector(".bottomLine").insertAdjacentHTML(
      "beforebegin",
      `
      <div class="modal">
      <div class="container">
        <div class="modal__title">
          <h3><span class="--name--"></span></h3>
        </div>
        <div class="counter-number">
        <span class="--number--"></span>
        </div>
        <div class="circle">
          <div class="circle__add"></div>
        </div>
        <div class="footer">
          <div class="footer__right">
            <div class="footer__arrow"></div>
          </div>
          <div class="footer__left">
            <div class="minus"></div>
          </div>
        </div>
      </div>
    </div>
      `
    );
  }
  renderName() {
    document.querySelector(".--name--").textContent = this.storage[
      this.ind
    ].name;
  }
  renderNumber() {
    document.querySelector(".--number--").textContent = this.storage[
      this.ind
    ].number;
  }
}
export default Modal;
