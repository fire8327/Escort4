/* nav-slider */
const swiper = new Swiper('.nav-slider', {
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },    
    breakpoints: {
        320: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 10,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 12,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 16,
          spaceBetween: 24,
        }
    }
});
/* card-slider */
const swiper2 = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1
});
/* girlPage-slider */
const swiper3 = new Swiper('.girlPage-slider2', {
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    },
    freeMode: true,
    watchSlidesProgress: true
});
const swiper4 = new Swiper('.girlPage-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: swiper3,
    }
});


/* modal */
$(".openModal").each((i, el) => {
  $(el).click(() => {
    $("#modal").removeClass("-translate-y-full")
    $("#overlayModal").removeClass("hidden")
  })
})
$("#closeModal, #overlayModal").click(() => {
  $("#modal").addClass("-translate-y-full")
  $("#overlayModal").addClass("hidden")
})


/* showPhone */
$(".showPhone").each((i, el) => {
    $(el).click(() => {
        $(el).find(".show").addClass("hidden")
        $(el).find(".phone").removeClass("hidden")
    })
})


/* likeButton */
$(".likeButton").each((i, el) => {
    $(el).click(() => {
        $(el).find("svg").toggleClass("fill-white fill-[#EE5253]")
    })
})


/* tabs */
$(".tab-main").each(function(index) {
    let $this = $(this);
    let prefix = "tabs-" + index;
  
    $this.find("ul a").each(function(tabIndex) {
      let $tab = $(this);
      let tabId = prefix + "-tab-" + tabIndex;
      let panelId = prefix + "-panel-" + tabIndex;
  
      $tab.attr("href", "#" + panelId);
      $tab.closest("li").attr("id", tabId);
    });
  
    $this.find(".tab-card").each(function(panelIndex) {
      $(this).attr("id", prefix + "-panel-" + panelIndex);
    });
  
    $this.tabs();
});