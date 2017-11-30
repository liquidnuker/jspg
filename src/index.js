import "./styles/main.scss";

import Paginate from "./js/vendor/Paginate.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 42; i < l; i++) {
  num += 1;
  items.push(num);
}

class JsPager {
  constructor(opts) {
    this.data = opts.data;
    this.perPage = opts.perPage;
    this.itemHolder = opts.itemHolder;
    this.currentPageHolder = opts.currentPageHolder;
    this.totalPageHolder = opts.totalPageHolder;

    this.btn_prev = opts.btn_prev;
    this.btn_next = opts.btn_next;
    
    this.pageJumpInput = opts.pageJumpInput;
    this.pageJumpBtn = opts.pageJumpBtn;

    this.pageSelector = opts.pageSelector;
    this.perPageItems = [10, 20, 40, 60, 100];
    this.perPageSelector = opts.perPageSelector;
  }

  // prototypes
  init() {
    this.pageSelect = document.getElementById(this.pageSelector);
    this.perPageSelect = document.getElementById(this.perPageSelector);
    this.jumpInput = document.getElementById(this.pageJumpInput);
    this.jumpBtn = document.getElementById(this.pageJumpBtn);

    this.activatePager();
    this.addEvents();
  }

  activatePager() {
    this.pager = null;
    this.pager = new Paginate(this.data, this.perPage);
    this.itemList = this.pager.page(0);
    this.currentPage = this.pager.currentPage;
    console.log(this.currentPage);
    this.refresh();
  }

  addEvents() {
    document.getElementById(this.btn_prev).addEventListener("click", () => {
      this.prev();
    });

    document.getElementById(this.btn_next).addEventListener("click", () => {
      this.next();
    });

    this.pageSelect.addEventListener("change", (e) => {
      this.showPage(e.target.value);
    }, false);

    this.perPageSelect.addEventListener("change", (e) => {
      this.setPerPage(e.target.value);
    }, false);

    this.jumpInput.addEventListener("keypress", (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        this.showPage(e.target.value);
      }
    }, false);

    this.jumpBtn.addEventListener("click", (e) => {
      this.showPage(this.jumpInput.value);
    }, false);

    this.setPageSelectorDropdown(this.currentPage);
    this.setPerPageDropdown();
  }

  setPageSelectorDropdown(index) {
    console.log("pageselector" + " " +index);
    
    let pageSelect = this.pageSelect;
    pageSelect.innerHTML = "";

    let optsArr = [];
    for (let i = 1, l = this.pager.totalPages + 1; i < l; i++) {
      optsArr.push({
        value: i,
        selected: false
      });
    }

    if (optsArr[index] === undefined) {
      console.log("Undefined:::" + " " + "currentPage" + " " + index);
    }

    optsArr[index - 1].selected = true;

    for (let i = 0, l = optsArr.length; i < l; i++) {
      let el = document.createElement("option");
      el.textContent = optsArr[i].value;
      el.value = optsArr[i].value;
      el.selected = optsArr[i].selected;
      pageSelect.appendChild(el);
    }
  }

  setPerPageDropdown() {
    // for perPage items
    let perPageSelect = this.perPageSelect;
    perPageSelect.innerHTML = "";
    for (let i = 0, l = this.perPageItems.length; i < l; i++) {
      let el2 = document.createElement("option");
      el2.textContent = this.perPageItems[i];
      el2.value = this.perPageItems[i];
      perPageSelect.appendChild(el2);
    }
  }

  setPerPage(num) {
    this.perPage = num;
    this.currentPage = num;
    this.activatePager();
  }

  showPage(num) {
    this.itemList = this.pager.page(num);
    this.currentPage = num;
    console.log(this.currentPage);
    this.refresh();
  }

  prev() {
    if (this.pager.currentPage == 1) {
      this.itemList = this.pager.page(this.pager.totalPages);
      this.currentPage = this.pager.currentPage;
      } else {
      this.itemList = this.pager.prev();
      this.currentPage = this.pager.currentPage;
    }
    this.refresh();
  }

  next() {
    // console.log(this.currentPage);
    
    if (!this.pager.hasNext()) {
        // this.itemList = this.pager.page(0);
        console.log(this.currentPage);
        console.log("no next");
        this.showPage(1);
      } else {
        this.itemList = this.pager.next();
        // this.showPage(this.currentPage + 1);
        this.refresh();

        console.log("has next");
      }
    // this.currentPage = this.pager.currentPage;

    // this.itemList = this.pager.next();

    // this.refresh();
  }

  refresh() {
    document.getElementById(this.itemHolder).innerHTML = this.itemList;
    document.getElementById(this.currentPageHolder).textContent = this.currentPage;
    document.getElementById(this.totalPageHolder).textContent = this.pager.totalPages;
    this.currentPage = this.pager.currentPage;
    this.setPageSelectorDropdown(this.currentPage);
  }
}

let zz = new JsPager({
  data: items,
  perPage: 10,
  itemHolder: "jspager_items",
  currentPageHolder: "jspager_currentpage",
  totalPageHolder: "jspager_totalpages",
  btn_prev: "jspager_prev",
  btn_next: "jspager_next",
  pageSelector: "jspager_select",
  perPageSelector: "jspager_perpage",
  pageJumpInput: "jspager_jump",
  pageJumpBtn: "jspager_jumpbtn"
});

zz.init();