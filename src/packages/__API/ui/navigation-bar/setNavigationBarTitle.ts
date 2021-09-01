import { getMobileGlobal } from '../../common/constant';

interface NavigationBarTitleType {
  title?: string;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

export function setNavigationBarTitle(obj: NavigationBarTitleType) {
  new Promise(() => {
    getMobileGlobal().title = obj.title;
  })
    .then(() => {
      obj.success?.();
    })
    .catch(() => {
      obj.fail?.();
    })
    .finally(() => {
      obj.complete?.();
    });
}
