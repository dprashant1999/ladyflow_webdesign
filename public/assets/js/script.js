

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


    const inputs = document.querySelectorAll(".otp-field input");

      inputs.forEach((input, index) => {
          input.dataset.index = index;
          input.addEventListener("keyup", handleOtp);
          input.addEventListener("paste", handleOnPasteOtp);
      });

      function handleOtp(e) {
          const input = e.target;
          let value = input.value;
          let isValidInput = value.match(/[0-9a-z]/gi);
          input.value = "";
          input.value = isValidInput ? value[0] : "";

          let fieldIndex = input.dataset.index;
          if (fieldIndex < inputs.length - 1 && isValidInput) {
              input.nextElementSibling.focus();
          }

          if (e.key === "Backspace" && fieldIndex > 0) {
              input.previousElementSibling.focus();
          }

          if (fieldIndex == inputs.length - 1 && isValidInput) {
              submit();
          }
      }

      function handleOnPasteOtp(e) {
          const data = e.clipboardData.getData("text");
          const value = data.split("");
          if (value.length === inputs.length) {
              inputs.forEach((input, index) => (input.value = value[index]));
              submit();
          }
      }

      function submit() {
          console.log("Submitting...");
          // 👇 Entered OTP
          let otp = "";
          inputs.forEach((input) => {
              otp += input.value;
              input.disabled = true;
              input.classList.add("disabled");
          });
          console.log(otp);
          // 👉 Call API below
      }

       // half slider
       var swiper = new Swiper(".swiper-container.swiper_half", {
        slidesPerView: 1, 
        centeredSlides: true, 
        spaceBetween: 30, 
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.2
          },
          1024: {
            slidesPerView: 2.2
          }
        }
      });