/* directive module */
(function() {
	var app = angular.module("store-products",[]);
	app.directive('productTitle', function(){
    return {
      //restrict: 'A',
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });
  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });
  app.directive('productSpec', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-spec.html'
    };
  });
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function () {
        this.tab = 1;
        this.setTab = function(newValue) {
          this.tab = newValue;
        };
        this.isSet = function(newValue) {
          return this.tab === newValue;
        };
      },
      controllerAs: 'panels'
    };
  });
  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function (){
        this.current = 0;
        this.setCurrent = function(newValue) {
          this.current = newValue || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });
})();