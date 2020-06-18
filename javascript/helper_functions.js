//jshint  esversion: 6
// Helper Functions

const $s = (elem) => { return window.document.querySelector(elem); }
const $sa = (elem) => { return window.document.querySelectorAll(elem); }
const $ce = (elem) => { return window.document.createElement(elem); }

function test_function(param) {
    alert('clicked: '+param);
}
