function getFirstSelector(selector) {
  const element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  const targetDiv = document.querySelector("#nested .target");
  return targetDiv;
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < lis.length; i++) {
    let childrenLi = lis[i].children;
    for (let j = 0; j < childrenLi.length; j++) {
      childrenLi[j].innerHTML = parseInt(childrenLi[j].innerHTML) + n;
    }
  }
}

/**
 *
 * Define a function deepestChild() that pulls out the
 * most deeply nested child element from div#grand-node.
 *  (Remember, you can iterate over elements
 *  and call querySelector() and querySelectorAll() on them.
 * This is challenging to implement correctly, but not beyond your ability!)
 *
 */

function deepestChild() {
  let divGrand = document.querySelector("#grand-node");
  let divs = divGrand.children[0];

  while (divs) {
    divGrand = divs;
    divs = divGrand.children[0];
  }

  return divGrand;
}
