function getSessionList(success, error) {
  var soql = "SELECT KHAN_771__Session__r.Id, KHAN_771__Session__r.Name FROM KHAN_771__Session_Speaker__c";
  force.query(soql, success, error);
}

function getSessionDetails(sessionId, success, error) {
  var soql = "SELECT KHAN_771__Session__r.Name, " +
  "KHAN_771__Session__r.KHAN_771__Session_Date__c, " +
  "KHAN_771__Speaker__r.KHAN_771__First_Name__c, " +
  "KHAN_771__Speaker__r.KHAN_771__Last_Name__c " +
  "FROM KHAN_771__Session_Speaker__c " +
  "WHERE KHAN_771__Session__r.Id = '" + sessionId + "'";
  force.query(soql, success, error);
}

function showSessionList() {
    getSessionList(
        function (data) {
            var sessions = data.records,
                html = '';
            for (var i=0; i<sessions.length; i++) {
                html += '<li class="table-view-cell"><a href="#sessions/'+ sessions[i].Session__r.Id +'">' + sessions[i].Session__r.Name + '</a></li>';
            }
            html =
                '<div class="page">' +
                '<header class="bar bar-nav">' +
                    '<h1 class="title">Sessions</h1>' +
                '</header>' +
                '<div class="content">' +
                    '<ul class="table-view session-list">' + html + '</ul>' +
                '</div>' +
                '</div>';
            slider.slidePage($(html));
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
    return false;
}

function showSessionDetails(sessionId) {

    getSessionDetails(sessionId,
        function (data) {
            var session = data.records[0],
            html =
                '<div class="page">' +
                '<header class="bar bar-nav">' +
                '<a class="btn btn-link btn-nav pull-left" href="#"><span class="icon icon-left-nav"></span>Back</a>' +
            '<h1 class="title">Sessions</h1>' +
                '</header>' +
                '<div class="content">' +
                    '<div class="card">' +
                        '<ul class="table-view">' +
                            '<li class="table-view-cell">' +
                                '<h4>' + session.KHAN_771__Session__r.Name + '</h4>' +
                                '<p>' + (session.KHAN_771__Session__r.Session_Date__c || 'No time yet')+ '</p>' +
                            '</li>' +
                            '<li class="table-view-cell">Speaker: ' +
                                session.KHAN_771__Speaker__r.KHAN_771__First_Name__c +
                            '</li>' +
                            '<li class="table-view-cell">' +
                                (session.KHAN_771__Session__r.KHAN_771__Description__c || 'No description yet') +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                '</div>';
            slider.slidePage($(html));
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
    return false;
}

var slider = new PageSlider($('body')); // Initialize PageSlider micro-library for nice and hardware-accelerated page transitions
router.addRoute('', showSessionList);
router.addRoute('sessions/:id', showSessionDetails);
