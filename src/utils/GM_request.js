
/**
 * GM_xmlhttpRequest Promise 版
 *
 * @export
 * @param {string} url
 * @param {object} [opt={}]
 * @returns {Promise<string>}
 */
function GM_request(url, opt = {}) {
  return new Promise((resolve, reject) => {
      opt = Object.assign({
          method: "GET",
          url,
          onload: function (response) {
              resolve(response.responseText)
          },
          onerror: function(response) {
            reject(response)
          }
      }, opt);

      GM_xmlhttpRequest(opt);
  });
}

export function GM_getDoc(url) {
  return GM_request(url).then(text => {
    return new DOMParser().parseFromString(text, 'text/html')
  })
}

export default GM_request
