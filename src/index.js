import "./styles/main.scss";

import Pager from "./js/pager.js";
import {pageBtns} from "./js/pagebtns.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 162; i < l; i++) {
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
  this.perPage = 20;
  this.perPageItems = [10, 20, 50, 100];
  // this.pageBtns = "";
}

JsPager.prototype = {
  init: function () {
    this.activatePager(this.perPage);
    this.setPerPageDropdown();
    this.addEvents();
  },
  activatePager: function () {
    this.pg = null;
    this.pg = new Pager({
      perPage: this.perPage,
      data: items
    });
    this.setPageBtns();
    this.showItems(1);
  },
  addEvents: function () {
    document.getElementById(this.btn_prev).addEventListener("click", () => {
      this.flip();
    });

    document.getElementById(this.btn_next).addEventListener("click", () => {
      this.flip("next");
    });

    document.getElementById(this.pageSelector).addEventListener("change", (event) => {
      this.showItems(event.target.value);
    });

    document.getElementById(this.perPageSelector).addEventListener("change", (event) => {
      this.changePerPage(event.target.value);
    });

    document.getElementById(this.pageJumpBtn).addEventListener("click", () => {
      this.pageJump();
    });

    document.getElementById(this.pageJumper).addEventListener("keypress", (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        this.pageJump();
      }
    });
  },
  showItems(num) {
    let itemHolder = document.getElementById(this.itemHolder);
    itemHolder.innerHTML = "";

    this.pg.page(num).forEach(function (i) {
      let el2 = document.createElement("div");
      el2.textContent = i;
      el2.value = i;
      itemHolder.appendChild(el2);
    });

    this.setPageSelectorDropdown(this.pg.currentPage);
    this.changePageBtns();    
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
  changePerPage(perPage) {
    this.perPage = perPage;
    this.activatePager();
  },
  setPageSelectorDropdown(page) {
    let pageSelector = document.getElementById(this.pageSelector);
    pageSelector.innerHTML = "";

    let optsArr = [];
    for (let i = 0, l = this.pg.getTotalPages() + 1; i < l; i++) {
      optsArr.push({
        value: i,
        selected: false
      });
    }

    optsArr[page].selected = true;

    for (let i = 1, l = this.pg.getTotalPages() + 1; i < l; i++) {
      let el2 = document.createElement("option");
      el2.textContent = optsArr[i].value;
      el2.value = optsArr[i].value;
      el2.selected = optsArr[i].selected;
      pageSelector.appendChild(el2);
    }
  },
  setPerPageDropdown() {
    let perPageSelector = document.getElementById(this.perPageSelector);
    perPageSelector.innerHTML = "";

    this.perPageItems.forEach(function (i) {
      let el2 = document.createElement("option");
      el2.textContent = i;
      el2.value = i;
      perPageSelector.appendChild(el2);
    });
  },
  setPageBtns() {
    this.temp = [];
    // push page buttons to new array to prevent extra pages
    for (let i = 0, l = this.pg.getTotalPages(); i < l; i++) {
      this.temp.push(pageBtns(i, l));
    }
  },
  changePageBtns() {
    console.log("changePageBtns " + this.temp[this.pg.currentPage - 1]);
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