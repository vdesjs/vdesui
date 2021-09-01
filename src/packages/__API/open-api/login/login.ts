interface LoginObj {
  timeout?: number;
  success?: (obj: SuccessObj) => void;
  fail?: () => void;
}

interface SuccessObj {
  code?: string;
}

export function login(obj: LoginObj) {
  // 请求服务器获取code
}
