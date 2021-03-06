declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}


declare namespace JSX {
  interface IntrinsicElements {
    'van-button': any;
    'van-switch': any;
    'van-skeleton': any;
    'van-tabbar': any;
    'van-tabbar-item': any;
    'van-checkbox': any;
    'van-cell': any
  }
}
