import "./styles/main.scss";

import Paginate from "./js/vendor/Paginate.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 32; i < l; i++) {
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
    this.pageSelector = opts.pageSelector;
  }

  // prototypes
  activatePager() {
    this.pager = null;
    this.pager = new Paginate(this.data, this.perPage);

    this.itemList = this.pager.page(0);

    // for dropdown
    this.setTotalPages();

    this.addEvents();
    this.refresh();

  }

  addEvents() {
    document.getElementById(this.btn_prev).addEventListener("click", () => {
      this.prev();
    });

    document.getElementById(this.btn_next).addEventListener("click", () => {
      this.next();
    });
  }

  setTotalPages() {
    let select = document.getElementById(this.pageSelector);
    select.innerHTML = "";

    let optsArr = [];
    for (let i = 1, l = this.pager.totalPages + 1; i < l; i++) {
      optsArr.push({
        value: i,
        selected: false
      });
    }
    optsArr[this.pager.currentPage - 1].selected = true;

    for (let i = 0, l = optsArr.length; i < l; i++) {
      let el = document.createElement("option");
      el.textContent = optsArr[i].value;
      el.value = optsArr[i].value;
      el.selected = optsArr[i].selected;
      select.appendChild(el);
    }

    select.addEventListener("change", (e) => {
      this.showPage(e.target.value);
    }, false);
  }

  showPage(num) {
    this.itemList = this.pager.page(num);
    this.refresh();
  }

  prev() {
    if (this.pager.currentPage === 1) {
      this.itemList = this.pager.page(this.pager.totalPages);
    } else {
      this.itemList = this.pager.prev();
    }
    this.refresh();
  }

  next() {
    if (!this.pager.hasNext()) {
      this.itemList = this.pager.page(0);
    } else {
      this.itemList = this.pager.next();
    }
    this.refresh();
  }

  refresh() {
    document.getElementById(this.itemHolder).innerHTML = this.itemList;
    document.getElementById(this.currentPageHolder).innerHTML = this.pager.currentPage;
    document.getElementById(this.totalPageHolder).textContent = this.pager.totalPages;
    this.setTotalPages();
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
  pageSelector: "jspager_select"
});

zz.activatePager();