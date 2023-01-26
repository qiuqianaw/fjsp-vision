import auth, { AuthParams } from '@/utils/authentication';
import { useEffect, useMemo, useState } from 'react';

export type IRoute = AuthParams & {
  name: string;
  key: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
  disabled?: boolean;
};

export const routes: IRoute[] = [
  {
    name: 'menu.dashboard', // 仪表盘
    key: 'dashboard',
    children: [
      // {
      //   name: 'menu.dashboard.workplace',
      //   key: 'dashboard/workplace'
      // },
      {
        name: 'menu.dashboard.overview', // 概况总览
        key: 'dashboard/overview'
      }
    ]
  },
  {
    name: 'menu.scheduledReception', // 车间计划接收
    key: 'scheduledReception',
    children: [
      {
        name: 'menu.scheduledReception.newOrder', // 新订单
        key: 'scheduledReception/newOrder'
      },
      {
        name: 'menu.scheduledReception.acceptedOrder', // 已接收
        key: 'scheduledReception/acceptedOrder'
      }
    ]
  },
  {
    name: 'menu.algorithmConfig', // 算法调度配置
    key: 'algorithmConfig',
    children: [
      {
        name: 'menu.algorithmConfig.schedulingConfig', // 调度配置
        key: 'algorithmConfig/schedulingConfig'
      }
    ]
  },
  {
    name: 'menu.jobScheduling', // 工序作业排产
    key: 'jobScheduling',
    children: [
      {
        name: 'menu.jobScheduling.planningSimulation', // 计划仿真
        key: 'jobScheduling/planningSimulation',
        disabled: true
      },
      {
        name: 'menu.jobScheduling.schedulingResult', // 调度结果
        key: 'jobScheduling/schedulingResult'
      }
    ]
  },
  {
    name: 'menu.realTimeProductionTracking', // 实时生产跟踪
    key: 'realTimeProductionTracking',
    children: [
      {
        name: 'menu.realTimeProductionTracking.productionTracking', // 生产跟踪
        key: 'realTimeProductionTracking/productionTracking'
      },
      {
        name: 'menu.realTimeProductionTracking.eventStatistic', // 事件统计
        key: 'realTimeProductionTracking/eventStatistic',
        disabled: true
      }
    ]
  },
  {
    name: 'menu.resultAdjust', // 排产结果调整
    key: 'resultAdjust',
    children: [
      {
        name: 'menu.resultAdjust.fineAdjustment', // 微调
        key: 'resultAdjust/fineAdjustment',
        disabled: true
      },
      {
        name: 'menu.resultAdjust.reschedule', // 重调度
        key: 'resultAdjust/reschedule'
      }
    ]
  },
  {
    name: 'menu.statisticalAnalysis', // 统计分析
    key: 'statisticalAnalysis',
    disabled: true
  }
];

export const getName = (path: string, routes) => {
  return routes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    } else if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};

const useRoute = (userPermission): [IRoute[], string] => {
  const filterRoute = (routes: IRoute[], arr = []): IRoute[] => {
    if (!routes.length) {
      return [];
    }
    for (const route of routes) {
      const { requiredPermissions, oneOfPerm } = route;
      let visible = true;
      if (requiredPermissions) {
        visible = auth({ requiredPermissions, oneOfPerm }, userPermission);
      }

      if (!visible) {
        continue;
      }
      if (route.children && route.children.length) {
        const newRoute = { ...route, children: [] };
        filterRoute(route.children, newRoute.children);
        if (newRoute.children.length) {
          arr.push(newRoute);
        }
      } else {
        arr.push({ ...route });
      }
    }

    return arr;
  };

  const [permissionRoute, setPermissionRoute] = useState(routes);

  useEffect(() => {
    const newRoutes = filterRoute(routes);
    setPermissionRoute(newRoutes);
  }, [JSON.stringify(userPermission)]);

  const defaultRoute = useMemo(() => {
    const first = permissionRoute[0];
    if (first) {
      const firstRoute = first?.children?.[0]?.key || first.key;
      return firstRoute;
    }
    return '';
  }, [permissionRoute]);

  return [permissionRoute, defaultRoute];
};

export default useRoute;
