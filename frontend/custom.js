
console.log('Javascript functions!!');
const form = document.getElementById('loginForm');

form.onsubmit = function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', baseUrl + '/backend/api.php', /* async = */ false);

  var formData = new FormData(document.getElementById('loginForm'));

  formData.append('appended1', 'appended value');

  request.send(formData);

  console.log(request.response);
}

$( document ).ready(function() {
  function authenticate(){
    $.ajax({
      url: baseUrl + '/backend/api.php',
      crossDomain : true,
      datatype: 'json',
      success: function(result){
        console.log(result);
    }});
  }
 
});

