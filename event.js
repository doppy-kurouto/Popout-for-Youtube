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

/*
width+16, height+39　[don't forget reload]
1280, 720 -> 1296, 759
854, 480 -> 870, 519
640, 360 -> 656, 399
426, 240 -> 442, 279

auto play
      var joinUrl = 'https://www.youtube.com/embed/'+(cutOut)+'?autoplay=1';

play list
      var cutOut = url.substr(49,34);
      var joinUrl = 'https://www.youtube.com/embed/?list='+(cutOut);

Chat Popout
      var joinChatUrl = 'https://www.youtube.com/live_chat?v='+(cutOut);
      window.open((joinChatUrl), null, 'top=300,left=500,width=600,height=800');

thumbnail
      var joinChatUrl = 'http://img.youtube.com/vi/'+(cutOut)+'/maxresdefault.jpg';
      window.open((joinChatUrl), null, 'top=300,left=500,width=1296,height=759');

xvideos
      var cutOut = url.substr(29,37);
      var joinUrl = 'https://www.xvideos.com/embedframe/'+(cutOut);
*/
