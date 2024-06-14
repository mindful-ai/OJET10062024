import { h } from "preact";
import { useState, useCallback } from "preact/hooks";

import "ojs/ojinputnumber";
import "ojs/ojformlayout";

export function Content() {

    const [celcius, setCelcius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const updateFahrenheit = (event: any) => {
        setCelcius(event.target.value);
        setFahrenheit(event.target.value * 1.8 + 32);
        console.log(event);
    }

    const updateCelcius = (event:any) => {
        setFahrenheit(event.target.value);
        setCelcius((event.target.value - 32) / 1.8);
        console.log(event);
    }

    return (
        <div class="oj-web-applayout-max-width oj-web-applayout-content"
            style="">

            <h3>Temperature Converter</h3>
            <oj-form-layout max-columns="2" direction="row">
                <oj-input-number labelHint="Celcius"
                                value={celcius}
                                step={1}
                                onvalueChanged={updateFahrenheit}>
                </oj-input-number>
                <oj-input-number labelHint="Fahrenheit"
                                value={fahrenheit}
                                step={1}
                                onvalueChanged={updateCelcius}>
                </oj-input-number>
            </oj-form-layout>
        </div>
    );
};