function doCopy(data) {
  var obj = document.getElementById('copy-clip');
  obj.style.display = '';
  obj.value = data;
  obj.focus();
  obj.select();
  document.execCommand('copy');
  obj.style.display = 'none';
}

chrome.tabs.query({
  active: true,
  windowId: chrome.windows.WINDOW_ID_CURRENT
}, function(tabs) {
  var tab = tabs[0];

  // Remove the querystring
  var url = tab.url.split('?')[0];

  // Remove the project name at the end of the title
  var title = tab.title.split(' - ');
  title.pop();
  title = title.join(' - ');

  // Format: XXX-999 - Description
  var split = title.match(/^\[(.+)\](.+)/);
  title = split[1] + ' -' + split[2];

  var combine = `${title}(${url})`;

  doCopy(combine);
});
