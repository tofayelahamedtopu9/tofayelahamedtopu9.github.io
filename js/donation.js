$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
	})
});
function validateForm() {
    document.getElementById("nmsg").innerText = '';
    var name = document.getElementById("name").value;
    if (!name || /^\d+$/.test(name)) {
        document.getElementById("nmsg").innerText = 'Name is AlphaNumeric only';
    }
    document.getElementById("zmsg").innerText = '';
    var zip = document.getElementById("number").value;
    if (!zip || !/^\d+$/.test(number)) {
        document.getElementById("zmsg").innerText = 'Your card Number (Numeric only)';
    } 
  }