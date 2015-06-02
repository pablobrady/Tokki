// Socket helper functions
angular.module('tokki')
  .factory('AnalysisServices', function($http) {

  // var sessions = {
  //   sessionId:{
  //     id: '',
  //     url: '#/api/'
  //   }
  // };

  // Sends a request of all sessions from a host
  // Receives the session IDs, start times
  // Expected from hostHistoryView
  var sessionHistory = function(cb) {
    return $http({
      method: 'GET',
      //Call to Server, who has DB methods
      url: '/host/old'
    })
    .then(function(resp) {
      // Historical data pulled from server via db
      cb(resp.data);
    });
  };

  //Sends a request of a specific session from a host
  //Recieves detailed vote average vs time data
  //Expected from hostAnalysisView
  var sessionAnalysis = function(cb){
    return $http({
      method: 'GET',
      url: session.url + session.hostId + '/' + session.sessionId
    })
    .then(function(resp){
      session.data = resp.data;
    });
  };

  var deleteSession = function(sessionId,cb){
    return $http({
      method: 'DELETE',
      url: '/deletesession/' + sessionId
    })
    .then(function(resp) {
      cb();
    });
  };

  return {
    sessionHistory: sessionHistory,
    sessionAnalysis: sessionAnalysis,
    deleteSession: deleteSession
  };

});
