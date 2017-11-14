
function GM_getImageBase64(url, callback) {
  GM_xmlhttpRequest({
    method: "GET",
    url,
    responseType: 'blob',
    onload: function (res) {
      var blob = res.response

      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64data = reader.result;
        callback(base64data);
      }
    }
  });
}

export default GM_getImageBase64
