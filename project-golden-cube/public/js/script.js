"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var images = document.querySelectorAll('.lazy');
var _iterator = _createForOfIteratorHelper(images),
  _step;
try {
  var _loop = function _loop() {
    var image = _step.value;
    var img = document.createElement('img');
    img.src = image.dataset.src;
    img.addEventListener('load', function () {
      image.src = img.src;
      image.classList.remove('lazy');
      delete image.dataset.src;
      // Или так
      // image.removeAttribute('data-src');
      // image.parentElement.classList.add('loaded');
      // console.dir(image);
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }

  // PAGE PRELOADER FUNCTION
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
window.onload = function () {
  var PRELOADERTRANSITION = 2000;
  preloader.style.transition = "opacity ".concat(PRELOADERTRANSITION, "ms");
  preloader.classList.add('fade-out');
  setTimeout(function () {
    preloader.remove();
  }, PRELOADERTRANSITION);
};
// - - - - - - - - - - - - - - - - - - - 

new WOW({
  offset: 300
}).init();