import './style/global.less';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import axios from 'axios';

import rootReducer from './store';
import PageLayout from './layout';
import { GlobalContext } from './context';
import Login from './pages/login';
// import checkLogin from './utils/checkLogin';
import changeTheme from './utils/changeTheme';
import useStorage from './utils/useStorage';
import './mock';

const store = createStore(rootReducer);

function Index() {
  const [lang, setLang] = useStorage('arco-lang', 'zh-CN');
  const [theme, setTheme] = useStorage('arco-theme', 'light');

  const happyNewYear = () => {
    const v =
      '\n                      /\\   /\\' +
      '\n                     /  : /  |' +
      '\n                    :   :`  /' +
      '\n                     \\     .                 ________________' +
      '\n                      \\   :.                |  哈  哈  哈  哈 |' +
      '\n                      .`     `.              ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯' +
      '\n                     :     0   \\         ____                ____' +
      '\n                   ..`          ;       | 哈 |               | 哈 |' +
      '\n               . `           `.¯        | 哈 |       2       | 哈 |' +
      '\n             .`                :        | 哈 |       0       | 哈 |' +
      '\n          .`                   .        | 哈 |       2       | 哈 |' +
      '\n        .`                     :        | 哈 |       3       | 哈 |' +
      '\n       .    Happy New Year     .        | 哈 |               | 哈 |' +
      '\n      .                     .`          | 哈 |               | 哈 |' +
      '\n   .. `                  .`              ¯¯¯                  ¯¯¯' +
      '\n  :  ``             ;.  `、' +
      '\n  `..`._____________::____)';
    console.log(v);
  };

  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  function fetchUserInfo() {
    // store.dispatch({
    //   type: 'update-userInfo',
    //   payload: { userLoading: true }
    // });
    store.dispatch({
      type: 'update-userInfo',
      payload: {
        userInfo: {
          name: '邱谦',
          avatar:
            'https://picbedd.oss-cn-beijing.aliyuncs.com/20221129162221.png',
          email: 'qiuqian@helijia.com',
          job: 'frontend',
          jobName: '前端开发工程师',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'hangzhou',
          locationName: '杭州',
          introduction: '邱谦的introduction',
          personalWebsite: '',
          verified: true,
          phoneNumber: '176******58',
          accountId: 'voeh-91152271',
          registrationTime: '2023-04-28 22:59:45',
          permissions: {
            'menu.dashboard.overview': ['*']
          }
        },
        userLoading: false
      }
    });
  }

  useEffect(() => {
    // if (checkLogin()) {
    fetchUserInfo();
    // } else if (window.location.pathname.replace(/\//g, '') !== 'login') {
    // window.location.pathname = '/login';
    // }
    happyNewYear();
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale()}
        componentConfig={{
          Card: {
            bordered: false
          },
          List: {
            bordered: false
          },
          Table: {
            border: false
          }
        }}
      >
        <Provider store={store}>
          <GlobalContext.Provider value={contextValue}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={PageLayout} />
            </Switch>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
