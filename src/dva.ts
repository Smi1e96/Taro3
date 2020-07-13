/*
 * @Author: IIoT·Zmy
 * @Date: 2020-03-02 15:39:53
 * @LastEditors: IIoT.Smi1e
 * @LastEditTime: 2020-07-13 09:19:39
 * @Description: 
 */


// import Taro from '@tarojs/taro';
import { create } from 'dva-core';
// import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let registered;
let dispatch;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!registered) opt.models.forEach(model => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};