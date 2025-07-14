/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   event.preventDefault();
   event.stopPropagation();
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

 // Close menu when clicking outside (mobile only)
 $(document).on("click", function(event) {
   // Only run on mobile - check if menu icon is visible
   if ($("a.menu-icon").is(":visible")) {
     var menu = $(".menu");
     var siteNav = $(".site-nav");
     
     // Check if click is outside the menu area
     if (!siteNav.is(event.target) && siteNav.has(event.target).length === 0) {
       menu.css({ display: "none" });
     }
   }
 });

/**
 * Wechat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });
  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});
