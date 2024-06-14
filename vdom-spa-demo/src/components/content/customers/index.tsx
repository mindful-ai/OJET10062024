import { h } from "preact";
import  { OjGreet } from "../../oj-greet/1.0.0/loader";

export function CustomersContent(){
    return(
        <div style="height:50%">
            <OjGreet/>
            <h3>Customers Content Area</h3>
        </div>
    )
}