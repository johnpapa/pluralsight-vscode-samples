(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getMessageCount: getMessageCount,
            getPeople: getPeople
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }

            function success(response) {
                return response.data;
            }

        }
    }
})();
