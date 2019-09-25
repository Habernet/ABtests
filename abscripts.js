// Nick.com example
$(".promos-container").prepend($(".about-container"));

//This is a script to manipulate the DOM on Barnes and Nobles pages of books.
// Images (books) that are on sale for 40% or more need a red ribbon across them showing that they are a good deal.
// https://www.barnesandnoble.com/b/books/_/N-1fZ29Z8q8 This is the page

function getDiscountPercent(str) {
  var discountValue = str.match(/\d/g);
  console.log(`Discount value before: ${discountValue}`); // see number values in array
  discountValue = discountValue.join(""); // join indexes to become a string value
  console.log(`Discount value after: ${discountValue}`); // see string
  return discountValue;
}

// Determine if that product has 40% or greater off, if it does...add a badge that says "SUPER SAVINGS" in red to the image.
$(".product-list-view .record").each(function() {
  var percentageText = $(this)
    .find(".discount")
    .text();
  console.log(`Percentage text: ${percentageText}`);
  if (percentageText) {
    var actualPercentage = getDiscountPercent(percentageText);
    // Test to see if it's above 40
    console.log(`Actual percentage: ${actualPercentage}`);
  }
});

//LOWES EXAMPLE
var listOfFreeProducts = [3033016, 0, 2];

var bbPriceValue = "0.00 - It's FREE!";
var bbAddToCartText = "It'S FREE!";

var freeProductChecker = function(freeProductsList) {
  // ...on page load look at the digitatlData object and grab the "productId"
  var productId = digitalData.products[0].productId[0];

  var isItFree = freeProductsList.includes(productId);
  // Check out list of freeProducts to see if this value matches
  if (isItFree) {
    // Strikethrough the price
    $(".art-pd-price").css({ "text-decoration": "line-through" });
    // Add new price to the page
    var newPrice = $("<h2>").html(bbPriceValue);
    newPrice.css({ color: "red", "font-weight": "bold" });
    $(".pd-pricing").append(newPrice);
    // Change the button text
    $(".btn-add").html(bbAddToCartText);
  } else {
    console.log("ELSE");
  }
};
freeProductChecker(listOfFreeProducts);

// NHL EXAMPLE WORKS
$(".leaderboard__contianer--standalone").insertAfter($(".follow"));

// NHL scroll example A
var styles = `
#sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1031;
}
`;

// append the stylesheet tag to the head of the page to style elements
$("head").append(`<style type="text/css">${styles}</style>`);

$(window).scroll(function() {
  var elementToMakeSticky = $(".nhl-scores__wrapper"),
    scroll = $(window).scrollTop();
  console.log(scroll);

  if (scroll >= 300) elementToMakeSticky.attr("id", "sticky");
  else elementToMakeSticky.removeAttr("id", "sticky");
});

// NHL scroll example B

var styles = `
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1031;
}
`;

// append the stylesheet tag to the head of the page to style elements
$("head").append(`<style type="text/css">${styles}</style>`);

//Make a wrapper div to place both into
var dynamicWrapper = $("<div>").addClass("dynamic-wrapper");

// Place it on the dom
$(".nhl-scores").before(dynamicWrapper);

//Grab both
var elementToPopHideShow = $(".nhl-scores");
var megaMenu = $(".megamenu");

// Place both elements into it
$(".dynamic-wrapper").append(elementToPopHideShow);
$(".dynamic-wrapper").append(megaMenu);
// Make it sticky

$(".dynamic-wrapper").addClass("sticky");

//Window scroll to slideDown and slideUp
elementToPopHideShow.slideDown(200);

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  console.log(scroll);

  if (scroll >= 300) {
    //hide
    elementToPopHideShow.slideDown(550);
  } else {
    //show
    elementToPopHideShow.slideUp(550);
  }
});

// Overwatch example
// grab the text of div class 'h4 hero-bio-quote'
var heroQuote = $(".hero-bio-quote").text();
console.log(heroQuote);
// Create an h3 to insert between the ability name and the hero name
var quoteToAdd = $("<h3>")
  .addClass("hero-bio-quote")
  .text(heroQuote);
// Insert this div onto the dom
$(".hero-name").append(quoteToAdd);

// TIPS AND TRICKS
// Check the number of instances of a selected element
console.log("LENGTH:", $(".classSelector").length);

// Insert the newest version of jquery onto to page
$(head).append(
  <script
    src='https://code.jquery.com/jquery-3.4.1.js'
    integrity='sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU='
    crossorigin='anonymous'
  ></script>
);
