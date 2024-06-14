import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { ComponentProps, ComponentType } from "preact";
import componentStrings = require("ojL10n!./resources/nls/oj-greet-strings");
import "css!./oj-greet-styles.css";

type Props = Readonly<{
  message?: string;
}>;

/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 * 
 */
function OjGreetImpl(
  { message = "Hello from  oj-greet" }: Props
) {
  return <h3 style="color:crimson; background-color:beige">{message}</h3>
}

export const OjGreet: ComponentType <
  ExtendGlobalProps < ComponentProps < typeof OjGreetImpl>>
> = registerCustomElement(
    "oj-greet",
  OjGreetImpl
);