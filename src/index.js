import "./styles/main.scss";

import Pager from "./js/pager.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 42; i < l; i++) {
  num += 1;
  items.push(num);
}

function JsPager(opts) {
  this.itemHolder = opts.itemHolder;
  this.currentPageHolder = opts.currentPageHolder;
  this.totalPageHolder = opts.totalPageHolder;

  this.pageSelector = opts.pageSelector;
  this.perPageSelector = opts.perPageSelector;
  this.pageJumper = opts.pageJumper;
  this.pageJumpBtn = opts.pageJumpBtn;

  this.btn_prev = opts.btn_prev;
  this.btn_next = opts.btn_next;

  this.pg = "";
  this.perPage = 10;
  this.perPageItems = [10, 20, 50, 100];
}

JsPager.prototype = {
  init: function () {
    this.activatePager(this.perPage);
    this.showItems(1);
    this.setPageSelectorDropdown();
    this.setPerPageDropdown();
    this.addEvents();
  },
  activatePager: function(perPage) {
    this.pg = new Pager({
      perPage: perPage,
      data: items
    });
  },
  addEvents: function() {
    document.getElementById(this.btn_prev).addEventListener("click", () => {
      this.flip();
    });

    document.getElementById(this.btn_next).addEventListener("click", () => {
      this.flip("next")
    });

    document.getElementById(this.pageSelector).addEventListener("change", (event) => {
      this.showItems(event.target.value);
    });

    document.getElementById(this.perPageSelector).addEventListener("click", (event) => {
      
    });

    document.getElementById(this.pageJumpBtn).addEventListener("click", () => {
      this.pageJump();
    });
  },
  showItems(num) {
    let itemHolder = document.getElementById(this.itemHolder);
    itemHolder.innerHTML = "";

    this.pg.page(num).forEach(function (i, index, array) {
      let el2 = document.createElement("div");
      el2.textContent = i;
      el2.value = i;
      itemHolder.appendChild(el2);
    });
  },
  flip(direction) {
    if (direction === "next") {
      this.showItems(this.pg.next());
    } else {
      this.showItems(this.pg.prev());
    }
  },
  pageJump() {
    let page = document.getElementById(this.pageJumper).value;
    this.showItems(page);
  },
  setPageSelectorDropdown() {
    let pageSelector = document.getElementById(this.pageSelector);
    pageSelector.innerHTML = "";
    for (let i = 1, l = this.pg.getTotalPages() + 1; i < l; i++) {
      let el2 = document.createElement("option");
      el2.textContent = i;
      el2.value = i;
      pageSelector.appendChild(el2);
    }
  },
  setPerPageDropdown() {
    let perPageSelector = document.getElementById(this.perPageSelector);
    perPageSelector.innerHTML = "";

    this.perPageItems.forEach(function(i, index, array) {
      let el2 = document.createElement("option");
      el2.textContent = i;
      el2.value = i;
      perPageSelector.appendChild(el2);
    });
  }
};

let jspg = new JsPager({
  itemHolder: "jspager_items",
  currentPageHolder: "jspager_currentpage",
  totalPageHolder: "jspager_totalpages",

  pageSelector: "jspager_select",
  perPageSelector: "jspager_perpage",
  pageJumper: "jspager_jump",
  pageJumpBtn: "jspager_jumpbtn",

  btn_prev: "jspager_prev",
  btn_next: "jspager_next",
});

jspg.init();