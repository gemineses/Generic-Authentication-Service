console.log('Javascript functions!!');
const form = document.getElementById('loginForm');

form.onsubmit = function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', 'https://httpbin.org/post', /* async = */ false);

  var formData = new FormData(document.getElementById('loginForm'));

  formData.append('appended1', 'appended value');

  request.send(formData);

  console.log(request.response);
}