import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";
import WordList from "~/components/widgets/WordList";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";
import { IWord } from "~/utils/types";

export const useWords = routeLoader$(async (requestEv) => {
  const supabaseClient = createServerClient(
    requestEv.env.get("PUBLIC_SUPABASE_URL")!,
    requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    requestEv
  );
  const { data } = await supabaseClient.from("word").select("*");
  console.log(data);
  return { data };
});

export default component$(() => {
  const signal = useWords();
  // console.log(signal.value.data);
  return (
    <>
      {/* <WordList
        title="OPERATIONS - 100 words"
        words={signal.value.data as IWord[]}
      /> */}
      {/* <Hero />
      <Features />
      <FAQs />
      <Stats />
      <CallToAction /> */}
    </>
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
