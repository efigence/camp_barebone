app.directive('errors', function(){
  return {
    restrict: 'E',
    scope: {
      errors: '=for'
    },
    templateUrl: '/js/app/common/templates/errors.html'
  }
});
