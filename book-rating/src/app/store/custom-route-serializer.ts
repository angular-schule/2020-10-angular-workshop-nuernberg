import { Params, RouterStateSnapshot } from '@angular/router';
import { BaseRouterStoreState, RouterStateSerializer } from '@ngrx/router-store';


export interface ExtendedRouterState extends BaseRouterStoreState {
  url: string;
  params: Params;
  // queryParams: Params;
  data: any;
}

export class CustomSerializer implements RouterStateSerializer<ExtendedRouterState> {
  serialize(routerState: RouterStateSnapshot): ExtendedRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      // root: { queryParams },
    } = routerState;
    const {params, data} = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {url, params, data};
  }
}
