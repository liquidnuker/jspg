import Pager from "./pager.js";
import {
  pageBtns
}
from "./pagebtns.js";

export default function JsPager(opts) {
  this.data = opts.data;
  this.itemHolder = opts.itemHolder;
  this.currentPageHolder = opts.currentPageHolder;
  this.totalPageHolder = opts.totalPageHolder;
  this.pageBtnHolder = opts.pageBtnHolder;

  this.pageSelector = opts.pageSelector;
  this.perPageSelector = opts.perPageSelector;
  this.pageJumper = opts.pageJumper;
  this.pageJumpBtn = opts.pageJumpBtn;

  this.pageBtnClass = opts.pageBtnClass;
  this.pageBtnActiveClass = opts.pageBtnActiveClass;
  this.pageBtnDotsClass = opts.pageBtnDotsClass;

  this.btn_first = opts.btn_first;
  this.btn_prev = opts.btn_prev;
  this.btn_next = opts.btn_next;
  this.btn_last = opts.btn_last;

  this.perPage = 10;
  this.perPageItems = [10, 20, 50, 100];
}

JsPager.prototype = {
  init: function () {
    this.activatePager(this.perPage);

    if (this.perPageSelector) {
      this.setPerPageDropdown();
    }

    this.addEvents();
  },
  activatePager: function () {
    this.pg = null;
    this.pg = new Pager({
      perPage: this.perPage,
      data: this.data
    });

    this.setPageBtns();
    this.showItems(1);
  },
  getId: function (id) {
    return document.getElementById(id);
  },
  generateListener: function (id, actions) {
    // for optional items
    if (id !== undefined) {
      actions.forEach((i) => {
        this.getId(id).addEventListener(i.ev, (event) => i.exec(event));
      });
    }
  },
  addEvents: function () {
    this.generateListener(this.btn_first, [{
      ev: "click",
      exec: () => this.showItems(1)
    }]);

    this.generateListener(this.btn_last, [{
      ev: "click",
      exec: () => this.showItems(this.pg.getTotalPages())
    }]);

    this.generateListener(this.btn_prev, [{
      ev: "click",
      exec: () => this.flip()
    }]);

    this.generateListener(this.btn_next, [{
      ev: "click",
      exec: () => this.flip("next")
    }]);

    this.generateListener(this.pageSelector, [{
      ev: "change",
      exec: (event) => this.showItems(Number(event.target.value))
    }]);

    this.generateListener(this.perPageSelector, [{
      ev: "change",
      exec: (event) => this.changePerPage(event.target.value)
    }]);

    this.generateListener(this.pageJumper, [{
      ev: "keypress",
      exec: (event) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
          this.showItems(Number(event.target.value));
        }
      }
    }]);

    this.generateListener(this.pageJumpBtn, [{
      ev: "click",
      exec: () => this.showItems(Number(this.getId(this.pageJumper).value))
    }]);

  },
  showItems(num) {
    // total pages
    if (this.totalPageHolder) {
      this.getId(this.totalPageHolder).textContent = `of ${this.pg.getTotalPages()}`;
    }

    let itemHolder = this.getId(this.itemHolder);
    itemHolder.innerHTML = "";
    itemHolder.setAttribute("aria-setsize", this.data.length);

    this.pg.page(num).forEach((i, index) => {
      // el, textContent, value, attr
      let el2 = this.generateElement("span", i + " ", i, {
        "aria-posinset": index + 1,
      });

      itemHolder.appendChild(el2);
    });

    this.setPageSelectorDropdown(this.pg.currentPage);

    if (this.pageBtnHolder) {
      this.changePageBtns();
    }
  },
  flip(direction) {
    if (direction === "next") {
      this.showItems(this.pg.next());
    } else {
      this.showItems(this.pg.prev());
    }
  },
  changePerPage(perPage) {
    this.perPage = perPage;
    this.activatePager();
  },
  setPageSelectorDropdown(page) {
    let pageSelector = this.getId(this.pageSelector);
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
      let el2 = this.generateElement("option",
        optsArr[i].value,
        optsArr[i].value
      );

      el2.selected = optsArr[i].selected;
      pageSelector.appendChild(el2);
    }
  },
  generateElement(el, textContent, value, attr) {
    let getKeys = (obj) => {
      let keys = [];
      for (let i in obj) {
        keys.push(i);
      }
      return keys;
    };

    el = document.createElement(el);
    el.textContent = textContent;
    el.value = value;

    getKeys(attr).forEach((i) => {
      return el.setAttribute(i, attr[i]);
    });

    return el;
  },
  setPerPageDropdown() {
    let perPageSelector = this.getId(this.perPageSelector);
    perPageSelector.innerHTML = "";

    this.perPageItems.forEach((i) => {
      let el2 = this.generateElement("option", i, i);
      perPageSelector.appendChild(el2);
    });
  },
  setPageBtns() {
    this.temp = [];
    // push page buttons to new array to prevent extra buttons
    for (let i = 0, l = this.pg.getTotalPages(); i < l; i++) {
      this.temp.push(pageBtns(i, l));
    }
  },
  changePageBtns() {
    let pageBtnHolder = this.getId(this.pageBtnHolder);
    pageBtnHolder.innerHTML = "";

    let buttonSet = this.temp[this.pg.currentPage - 1];
    buttonSet.forEach((i, index) => {

      let el2 = this.generateElement("a", i, i, {
        "tabindex": 0,
        "aria-posinset": index + 1
      });

      if (el2.value === "...") {
        el2.className = this.pageBtnDotsClass;
      } else {
        el2.className = this.pageBtnClass;

        // placed here to remove click events on dots 
        el2.addEventListener("click", (e) => {
          this.showItems(e.target.value);
        });

        el2.addEventListener("keypress", (e) => {
          if (e.keyCode === 32 || e.keyCode === 13) {
            this.showItems(e.target.value);
          }
        });
      }

      if (el2.value === this.pg.currentPage) {
        el2.className = `${this.pageBtnClass} ${this.pageBtnActiveClass}`;
        el2.setAttribute("aria-selected", true);
      }

      pageBtnHolder.setAttribute("aria-setsize", buttonSet.length);
      pageBtnHolder.appendChild(el2);
    });
  },
};