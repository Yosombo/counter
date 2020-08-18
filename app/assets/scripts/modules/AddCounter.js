class AddCounter {
  constructor() {
    this.banner = document.querySelector(".banner");
    this.items = document.querySelector(".items");
    this.close = document.querySelector(".flexer__close");
    this.name;
    this.allItems = [];
    this.events();
  }

  events() {
    this.banner.addEventListener("click", () => {
      this.name = prompt(`Enter counte`);
      if (this.name) {
        this.injectHtml();
      }

      this.allItems.push(this.name);
      console.log(this.allItems);

      this.close.addEventListener("click", () => {
        this.close.parentNode.innerHTML = "";
      });
    });
  }

  injectHtml() {
    document.querySelector(".items").insertAdjacentHTML(
      "beforebegin",
      `
      <div class="flexer">
      <div class="flexer__item to-modal">
        <h4 class="flexer__item__title">${this.name}</h4>
      </div>
      <div class="flexer__close">x</div>
      <div class="flexer__item__line"></div>
    </div>
      `
    );
  }
}

export default AddCounter;
