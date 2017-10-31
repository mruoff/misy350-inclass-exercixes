

function main(){
  //all code should be in here

  //document.getElementById('Google').innerHTML = "Google";
  $('#Google').html('Google');
  //let links = document.getElementsByClassName('my-link');
  let links = $('.my-link');
  links[0].innerHTML = "Twitter";
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML = "LinkedIn";
  links[1].href = "http://www.linkedin.com";
  links[1].style.color="red";


  //button click
  $('#heading-button').click(function(){
$('h1').css('color', 'red');
$('.my-link').hide();
  });
  //toggle-button
  $('#toggle-button').click(function(){
  $('.my-link').toggle();
  });

  //hide and show main text
  $('#main-text').hide();
  $('#main-text').fadeIn(1000);

  //hide projects
  $('.project').hide();

  //show projects by clicking
  $('.project-button').click(function(){
    $(this).next().slideToggle(500);
  });
}

$(document).ready(main);
