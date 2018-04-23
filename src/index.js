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
  totalPageHolder: "jspager1_totalpages", // optional
  pageBtnHolder: "jspager1_pagebtnholder", // optional

  pageSelector: "jspager1_select",
  perPageSelector: "jspager1_perpage", // optional
  pageJumper: "jspager1_jump", // optional
  pageJumpBtn: "jspager1_jumpbtn", // optional

  pageBtnClass: "jspager1_pagebtn",
  pageBtnActiveClass: " jspager1_pagebtn--active", // add space

  btn_first: "jspager1_first", // optional
  btn_last: "jspager1_last", // optional
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
  totalPageHolder: "jspager2_totalpages", // optional
  pageBtnHolder: "jspager2_pagebtnholder", // optional

  pageSelector: "jspager2_select",
  perPageSelector: "jspager2_perpage", // optional

  pageBtnClass: "jspager2_pagebtn",
  pageBtnActiveClass: " jspager2_pagebtn--active", // add space

  btn_first: "jspager2_first", // optional
  btn_last: "jspager2_last", // optional
  btn_prev: "jspager2_prev",
  btn_next: "jspager2_next",
});

jspg2.init();

// jspager3
// ======================================================/
const item3 = items;

const jspg3 = new JsPager({
  data: item3,
  itemHolder: "jspager3_items",
  currentPageHolder: "jspager3_currentpage",
  totalPageHolder: "jspager3_totalpages", // optional
  pageBtnHolder: "jspager3_pagebtnholder", // optional

  pageSelector: "jspager3_select",
  perPageSelector: "jspager3_perpage", // optional

  pageBtnClass: "jspager3_pagebtn",
  pageBtnActiveClass: " jspager3_pagebtn--active", // add space

  btn_first: "jspager3_first", // optional
  btn_last: "jspager3_last", // optional
  btn_prev: "jspager3_prev",
  btn_next: "jspager3_next",
});

jspg3.init();

// jspager4
// ======================================================/
const item4 = items;

const jspg4 = new JsPager({
  data: item4,
  itemHolder: "jspager4_items",
  currentPageHolder: "jspager4_currentpage",
  totalPageHolder: "jspager4_totalpages", // optional

  pageSelector: "jspager4_select",
  perPageSelector: "jspager4_perpage", // optional

  btn_first: "jspager4_first", // optional
  btn_last: "jspager4_last", // optional
  btn_prev: "jspager4_prev",
  btn_next: "jspager4_next",
});

jspg4.init();

// jspager5
// ======================================================/
const item5 = items;

const jspg5 = new JsPager({
  data: item5,
  itemHolder: "jspager5_items",
  currentPageHolder: "jspager5_currentpage",
  totalPageHolder: "jspager5_totalpages", // optional
  pageBtnHolder: "jspager5_pagebtnholder", // optional

  pageSelector: "jspager5_select",
  perPageSelector: "jspager5_perpage", // optional

  pageBtnClass: "jspager5_pagebtn",
  pageBtnActiveClass: " jspager5_pagebtn--active", // add space

  btn_first: "jspager5_first", // optional
  btn_last: "jspager5_last", // optional
  btn_prev: "jspager5_prev",
  btn_next: "jspager5_next",
});

jspg5.init();