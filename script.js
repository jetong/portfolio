$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


let email = document.getElementById("email");
let email_ul = document.createElement("ul");
let email_li = document.createElement("li");
email.appendChild(email_ul);
email_ul.appendChild(email_li);
email_li.className += "list-item";
email_li.innerHTML = "jose.e.tong@gmail.com";

let connect = document.getElementById("connect");
let connect_ul = document.createElement("ul");
let connect_li1 = document.createElement("li");
let connect_li2 = document.createElement("li");
let connect_li3 = document.createElement("li");
connect.appendChild(connect_ul);
connect_ul.appendChild(connect_li1);
connect_ul.appendChild(connect_li2);
connect_ul.appendChild(connect_li3);
connect_li1.className += "list-item";
connect_li2.className += "list-item";
connect_li3.className += "list-item";
connect_li1.innerHTML = "linkedin.com/in/josetong/";
connect_li2.innerHTML = "github.com/jetong";
connect_li3.innerHTML = "facebook.com/jose.e.tong";
