chrome.runtime.sendMessage({todo:"showPageAction"});
console.log('sansil extension')
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
  if(request.todo=="changeValue"){
    var val= $('.flex .items-center span span').text();
    console.log(val)
    var res = val.split(" ")
    var res2 = res[0].split("BCC$ETL")
    console.log(res2)
    var valor = Number(res2[1])
    console.log(20/valor)
    var text= "Eternal's price by pancho's eyes: $" + (20/valor).toFixed(1)
    //var val= $('.flex .items-center span span').text(text)
    alert(text)
  }
})
