import { component$ } from "@builder.io/qwik";
import { IWord } from "~/utils/types";

interface IWordList {
  title: string;
  words: IWord[];
}

export default component$<IWordList>(({ title, words }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {words.map((item) => (
          <li key={item.id}>{item.word}</li>
        ))}
      </ul>
    </div>
  );
});
