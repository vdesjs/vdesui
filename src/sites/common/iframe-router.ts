/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { Router, useRouter } from "vue-router";


let queue: Function[] = [];
let isIframeReady = false;

function iframeReady(callback: Function) {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

if (window.top === window) {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'iframeReady') {
      isIframeReady = true;
      queue.forEach((callback) => callback());
      queue = [];
    }
  });
} else {
  window.top.postMessage({ type: 'iframeReady' }, '*');
}

function getCurrentDir() {
  //@ts-ignore
  const router = window.vueRouter;
  console.log(router)
  const { path } = router.currentRoute.value;

  return path;
}

export function syncPathToParent() {
  window.top.postMessage(
    {
      type: 'replacePath',
      value: getCurrentDir(),
    },
    '*'
  );
}

export function syncPathToChild() {
  const iframe: HTMLIFrameElement = document.querySelector('iframe') as HTMLIFrameElement;
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow?.postMessage(
        {
          type: 'replacePath',
          value: getCurrentDir(),
        },
        '*'
      );
    });
  }
}

export function listenToSyncPath(router: Router) {
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'replacePath') {
      return;
    }

    const path = event.data?.value || '';
    // should preserve hash for anchor
    if (router.currentRoute.value.path !== path) {
      router.replace(path).catch(() => {});
    }
  });
}
