import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import WordList from "~/components/widgets/WordList";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";
import { IWord } from "~/utils/types";

export const useWords = routeLoader$(async () => {
  const data: IWord[] = [
    { id: 1, word: "come" },
    { id: 2, word: "here" },
    { id: 3, word: "there" },
  ];

  return { data };
});

export default component$(() => {
  const signal = useWords();
  return (
    <main class="p-5 mx-auto w-full md:flex md:justify-between max-w-7xl md:px-6">
      <WordList title="OPERATIONS - 100 words" words={signal.value.data} />
      {/* <Hero />
      <Features />
      <FAQs />
      <Stats />
      <CallToAction /> */}
    </main>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
