import "./styles/main.scss";
import JsPager from "./js/jspager.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 162; i < l; i++) {
  num += 1;
  items.push(num);
}

const jspg = new JsPager({
  data: items,
  itemHolder: "jspager_items",
  currentPageHolder: "jspager_currentpage",
  totalPageHolder: "jspager_totalpages", // false
  pageBtnHolder: "jspager_pagebtnholder", // false

  pageSelector: "jspager_select",
  perPageSelector: "jspager_perpage", // false
  pageJumper: "jspager_jump", // false
  pageJumpBtn: "jspager_jumpbtn", // false

  pageBtnClass: "jspager_pagebtn",
  pageBtnActiveClass: " jspager_pagebtn--active", // add space

  btn_first: "jspager_first", // false
  btn_last: "jspager_last", // false
  btn_prev: "jspager_prev",
  btn_next: "jspager_next",

});

jspg.init();