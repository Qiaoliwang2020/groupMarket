$(document).ready(function(){
  // get user name and user icon from App Id
  $.getJSON('/home/api/idPayload', function (id_token) {
    $('#userNameSpan').html(id_token.name);
    $('#user-icon').attr('src',id_token.picture);
  });
  // initialize modal
  $('.modal').modal();

})
