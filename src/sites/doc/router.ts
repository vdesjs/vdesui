import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import Resource from './views/Resource.vue';
import Main from './views/Main.vue';
import { isMobile, decamelize, replaceRoutePath } from '../common';
import { getLang, setDefaultLang } from '../common/locales';
import config from '@/vdesui.config';
import { listenToSyncPath, syncPathToChild } from '../common/iframe-router';
import { nextTick } from 'vue';
import apiIndexVue from './views/apiIndex.vue';

const pagesRouter: Array<RouteRecordRaw> = [];

if (isMobile) {
  location.replace('demo.html' + location.hash);
}
const defaultLang = config.site.defaultLang;
const locales = config.locales;
setDefaultLang(defaultLang);

const modulesPage = import.meta.glob('/src/packages/__VUE/*/doc.*.md');
for (const path in modulesPage) {
  const reg = /packages\/__VUE\/(.*)\/doc\.(.*)\.md/;
  const regExecArray: RegExpExecArray = reg.exec(path) as RegExpExecArray;
  const name = regExecArray[1];
  const lang = regExecArray[2];
  pagesRouter.push({
    name: `/${lang}/${name}`,
    path: `/${lang}/${name}`,
    component: modulesPage[path]
  });
}

const modulesDocs = import.meta.glob('/src/docs/*.*.md');
for (const path in modulesDocs) {
  const reg = /docs\/(.*)\.(.*)\.md/;
  const regExecArray: RegExpExecArray = reg.exec(path) as RegExpExecArray;
  const name = regExecArray[1];
  const lang = regExecArray[2];
  pagesRouter.push({
    name: `/${lang}/${name}`,
    path: `/${lang}/${name}`,
    component: modulesDocs[path]
  });
}

const apisRouter: Array<RouteRecordRaw> = [];
const modulesApiDocs = import.meta.glob('/src/packages/__API/**/doc.*.md');
console.log('modulesApiDocs', modulesApiDocs);
for (const path in modulesApiDocs) {
  const reg = /packages\/__API\/(.*)\/doc\.(.*)\.md/;
  const regExecArray: RegExpExecArray = reg.exec(path) as RegExpExecArray;
  const name = replaceRoutePath(regExecArray[1]);

  const lang = regExecArray[2];
  apisRouter.push({
    name: `/${lang}/api/${name}`,
    path: `/${lang}/api/${name}`,
    component: modulesApiDocs[path]
  });
  console.log(`/${lang}/api/${name}`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Main
  },
  {
    path: '/:lang/index',
    name: 'index',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/:lang/api/index',
    name: 'api',
    component: apiIndexVue,
    children: apisRouter
  },

  {
    path: '/resource',
    name: 'resource',
    component: Resource
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// router.afterEach(() => {
//   console.log('afterEach')
//   nextTick(syncPathToChild)
// })

// listenToSyncPath(router)

// //@ts-ignore
// window.vueRouter = router;

export default router;
