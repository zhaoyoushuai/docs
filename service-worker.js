/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c09c30eb6e4ce3fb17b097c60c5d1b1a"
  },
  {
    "url": "assets/css/0.styles.1d5f8513.css",
    "revision": "c265540457d93b9169094ac061422c82"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "a80f27db517b7b81d96c4fa17d22477d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/taro/taro1.png",
    "revision": "501016e1a3d4a8da46b27be2232efdb9"
  },
  {
    "url": "assets/img/taro/taro2.png",
    "revision": "e79c9c6aff07c1994f098e969d481821"
  },
  {
    "url": "assets/img/taro/taro3.png",
    "revision": "ba407d760c4a98adc520b2bd42bd8c83"
  },
  {
    "url": "assets/img/taro/taro4.png",
    "revision": "1abddb60b660b78dfc1dde9e40ba7176"
  },
  {
    "url": "assets/img/taro/taro5.png",
    "revision": "4231946ce535193eff8b33b0e70dd4b1"
  },
  {
    "url": "assets/img/taro/taro6.png",
    "revision": "9c385253c22f9c03edead33bdb861631"
  },
  {
    "url": "assets/img/taro/taro7.png",
    "revision": "a48bd85b0f19e1f7bfeac1a4bf113638"
  },
  {
    "url": "assets/img/wx/subpackage1.png",
    "revision": "a9f404ca708eba13931fd586e99dcd32"
  },
  {
    "url": "assets/img/wx/subpackage2.png",
    "revision": "78c1e6b9d70bc51e663c15868f9aaf2d"
  },
  {
    "url": "assets/img/wx/subpackage3.png",
    "revision": "9f125953274992ffde2ef95527cf518e"
  },
  {
    "url": "assets/img/wx/subpackage4.png",
    "revision": "4a30a952a217bf3ad61e9b604ffc83b8"
  },
  {
    "url": "assets/img/wx/subpackage5.png",
    "revision": "17c794122bf411eab56805e9dc97eeb8"
  },
  {
    "url": "assets/img/wx/subpackage6.png",
    "revision": "29ebea621ed6204685cd1a65dae93d35"
  },
  {
    "url": "assets/img/wx/subpackage7.png",
    "revision": "111bf5543e6bdfbcd3f0a320045edfea"
  },
  {
    "url": "assets/js/10.4bdca609.js",
    "revision": "d27d58ccab610a325789b48fd62f02b0"
  },
  {
    "url": "assets/js/11.72579f8a.js",
    "revision": "8c230ac195ff29a987e3be2ea3d32aa4"
  },
  {
    "url": "assets/js/12.c1ab9b34.js",
    "revision": "7bb8b11ec42bb2adce31dbb4c8fbc0b5"
  },
  {
    "url": "assets/js/13.a3b9f4df.js",
    "revision": "d42ee6b822cf16156471aa4139a2f68e"
  },
  {
    "url": "assets/js/14.fd7e2f5d.js",
    "revision": "ce54510c4183984ea8e60a737abb36d3"
  },
  {
    "url": "assets/js/15.c8021483.js",
    "revision": "dd0fcd48d2a1cc59dcb56f7cbd939410"
  },
  {
    "url": "assets/js/16.ee00f998.js",
    "revision": "715bd63f6cb770d97f3018f850b10239"
  },
  {
    "url": "assets/js/17.6b4d4a84.js",
    "revision": "4e28cc974e09e95e8eb5472b08d67493"
  },
  {
    "url": "assets/js/18.ec42ef5b.js",
    "revision": "926fc379fdee0bb728e0a376fe6909a0"
  },
  {
    "url": "assets/js/19.2046a7f6.js",
    "revision": "d5593e8aaae75acc3a21c485a3e7a1fc"
  },
  {
    "url": "assets/js/2.2fde2cc4.js",
    "revision": "edfbd4f6e2185d18a2c1339e6aa56745"
  },
  {
    "url": "assets/js/20.db4aa17d.js",
    "revision": "68e6147d4a0adccea4411effd4d34d26"
  },
  {
    "url": "assets/js/21.75ae02e7.js",
    "revision": "535def723755a639b83939465b424773"
  },
  {
    "url": "assets/js/3.04d0cbfa.js",
    "revision": "a2c8e7fee54b4b548e2e8a4e488ce4c4"
  },
  {
    "url": "assets/js/4.ec60088e.js",
    "revision": "fff25819600535df79ca1f58fd5c34fa"
  },
  {
    "url": "assets/js/5.daec7fcb.js",
    "revision": "ce84571d4b296895b2768339f06b95ef"
  },
  {
    "url": "assets/js/6.80358dad.js",
    "revision": "380850467a786668a2a5e4bc28b59551"
  },
  {
    "url": "assets/js/7.de1fff53.js",
    "revision": "bb33e23636d2cf4df886319072f5e3af"
  },
  {
    "url": "assets/js/8.de3f400a.js",
    "revision": "64859752b5cf8da1717910f275fa9a93"
  },
  {
    "url": "assets/js/9.c24ff2cc.js",
    "revision": "9518d4b24e79b49a07e4f0759056f412"
  },
  {
    "url": "assets/js/app.b2014ff2.js",
    "revision": "fa0a6c0f88415901a1850cd9e071059a"
  },
  {
    "url": "bug/H5.html",
    "revision": "d238a348cb92e60a9fcf8cb15402f13e"
  },
  {
    "url": "bug/index.html",
    "revision": "a9f62cab21af2c47fe3ed48ca2b6bc7d"
  },
  {
    "url": "git/index.html",
    "revision": "ba1fdc8f6c0e786d30d06efb5cc9121c"
  },
  {
    "url": "index.html",
    "revision": "3fc1a24a5f63f99b2190611e69e1d888"
  },
  {
    "url": "node/index.html",
    "revision": "56460a5822275f7e1b866e4168a3e2ab"
  },
  {
    "url": "react/index.html",
    "revision": "d5daf6a44d05aaebb621739fcf24f420"
  },
  {
    "url": "taro/common.html",
    "revision": "6fa8ebd350785c24004c9a004ab60ec0"
  },
  {
    "url": "taro/index.html",
    "revision": "c75b4e9935bb777491918e6e6dd982e7"
  },
  {
    "url": "utils/regexp.html",
    "revision": "4c04087e0ed22329d0f1bcfbfacf624d"
  },
  {
    "url": "utils/skill.html",
    "revision": "1ff77aa80cc3bcf86ad3b46791a6bc5d"
  },
  {
    "url": "vue/index.html",
    "revision": "83ffcdd5ae99ca8ba2b2a77d35ff623c"
  },
  {
    "url": "wx/index.html",
    "revision": "25a1a97608381f8fa6363c92f1cbbc81"
  },
  {
    "url": "wx/subpackage.html",
    "revision": "65e587db7adfef3f41753c230f50ba7a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
