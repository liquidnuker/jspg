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
  itemHolder: "jspager1_items",
  currentPageHolder: "jspager1_currentpage",
  totalPageHolder: "jspager1_totalpages", // false
  pageBtnHolder: "jspager1_pagebtnholder", // false

  pageSelector: "jspager1_select",
  perPageSelector: "jspager1_perpage", // false
  pageJumper: "jspager1_jump", // false
  pageJumpBtn: "jspager1_jumpbtn", // false

  pageBtnClass: "jspager1_pagebtn",
  pageBtnActiveClass: " jspager1_pagebtn--active", // add space

  btn_first: "jspager1_first", // false
  btn_last: "jspager1_last", // false
  btn_prev: "jspager1_prev",
  btn_next: "jspager1_next",

});

jspg.init();