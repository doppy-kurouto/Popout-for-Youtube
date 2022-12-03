chrome.contextMenus.create({
    id: 'parent',
    title: 'Popout for Youtube'
});

chrome.contextMenus.onClicked.addListener(func1);

  function func1() {

      // Get URL
      chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
      const url = e[0].url;

      // Get Youtube Video ID
      var cutOut = url.substr(32,11);

      // Join URL
      var joinUrl = 'https://www.youtube.com/embed/'+(cutOut);

      // New Window Open
      window.open((joinUrl), null, 'top=0,left=0,width=870,height=519');

      });
  }
