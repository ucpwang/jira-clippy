var pattern = /\[#(.*)\](.*)( -[^-]+)$/;

function doCopy(data) {
  var obj = document.getElementById('copy-clip');
  obj.style.display = 'block';
  obj.value = data;
  obj.focus();
  obj.select();
  document.execCommand('copy');
  obj.style.display = 'none';
}


var bkg = chrome.extension.getBackgroundPage();
chrome.tabs.query({
  'active': true
}, function(tabs) {
  var tab = tabs[0];
  console.log(33, bkg);
  console.log(tab.title);

  var url = tab.url;
  var split = tab.title.match(pattern);
  var key = split[1];
  var title = split[2].trim();

  var combine = key + ': ' + title + '\n' + url;

  doCopy(combine);
});
