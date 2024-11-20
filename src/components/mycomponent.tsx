import { component$, Signal, useSignal, useStore } from "@builder.io/qwik";
import { OptionComponent } from "./optionComponent";



export const MyComponent = component$(() => {
    const state = useSignal<string>('back-end');

    return (
        <div>
            <OptionComponent
                onSelectStack$={(stack) => (state.value = stack)}
                selectedStack={state as Signal<string>}
            />
        </div>
    );

});
