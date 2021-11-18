/* Sidebar */

/* Set the width of the sidebar to Xpx and the left margin of the page content to Xpx */
function openNav() {
    document.querySelector("#mySidebar").style.width = "200px";
    document.querySelector("#main").style.marginLeft = "200px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.querySelector("#mySidebar").style.width = "0";
  document.querySelector("#main").style.marginLeft = "0";
}

/* end sidebar */



/* Flipcard keyboard accessibility!! does not work :/ */

/* flipcard content */
var cardInner = document.querySelector('.flipcard-inner')

/* flip action */
cardInner.addEventListener("click", flipCard)

/* flip flipcard (on event??) */
function flipCard(event) {
  cardInner.classList.toggle('is-flipped')
}

/* end flipcard */

/* also in this area-- tabbing issues */