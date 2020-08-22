import { indexOf } from "lodash";
import uniqid from "uniqid";

class AddCounter {
  constructor() {
    this.readDataFromLocalST();
    if (!this.allItems) this.allItems = [];
    this.banner = document.querySelector(".banner");
    this.items = document.querySelector(".items");
    this.counter;
    this.number = 0;
  }

  askName() {
    this.name = prompt(`Enter a name for this counter`);
  }

  events() {
    this.banner.addEventListener("click", () => {
      // Тоолуурын нэрийг авах
      this.askName();
      // Доорх нөхцөлийг хангаж байвал
      if (this.name !== null && this.name !== "" && this.name !== " ") {
        // Тухайн тоолууранд зориулан тусгай id нэр бүхий обект үүсгэх
        this.addToCounter();
        // Бүх тоолуурыг агуулагч массивруу нэр id бүхий тоолуурыг нэмэх
        this.allItems.push(this.counter);
        this.saveToLocalSt();
        // htmlийг үндсэн цэсрүү нэмэх
        this.injectHtml();
        window.location.reload(true);
      } else {
        console.log(`enter counter name`);
      }
      this.deleteItem();
    });
  }

  deleteItem() {
    this.items.addEventListener("click", (e) => {
      if (e.target.className == "flexer__close") {
        //Эцэг элемэнтэнд листэнэр тавин, эвэнт баблин ашиглан тухайн элэмэнимйг олж авах

        const li = e.target.parentNode;

        // дэлгэцнээс устгах
        this.items.removeChild(li);

        // устгах тоолуурын id.г нь олох
        const index = this.allItems.findIndex(
          (e) => e.id === li.dataset.counterid
        );
        // Массиваас тоолуурыг устгах

        this.allItems.splice(index, 1);

        this.saveToLocalSt();
      }
    });
  }

  // localStorage рүү бүх тоолуурыг агуулсан массивийг хадгалах
  saveToLocalSt() {
    localStorage.setItem("total-Items", JSON.stringify(this.allItems));
  }

  // localStorage.ээс өгөгдөлийг хөрвүүлж авах
  readDataFromLocalST() {
    this.allItems = JSON.parse(localStorage.getItem("total-Items"));
    return this.allItems;
  }

  addToCounter() {
    this.counter = {
      id: uniqid(),
      name: this.name,
      number: this.number,
    };
  }

  injectHtml() {
    document.querySelector(".items").insertAdjacentHTML(
      "afterbegin",
      `
      <div class="flexer" data-counterid=${this.counter.id}>
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
