import { component$ } from "@builder.io/qwik";
import type { JSXOutput, QRL, Signal } from "@builder.io/qwik";

interface ButtonServicesComponentsProp {
    icon: JSXOutput;
    selected: Signal<string>;
}

export const ButtonComponent = component$(({ icon, selected }: ButtonServicesComponentsProp) => {
    return (
        <div >
            <div>{icon}</div>
            <div class={` ${selected.value == 'back-end' ? 'text-dark-gray-color' : 'text-transparent'}`}>Test</div>
        </div>
    )
})