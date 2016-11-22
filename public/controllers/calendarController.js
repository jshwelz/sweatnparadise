

var app= angular.module('scotchApp');
  app.controller('calendarController', ['$scope','$http', function ($scope , $http) {
        console.log("Hello World from calendear controller");

        $http.get('/calendar').success(function(response){
          console.log("I get the data I requested");


          $scope.contactlist = response ;
          console.log($scope.contactlist );
          $scope.initCalender();
    		});


        $scope.initCalender = function(){
              console.log("potato calendar " );
              var dateObj = new Date();
              var month = dateObj.getUTCMonth() + 1; //months from 1-12
              var day = dateObj.getUTCDate();
              var year = dateObj.getUTCFullYear();
              newdate = year + "-" + month ;
              var BookDates = [];
              var events = [];




              var arr = new Array();
              var x = 0;
              angular.forEach($scope.contactlist, function(value, key) {
                   var item = value;

                   events.push({
                        "Date" : item.Date
                        //"Email"  : item.email
                    });
                    x++;
              });
              //events = events;
              console.log( events[0]);
              var jso = JSON.stringify(events);
              var obj = jQuery.parseJSON(jso );
              //alert( obj.name === "John" );

              /*
              var events = {
                "2016-02-21": {"number": 5, "url": "http://www.facebook.com"},
                "2016-04-26": {"number": 1, "url": "http://w3widgets.com"},
                "2013-05-03":{"number": 1},
                "2013-06-12": {}}*/

              var events = {  }
              $scope.contactlist.forEach((item) => {
                  events[item.Date] = {
                  number: 5,
                  url: 'yolo potato swag.com'
                }
              })


              console.log( events);
              $scope.$calendar = $("#calendar").responsiveCalendar({
                time: newdate,
                events
               });

        }









  }]);
