chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "showPageAction") {
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
      chrome.pageAction.show(tabs[0].id);
      console.log('sansil etension')
      $('.flex .items-center span').text("your new string");
    })
  }
})

