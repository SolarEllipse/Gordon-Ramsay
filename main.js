// PAGE SLIDERS, COLOR CHANGES --------------------------
var main = $(".main-page");
var info = $(".information-page");
var recipes = $(".recipes-page");
var books = $(".books-page");
var photos = $(".photos-page");

var mainButton = $(".main-page-button");
var infoButton = $(".information-page-button");
var recipesButton = $(".recipes-page-button");
var booksButton = $(".books-page-button");
var photosButton = $(".photos-page-button");

var recipesBg = $(".recipes-bg");
var recipeEl = $();

var header = $(".header");

$(".page").slideUp(0);
main.slideDown(400);

$(".button").on("click", function() {
	$(".page").slideUp(400);

	recipesBg.slideUp(400);
	recipeEl.slideUp(400);

	$(".button").removeClass("active-button");
	$(this).addClass("active-button");
});

mainButton.on("click", function() {
	main.delay(400).slideDown(400);
});

recipesButton.on("click", function() {
	recipes.delay(400).slideDown(400);
});

infoButton.on("click", function() {
	info.delay(400).slideDown(800);
});

booksButton.on("click", function() {
	books.delay(400).slideDown(1200);
});

photosButton.on("click", function() {
	photos.delay(400).slideDown(400);
});

// MAIN IMG FADE ----------------------------------------
var mainImageHover = $(".main-image-hover");
var mainImageBlock = $(".main-image-block");

mainImageHover.fadeOut(0);

mainImageBlock.mouseenter(function() {
	mainImageHover.fadeIn(400);
});

mainImageBlock.mouseleave(function() {
	mainImageHover.fadeOut(400);
});


// MAIN IMAGE FADE RECIPE LINK -----------------------------
var hoverRecipeLink = $(".main-image-hover-recipe-link");
var beefWellington = $("#beef-wellington");

hoverRecipeLink.on("click", function() {
	main.slideUp(400);
	info.slideUp(400);
	recipes.delay(400).slideDown(400);
	recipesBg.delay(800).slideDown(400);
	beefWellington.delay(800).slideDown(400);
});


// RECIPE MEMORY BLOCK ----------------------------------


recipesBg.slideUp(0);
$(".recipe").slideUp(0);

$("a[data-toggle='recipe']").on("click", function() {
	
  	var recipeId = $(this).data("target");
  	recipeEl = $("#" + recipeId);
  	recipesBg.slideDown(400);
  	recipeEl.slideDown(400, function () {
  		window.scrollBy(0, 100);
  	});
});

recipesBg.on("click", function() {
	window.scrollBy(0, -100);
	recipesBg.slideUp(400);
	recipeEl.slideUp(400);
});

// STICKIES ---------------------------------------------
recipesBg.sticky({topSpacing: 0});
recipeEl.sticky({topSpacing: 0});


// JUSTIFIED GALLERY ------------------------------------
$("#justifiedGallery").justifiedGallery({
	rowHeight: 150,
	maxRowHeight: 300,
	margins: 5,
	border: 1,
	cssAnimations: true,
	randomise: true,
	lastRow: 'justify',
	captions: true
});



