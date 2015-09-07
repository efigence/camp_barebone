angular.module('hipsterTripApp', [])
  .controller('ContactCtrl', function($http) {
    var contact = this;

    contact.form = {}

    contact.send = function(event){
      event.preventDefault();
      console.log(contact.form);

      $http.post('http://camp.efigence.com/camp/api/contact', contact.form)
      .then(function(response) {
        contact.form = {}
      }, function(response) {
        contact.form.errors = response.data.errors;
      });

    };

  });
