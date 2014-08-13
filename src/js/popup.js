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
  var url = tab.url;

  var title = tab.title.split(' - ');
  title.pop();
  title = title.join(' - ');

  var combine = title + '\n\n' + url;

  doCopy(combine);
});
