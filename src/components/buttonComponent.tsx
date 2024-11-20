import { Slot, component$ } from "@builder.io/qwik";
import type { JSXOutput, QRL, Signal } from "@builder.io/qwik";

interface ButtonServicesComponentsProp {
    selected: Signal<string>;
}

export const ButtonComponent = component$(({ selected }: ButtonServicesComponentsProp) => {
    return (
        <div >
            <div><Slot/></div>
            <div class={` ${selected.value == 'back-end' ? 'text-dark-gray-color' : 'text-transparent'}`}>Test</div>
        </div>
    )
})