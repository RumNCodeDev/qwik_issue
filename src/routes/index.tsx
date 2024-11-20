import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MyComponent } from "~/components/mycomponent";

export default component$(() => {
  return (
    <>
      <h1>Test</h1>
      <MyComponent />
      <>Footer</>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
