$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        nav: false,
        responsive: responsive
    });
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