
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
      opt = Object.assign(opt, {
          method: "GET",
          url,
          onload: function (response) {
              resolve(response.responseText)
          },
          onerror: function(response) {
            reject(response)
          }
      });

      GM_xmlhttpRequest(opt);
  });
}

export default GM_request
