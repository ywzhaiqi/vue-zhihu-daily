
export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

export { default as GM_request, GM_getDoc } from './GM_request'

export { default as GM_getImageBase64 } from './GM_getImageBase64'
