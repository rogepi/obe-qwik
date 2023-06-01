import { component$ } from "@builder.io/qwik";
import { IWord } from "~/utils/types";

interface IWordCard {
  word: IWord;
  isOpen: boolean;
}

export default component$<IWordCard>(({ word }) => {
  return <div class=" bg-gray-600 visited:bg-slate-400">{word.word}</div>;
});
