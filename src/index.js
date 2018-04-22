import "./styles/main.scss";
import JsPager from "./js/jspager.js";

// temp item data
const items = [];
let num = 0;
for (let i = 0, l = 162; i < l; i++) {
  num += 1;
  items.push(num);
}

// jspager1
// ======================================================/
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

// jspager2
// ======================================================/
const item2 = items;

const jspg2 = new JsPager({
  data: item2,
  itemHolder: "jspager2_items",
  currentPageHolder: "jspager2_currentpage",
  totalPageHolder: "jspager2_totalpages", // false
  pageBtnHolder: "jspager2_pagebtnholder", // false

  pageSelector: "jspager2_select",
  perPageSelector: "jspager2_perpage", // false
  pageJumper: "jspager2_jump", // false
  
  pageBtnClass: "jspager2_pagebtn",
  pageBtnActiveClass: " jspager2_pagebtn--active", // add space

  btn_first: "jspager2_first", // false
  btn_last: "jspager2_last", // false
  btn_prev: "jspager2_prev",
  btn_next: "jspager2_next",
});

jspg2.init();