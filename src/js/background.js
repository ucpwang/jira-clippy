(function() {

  var url_pattern = /(jira|tickets)*\/browse\//;

  // Called when the url of a tab changes.
  var checkForValidUrl = function(tabId, changeInfo, tab) {
    if (tab.url.match(url_pattern)) {
      chrome.pageAction.show(tabId);
    }
  };

  chrome.tabs.onUpdated.addListener(checkForValidUrl);

})();

