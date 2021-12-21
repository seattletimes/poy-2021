// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

// lazy load images and loopers
var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));

const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

const height = window.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;



var full_height = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

console.log(full_height + " " + document.documentElement.scrollHeight);

var size = "small";

if (width > 500){
  size = "medium";
} else {};

// function updateScrollBar() {
//   console.log(window.pageYOffset);
//   const docHeight = (full_height - height);
//   let position = window.pageYOffset;
//   var percentage = ((position / docHeight) * 100);
//   document.querySelector('#navScroll').style.width = `${percentage}%`;
// }
//
// updateScrollBar();
//
// document.addEventListener("scroll", updateScrollBar);

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;

const config = {
  rootMargin: `${height}px 0px ${height}px 0px`
};

//turn me back on if you need it
// if(isSafari){
//
// if ("IntersectionObserver" in window) {
//   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//     // console.log(observer);
//     entries.forEach(function(entry) {
//
//
//       if (entry.isIntersecting) {
//             console.log("hi");
//             let lazyImage = entry.target;
//             let picID = lazyImage.dataset.src;
//             lazyImage.src = `assets/POY2021/${size}/${picID}`;
//             lazyImage.classList.remove("lazy");
//             lazyImageObserver.unobserve(lazyImage);
//       }
//     });
//   }, config);
//
//   lazyImages.forEach(function(lazyImage) {
//     lazyImageObserver.observe(lazyImage);
//   });
// } else {
// 	// document.addEventListener("DOMContentLoaded", function() {
// 	  let active = false;
//
// 	  const lazyLoad = function() {
// 	    if (active === false) {
// 	      active = true;
//
// 	      setTimeout(function() {
// 	        lazyImages.forEach(function(lazyImage) {
// 	          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
// 	            lazyImage.src = lazyImage.dataset.src;
// 	            lazyImage.srcset = lazyImage.dataset.srcset;
// 	            lazyImage.classList.remove("lazy");
//
// 	            lazyImages = lazyImages.filter(function(image) {
// 	              return image !== lazyImage;
// 	            });
//
// 	            if (lazyImages.length === 0) {
// 	              document.removeEventListener("scroll", lazyLoad);
// 	              window.removeEventListener("resize", lazyLoad);
// 	              window.removeEventListener("orientationchange", lazyLoad);
// 	            }
// 	          }
// 	        });
//
// 	        active = false;
// 	      }, 200);
// 	    }
// 	  };
//
// 	  document.addEventListener("scroll", lazyLoad);
// 	  window.addEventListener("resize", lazyLoad);
// 	  window.addEventListener("orientationchange", lazyLoad);
// 	// });
// }
//
// }
//turn me back on if you need it


//LAURENS ATTEMP WIT JAVASCRIPT SCROLLS

// HTML CSS JSResult Skip Results Iframe
// EDIT ON

  // var lazyloadImages = document.querySelectorAll("img.lazy");
  // var lazyloadThrottleTimeout;
  //
  // function lazyload () {
  //   if(lazyloadThrottleTimeout) {
  //     clearTimeout(lazyloadThrottleTimeout);
  //   }
  //
  //   // console.log("hi I'm running");
  //
  //   lazyloadThrottleTimeout = setTimeout(function() {
  //       var scrollTop = window.pageYOffset;
  //       lazyloadImages.forEach(function(img) {
  //           if(img.offsetTop < ((window.innerHeight * 2) + scrollTop)) {
  //             let picID = img.dataset.src;
  //             img.src = `assets/POY2021/${size}/${picID}`;
  //             img.classList.remove('lazy');
  //           }
  //       });
  //       if(lazyloadImages.length == 0) {
  //         document.removeEventListener("scroll", lazyload);
  //         window.removeEventListener("resize", lazyload);
  //         window.removeEventListener("orientationChange", lazyload);
  //       }
  //   }, 20);
  // }
  //
  // document.addEventListener("scroll", lazyload);
  // window.addEventListener("resize", lazyload);
  // window.addEventListener("orientationChange", lazyload);
