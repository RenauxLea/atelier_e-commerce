"use strict";var isOpenClass="modal-is-open",openingClass="modal-is-opening",closingClass="modal-is-closing",animationDuration=400,visibleModal=null,toggleModal=function(e){e.preventDefault();e=document.getElementById(e.target.getAttribute("data-target"));(void 0!==e&&null!=e&&isModalOpen(e)?closeModal:openModal)(e)},isModalOpen=function(e){return!(!e.hasAttribute("open")||"false"==e.getAttribute("open"))},openModal=function(e){isScrollbarVisible()&&document.documentElement.style.setProperty("--scrollbar-width","".concat(getScrollbarWidth(),"px")),document.documentElement.classList.add(isOpenClass,openingClass),setTimeout(function(){visibleModal=e,document.documentElement.classList.remove(openingClass)},animationDuration),e.setAttribute("open",!0)},closeModal=function(e){visibleModal=null,document.documentElement.classList.add(closingClass),setTimeout(function(){document.documentElement.classList.remove(closingClass,isOpenClass),document.documentElement.style.removeProperty("--scrollbar-width"),e.removeAttribute("open")},animationDuration)};document.addEventListener("click",function(e){null!=visibleModal&&(visibleModal.querySelector("article").contains(e.target)||closeModal(visibleModal))}),document.addEventListener("keydown",function(e){"Escape"===e.key&&null!=visibleModal&&closeModal(visibleModal)});var getScrollbarWidth=function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=document.createElement("div");e.appendChild(t);t=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),t},isScrollbarVisible=function(){return document.body.scrollHeight>screen.height};