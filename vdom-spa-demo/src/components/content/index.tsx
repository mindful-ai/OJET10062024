import { h } from "preact";
import { createElement, render } from 'preact';

import { IncidentsContent } from "./incidents/index";
import { DashboardContent } from "./dashboard/index";
import { AboutContent } from "./about/index";
import { CustomersContent } from "./customers/index";


type Props = {
    page: string // input
};

export function Content(props: Props) {

    let pageContent = (page: string) => {

        switch(page){
            case "dashboard"  : return <DashboardContent />;
            case "incidents"  : return <IncidentsContent />;
            case "customers"  : return <CustomersContent />;
            case "about"      : return <AboutContent />;
         }

    }

    return (
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
            {pageContent(props.page as string)}
        </div>
    );
};