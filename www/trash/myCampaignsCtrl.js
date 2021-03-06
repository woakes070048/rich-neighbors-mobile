angular.module('app').controller('myCampaignsCtrl', function($scope, $state, Campaign, AuthService) {

	$scope.campaigns = [];
	$scope.loaded = false;

	$scope.getCampaigns = function(id){
    Campaign.getCampaigns(id)
    	.then(function(data){
	      //console.log(data);
	      $scope.campaigns = data;
	      $scope.loaded = true;
	      $scope.$broadcast('scroll.refreshComplete');
	    });
  };

  $scope.viewCampaign = function(campaign){
  	//console.log(campaign._id);
    Campaign.selectedCampaign = campaign;
  	$state.go('tabsController.myCampaignProfile', {id: campaign._id} );
  };

  $scope.getCampaigns('me');

});