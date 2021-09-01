import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
import apiIndex from './components/apiIndex.vue';
import config from '@/vdesui.config';
import Locale from '@/packages/__VUE/locale';
import { nextTick, watch } from 'vue';
import { listenToSyncPath, syncPathToParent } from '../common/iframe-router';
import { replaceRoutePath } from '../common';

const nav = config.locales[Locale.getLang()].navs;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/:lang/api/index',
    name: 'api',
    component: apiIndex
  }
];

const findComponentName = (name: string) => {
  for (const key in nav) {
    const element = nav[key];
    let idx = element.packages?.findIndex(
      (item) => item.name.toLowerCase() === name
    );
    if (idx !== -1) {
      return element.packages[idx].name;
    }
  }
};

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/*/demo.vue');

console.log(modulesPage);

for (const path in modulesPage) {
  let name = (/packages\/__VUE\/(.*)\/demo.vue/.exec(path) as any[])[1];
  Object.keys(config.locales).forEach((lang) => {
    console.log(`/${lang}/${name}`);
    routes.push({
      name: `/${lang}/${name}`,
      path: `/${lang}/${name}`,
      component: modulesPage[path],
      meta: {
        name: findComponentName(name),
        lang
      }
    });
  });
}

const modulesApiPage = import.meta.glob('/src/packages/__API/**/demo.vue');

console.log(modulesApiPage);

for (const path in modulesApiPage) {
  let name = (/packages\/__API\/(.*)\/demo.vue/.exec(path) as any[])[1];
  name = replaceRoutePath(name);
  Object.keys(config.locales).forEach((lang) => {
    console.log(`/${lang}/api/${name}`);

    routes.push({
      name: `/${lang}/api/${name}`,
      path: `/${lang}/api/${name}`,
      component: modulesApiPage[path],
      meta: {
        name: name,
        lang
      }
    });
  });
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// watch(router.currentRoute, () => {
//   nextTick(syncPathToParent)
// })

// listenToSyncPath(router)

// //@ts-ignore
// window.vueRouter = router;

window.addEventListener('message', (event) => {
  console.log(event.data);
  if (event.data.type == 'changeLang') {
    Locale.use(event.data.value);
    console.log('changeLang', event.data.value);
  }
});

export default router;
