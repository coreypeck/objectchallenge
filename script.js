var locations = [];
function State(state, revenue, locationCount){
  this.stateState=state;
  this.stateRevenue=revenue;
  this.stateLocationCount=locationCount;
  this.stateaverageRevenue = function(revenue, locationCount){
    console.log(revenue/locationCount);
  }
}
var ilConst= new State("IL", 5000, 12);
var mnConst= new State("MN", 300, 3);
var nvConst= new State("NV", 25000, 1);
locations.push(ilConst);
locations.push(mnConst);
locations.push(nvConst);
console.log(locations);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
