var pattern = /\[#(.*)\](.*)( -[^-]+)$/;

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

  var split = tab.title.match(pattern);
  var key = split[1];
  var title = split[2].trim();

  var combine = key + ': ' + title + '\n\n' + url;

  doCopy(combine);
});
