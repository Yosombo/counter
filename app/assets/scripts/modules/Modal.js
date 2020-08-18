class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.toHome = document.querySelector(".footer__right");
    this.events();
  }
  events() {
    this.toHome.addEventListener("click", (e) => this.closeModal(e));
  }
  openModal() {
    this.modal.classList.add("modal--is-visible");
  }
  closeModal(e) {
    this.modal.classList.remove("modal--is-visible");
  }
  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal">
        <div class="container">
          <div class="modal__title">
            <h3>abcdef</h3>
          </div>
          <div class="counter-number">
            100
          </div>
          <div class="circle">
            <div class="circle__add"></div>
          </div>
          <div class="footer">
            <div class="footer__right">
              <div class="footer__arrow"></div>
            </div>
            <div class="footer__left">
              <div class="footer__minus"></div>
            </div>
          </div>
        </div>
      </div>
        `
    );
  }
}

export default Modal;
