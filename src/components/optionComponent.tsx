import { component$, QRL, Signal } from "@builder.io/qwik";
import i from "./icons";
import { ButtonComponent } from "~/components/buttonComponent";

interface OptionComponentProps {
    onSelectStack$: QRL<(stack: any) => void>,
    selectedStack: Signal<string>
}

export const OptionComponent = component$(({ onSelectStack$, selectedStack }: OptionComponentProps) => {
    console.log(selectedStack.value);
    return (
        <div onClick$={() => onSelectStack$('back-end')}>
            <ButtonComponent selected={selectedStack}>
                    <div class={`${selectedStack.value == 'back-end' ? 'bg-red-500' : 'bg-blue-500'} rounded-20`}>
                        <i.Python
                            class={` h-9 md:h-16 xl:h-24 fill-black`}
                        />
                    </div>

            </ButtonComponent>
        </div>
    );
});