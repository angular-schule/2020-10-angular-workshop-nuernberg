import { filter } from 'rxjs/operators';
import { BaseRouterStoreState, ROUTER_NAVIGATED, RouterAction, RouterNavigationAction } from '@ngrx/router-store';
import { MonoTypeOperatorFunction } from 'rxjs';

export function isRoute(route: string | string[] | RegExp) {
  return (action: RouterAction<RouterNavigationAction>) => {
    const isRouteAction = action.type === ROUTER_NAVIGATED;
    if (isRouteAction) {
      const routePath = action.payload.event.url;
      if (Array.isArray(route)) {
        return route.indexOf(routePath) > -1;
      } else if (route instanceof RegExp) {
        return route.test(routePath);
      } else {
        return routePath === route;
      }
    }
    return isRouteAction;
  };
}

export function ofRoute<T extends BaseRouterStoreState>(route: string | string[] | RegExp):
  MonoTypeOperatorFunction<RouterNavigationAction<T>> {
  {
    return filter<RouterNavigationAction<any>>(isRoute(route));
  }
}
