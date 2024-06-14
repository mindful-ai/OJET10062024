import { h } from "preact";
import { ChartContent } from "./chartComponent/index";

export function DashboardContent(){
    return(
        <div style="height:50%">
            <h3>Dashboard Content Area</h3>
            <ChartContent />
        </div>
    )
}