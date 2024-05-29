$(document).ready(function () {
  $(".details-box").fadeIn("slow");

  var number = 0;
  var numberfav = 0;
  //----------------Trending Carousel hover effects------------------------------------------

  $(".img-trending").hover(
    function () {
      $(this).siblings(".img-trendingCover").fadeIn(500);
    },
    function () {
      // Do nothing on mouseleave
    }
  );

  $(".img-trendingCover").hover(
    function () {
      // Do nothing on mouseenter
    },
    function () {
      $(this).fadeOut(500);
    }
  );
  //--------------------------------------------Icons Cart and Heart-------------------------------------------

  $(".HeartIcon").hover(
    function () {
      $(this).css("color", "orange");
    },
    function () {
      $(this).css("color", "black");
    }
  );
  $(".cartIcon").hover(
    function () {
      $(this).css("color", "orange");
    },
    function () {
      $(this).css("color", "black");
    }
  );

  $(".cartIcon").click(function () {
    $(this).css("display", "none");
    $(this).siblings(".tickIcon").css("display", "block");

    displayCartAdded();
  });

  function displayCartAdded() {
    number++;

    const $numberElement = $(".number");
    $numberElement.html(`${number}`);

    $(".item-Added-Alert").css("display", "flex");

    setTimeout(function () {
      $(".item-Added-Alert").css("display", "none");
    }, 2000);
  }
  //----------------------------------------------cross Icon---------------------
  $(".crossIcon").click(function () {
    $(".item-Added-Alert , .item-Added-Favorite").css("display", "none");
  });

  $(".HeartIcon").click(function () {
    $(this).css("color", "orange");

    displayfavCartAdded();
  });

  function displayfavCartAdded() {
    numberfav++;

    const $numberElement1 = $(".numberfav");
    $numberElement1.html(`${numberfav}`);

    $(".item-Added-Favorite").css("display", "flex");

    setTimeout(function () {
      $(".item-Added-Favorite").css("display", "none");
    }, 2000);
  }

  //---------------------------------------Category -----------------------------------------

  //--------------All products
  $(".allProducts").click(function () {
    $(
      ".earRingsbtn, .Necklacebtn, .Ringsbtn, .braceletsbtn, .bagsbtn"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".Ring, .Bags, .nacklace, .braclates, .earRing").show();
  });
  //--------------Ear Rings

  $(".earRingsbtn").click(function () {
    $(
      " .Necklacebtn, .Ringsbtn, .braceletsbtn, .bagsbtn, .allProducts"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".Ring, .Bags, .nacklace, .braclates").hide();
    $(".earRing").show();
  });

  //------------------Rings

  $(".Ringsbtn").click(function () {
    $(
      " .Necklacebtn, .braceletsbtn, .bagsbtn, .allProducts, .earRingsbtn"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".earRing, .Bags, .nacklace, .braclates").hide();
    $(".Ring").show();
  });

  //-------------------Nacklaces

  $(".Necklacebtn").click(function () {
    $(
      " .Ringsbtn, .braceletsbtn, .bagsbtn, .allProducts, .earRingsbtn"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".earRing, .Bags, .Ring, .braclates").hide();
    $(".nacklace").show();
  });

  //-------------------------Braclates

  $(".braceletsbtn").click(function () {
    $(
      " .Ringsbtn, .Necklacebtn, .bagsbtn, .allProducts, .earRingsbtn"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".earRing, .Bags, .Ring, .nacklace").hide();
    $(" .braclates").show();
  });

  //---------------------------Bags

  $(".bagsbtn").click(function () {
    $(
      " .Ringsbtn, .Necklacebtn, .braceletsbtn, .allProducts, .earRingsbtn"
    ).removeClass("activecategory");
    $(this).addClass("activecategory");
    $(".earRing, .braclates, .Ring, .nacklace").hide();
    $(".Bags").show();
  });

  //------------------------------------------change image in rare Section

  // Improved code
  $(".rare1").click(function () {
    $(".changeImage1").attr("src", "images/rare1.webp");
  });
  $(".rare2").click(function () {
    $(".changeImage1").attr("src", "images/rare1c.webp");
  });

  $(".rare3").click(function () {
    $(".changeImage2").attr("src", "images/rare2.webp");
  });
  $(".rare4").click(function () {
    $(".changeImage2").attr("src", "images/rare2c.webp");
  });

  //--------------------------------Scroll function----------------------------

  // Corrected code
  $(window).scroll(function () {
    $(".navbar").css("background-color", "rgba(0, 0, 0, 0.651)");
  });

  //--------------------------------card Side Div on click---------------------------------

  $(".closebtn").click(function () {
    $(".cartContainer").hide();
    $(".cartInnerContainer").hide();
  });
  $(".cartIcon1").click(function () {
    $(".cartContainer").css("display", "flex");
    $(".cartContainer").show();
    $(".cartInnerContainer").show();
  });

  //-----------------------------Adding items in cart when clicked on the cart icon-------------------
  $(".cartIcon").click(function () {
    let item = $(this).closest(".image-trending-div");
    let cartItem = $("<div>").addClass("cartItem");
    cartItem.html(item.html());
    cartItem.prependTo(".appendCartDiv");
  });
});
