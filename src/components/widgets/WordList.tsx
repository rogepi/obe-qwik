import { component$, useStore } from "@builder.io/qwik";
import { IWord } from "~/utils/types";
import WordCard from "../atoms/WordCard";

interface IWordList {
  title: string;
  words: IWord[];
}

export default component$<IWordList>(({ title, words }) => {
  const selectState = useStore({ selectId: 0 });
  return (
    <div>
      <h2 class="text-xl font-semibold">{title}</h2>
      <ul class="my-3 flex items-center gap-3">
        {words.map((item) => (
          <li key={item.id}>
            <WordCard word={item} selectState={selectState} />
          </li>
        ))}
      </ul>
    </div>
  );
});
