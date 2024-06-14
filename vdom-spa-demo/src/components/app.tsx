/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";

import CoreRouter = require("ojs/ojcorerouter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");

type Props = {
  appName?: string;
  userLogin?: string;
};

type Route = {
  path: string;
  detail?: object;
  redirect?:string
}

const routeArray: Array<Route> = [
  { path: "", redirect: "dashboard" },
  {
    path: "dashboard",
    detail: {
      label: "Dashboard",
      iconClass: "oj-navigationlist-item-icon oj-ux-ico-binding-control",
    },
  },
  {
    path: "customers",
    detail: {
      label: "Customers",
      iconClass: "oj-navigationlist-item-icon oj-ux-ico-ungroup",
    },
  },
  {
    path: "incidents",
    detail: {
      label: "Incidents",
      iconClass:
        "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
    },
  },
  {
    path: "about",
    detail: {
      label: "About",
      iconClass:
        "oj-navigationlist-item-icon oj-ux-ico-instructor-training-plus",
    },
  },
];

const router = new CoreRouter<CoreRouter.DetailedRouteConfig>(routeArray, {
  urlAdapter: new UrlParamAdapter(),
});

const pageChangedHandler = (value: string) => {
  console.log(router);
  router.go({path: value})
}

export const App = registerCustomElement(
  "app-root",
  ({ appName = "Single Page Application Demo", userLogin = "purushotham.s@oracle.com" }: Props) => {
    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
      router.currentState.subscribe(routerUpdated);
      router.sync();
    }, []);


    // ------------------------------------------------------------------------------

    const [routePath, setRoutePath] = useState<string>("");

    const routerUpdated = (config: CoreRouter.ActionableState<CoreRouter.DetailedRouteConfig>) => {
      const newpath = config.state?.path;
      setRoutePath(newpath);
    }


    // ------------------------------------------------------------------------------
    
    return (
      <div id="appContainer" class="oj-web-applayout-page">
        <Header
          appName={appName} 
          userLogin={userLogin} 
          onPageChanged={pageChangedHandler}
          page={routePath}
          routes={routeArray}
        />
        <Content page={routePath} />
        <Footer />
      </div>
    );
  }
);
