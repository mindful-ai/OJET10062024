/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import "ojs/ojtoolbar";
import "ojs/ojmenu";
import "ojs/ojbutton";

// ----------------------------------------------- Step 2.1 import the components required

import "ojs/ojnavigationlist";
import { ojNavigationList } from "ojs/ojnavigationlist";
import ArrayDataProvider = require("ojs/ojarraydataprovider");

// ---------------------------------------------------------------------------------

// 2.3 ---------------------------- Update props -----------------------------------

// Remove readonly

type Props = {
  appName: string,
  userLogin: string,
  page: string, // output
  routes: Array<object>, // input
  onPageChanged: (value: string) => void; // output
};

// ---------------------------------------------------------------------------------

// 2.3 ---------------------------- Update props -----------------------------------

type Route = {
  path : string;
  detail: object;
}


// ---------------------------------------------------------------------------------



export function Header(props: Props) { // ------------- Change to props ---------------------
  const mediaQueryRef = useRef<MediaQueryList>(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")!));
  
  const [isSmallWidth, setIsSmallWidth] = useState(mediaQueryRef.current.matches);

  useEffect(() => {
    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
    return (() => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange));
  }, [mediaQueryRef]);

  function handleMediaQueryChange(e: MediaQueryListEvent) {
    setIsSmallWidth(e.matches);
  }

  function getDisplayType() {
    return (isSmallWidth ? "icons" : "all");
  };

  function getEndIconClass() {
    return (isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon");
  }


  // 2.4 ---------------------------------------------------------------------------------

  const routesDP = new ArrayDataProvider(props.routes.slice(1), { keyAttributes: "path"});

  const pageChangedHandler = (event: ojNavigationList.selectionChanged<Route["path"], Route>) => {
    props.onPageChanged(event.detail.value);
    console.log("Page Changed Handler", event.detail.value);
  }

  const renderNavList = (item: ojNavigationList.ItemContext<string, Route>) => {
    return(
      <li id={item.data.path}>
        <a href="#">
          <span class={item.data.detail.iconClass} />
          {item.data.detail.label}
        </a>
      </li>
    )

  }

  // ---------------------------------------------------------------------------------

  return (
    <header role="banner" class="oj-web-applayout-header">
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-middle oj-sm-align-items-baseline">
          <span
            role="img"
            class="oj-icon demo-oracle-icon"
            title="Oracle Logo"
            alt="Oracle Logo"></span>
          <h1
            class="oj-sm-only-hide oj-web-applayout-header-title"
            title="Application Name">
            {props.appName}
          </h1>
        </div>
        <div class="oj-flex-bar-end">
        <oj-toolbar>
          <oj-menu-button id="userMenu" display={getDisplayType()} chroming="borderless">
            <span>{props.userLogin}</span>
            <span slot="endIcon" class={getEndIconClass()}></span>
            <oj-menu id="menu1" slot="menu">
              <oj-option id="pref" value="pref">Preferences</oj-option>
              <oj-option id="help" value="help">Help</oj-option>
              <oj-option id="about" value="about">About</oj-option>
              <oj-option id="out" value="out">Sign Out</oj-option>
            </oj-menu>
          </oj-menu-button>
        </oj-toolbar>
        </div>
      </div>

      { /* ------------------- 2.2 Add the navigation bar -------------------------------------- */  }
      <div id="navigationBar">

        <div>
          <oj-navigation-list
              edge="top"
              data={routesDP}
              selection={props.page}
              onselectionChanged={pageChangedHandler}>
              <template slot="itemTemplate" render={renderNavList}></template>
          </oj-navigation-list>
        </div>

      </div>
      { /* ------------------- -------------------------- -------------------------------------- */  }
    </header>
  );  
}
