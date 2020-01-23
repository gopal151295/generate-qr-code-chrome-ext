//get the current URL
function getCurrentTabUrl(callback){
  // query the current tab information
  var queryInfo = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(queryInfo, function(tabs){
    var tab = tabs[0]
    var url = tab.url
    callback(url)
  })
}

// fires when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function(){
  getCurrentTabUrl(function(url){
    //create the qr code object and pass the reference to the dom element to render
    var qrCode = new QRCode(document.getElementById('qrcode'), {
      width: 100,
      height: 100
    })

    // create the qr code
    qrCode.makeCode(url)
  })
})