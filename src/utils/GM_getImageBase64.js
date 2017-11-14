
function GM_getImageBase64(url, callback) {
  GM_xmlhttpRequest({
      method: "GET",
      url: url,
      overrideMimeType: "text/plain; charset=x-user-defined",
      onload: function(xhr) {
          var r = xhr.responseText;
          var data = new Uint8Array(r.length)
          var i = 0
          while (i < r.length) {
              data[i] = r.charCodeAt(i)
              i++
          }

          var blob = new Blob([data], { type: "image/png" })

          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
              var base64data = reader.result;
              callback(base64data);
          }
      }
  });
}

export default GM_getImageBase64
