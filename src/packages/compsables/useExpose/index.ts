import { extend } from "@/packages/utils/base";
import { getCurrentInstance } from "vue";



export function useExpose<T = Record<string, any>>(apis: T) {
    const instance = getCurrentInstance();
    if (instance) {
      extend(instance.proxy, apis);
    }
  }