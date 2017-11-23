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
  }

  // prototypes
  activatePager() {
    this.pager = null;
    this.pager = new Paginate(this.data, this.perPage);
    this.currentPage = this.pager.currentPage;
    this.setTotalPages(this.pager.totalPages);

    document.getElementById(this.itemHolder).innerHTML = this.pager.page(1);
    document.getElementById(this.currentPageHolder).innerHTML = this.currentPage;
  }

  setTotalPages(totalPages) {
    console.log(totalPages);
  }

}

let zz = new JsPager({
  data: items,
  perPage: 10,
  itemHolder: "pageitems",
  currentPageHolder: "currentpage"
});

zz.activatePager();