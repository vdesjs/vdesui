import axios, { AxiosRequestConfig } from 'axios';

interface RequestObj {
  url?: string;
  data?: Data;
  header?: object;
  timeout?: number;
  method?: Method;
  dataType?: string;
  responseType?: RequestResponseType;
  enableHttp2?: boolean;
  enableQuic?: boolean;
  enableCache?: boolean;
  enableHttpDNS?: boolean;
  httpDNSServiceId?: boolean;
  success?: (res: SuccessRes) => void;
  fail?: (error) => void;
  complete?: () => void;
}

type Data = string | object | ArrayBuffer;

type Method =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT';

type RequestResponseType = 'text' | 'arraybuffer';
interface SuccessRes {
  data: Data;
  statusCode: number;
  header: object;
  cookies?: string[];
}

interface RequestTask {
  abort: () => void;
  offHeadersReceived: (callback: Function) => void;
  onHeadersReceived: (callback: Function) => void;
}

export function request(obj: RequestObj = {}) {
  obj.method = obj.method ? obj.method : 'GET';
  obj.dataType = obj.dataType ? obj.dataType : 'json';
  obj.responseType = obj.responseType ? obj.responseType : 'text';
  obj.enableHttp2 = obj.enableHttp2 ? obj.enableHttp2 : false;
  obj.enableQuic = obj.enableQuic ? obj.enableQuic : false;
  obj.enableCache = obj.enableCache ? obj.enableCache : false;
  obj.enableHttpDNS = obj.enableHttpDNS ? obj.enableHttpDNS : false;
  // console.log(obj);
  axios.request({
    url: obj.url
  });

  const config: AxiosRequestConfig = {
    url: obj.url,
    headers: obj.header,
    timeout: obj.timeout,
    // @ts-ignore
    method: obj.method
    // @ts-ignore
  };

  if (obj.dataType) {
    // @ts-ignore
    config.responseType = obj.dataType;
  } else if (obj.responseType) {
    // @ts-ignore
    config.responseType = obj.responseType;
  }

  if (obj.method == 'GET' && typeof obj.data == 'object') {
    // // 转换querystring
    // obj.data = Object.keys(obj.data)
    //   .map((key) => {
    //     return `${key}=${obj.data?.[key]}`;
    //   })
    //   .join('&');

    config.params = obj.data;
  } else {
    config.data = obj.data;
  }

  axios
    .request(config)
    .then((response) => {
      const cookies: string[] = response.headers['cookies']
        ? response.headers['cookies'].split(';')
        : [];

      obj.success?.({
        data: response.data,
        statusCode: response.status,
        header: response.headers,
        cookies
      });
    })
    .catch((err) => {
      obj.fail?.(err);
    })
    .finally(() => {
      obj.complete?.();
    });
}
