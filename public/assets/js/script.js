

// Active Class JS
// toggle Class 
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}

// add Class 
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}

// remove Class 
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}

$(function () {
$('.inner_content').slideUp();
$('.title_tab.active').next().slideDown();
$('.title_tab').click(function (j) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.title_tab').removeClass('active');
        $(this).next().slideUp();
    }
    else {
        $('.title_tab').removeClass('active');
        $('.inner_content').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
    }
});
});
$(function () {
$('.inner_content_2').slideUp();
$('.title_tab.active_2').next().slideDown();
$('.title_tab_2').click(function (j) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.title_tab_2').removeClass('active');
        $(this).next().slideUp();
    }
    else {
        $('.title_tab_2').removeClass('active');
        $('.inner_content_2').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
    }
});
});
$(function () {
$('.inner_content_3').slideUp();
$('.title_tab.active_3').next().slideDown();
$('.title_tab_3').click(function (j) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.title_tab_3').removeClass('active');
        $(this).next().slideUp();
    }
    else {
        $('.title_tab_3').removeClass('active');
        $('.inner_content_3').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
    }
});
});