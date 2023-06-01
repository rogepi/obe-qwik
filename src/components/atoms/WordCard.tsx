import { $, component$ } from "@builder.io/qwik";
import { IWord } from "~/utils/types";

interface IWordCard {
  word: IWord;
  selectState: { selectId: number };
}

export default component$<IWordCard>(({ word, selectState }) => {
  const handleClick = $(() => {
    selectState.selectId === word.id
      ? (selectState.selectId = 0)
      : (selectState.selectId = word.id);
  });
  return (
    <div class="static md:relative">
      <div
        onClick$={handleClick}
        class={`min-w-[75px] p-1 flex justify-center items-center
         font-medium  hover:bg-gray-400 
          dark:hover:bg-slate-700 cursor-pointer rounded-md
          ${
            selectState.selectId === word.id
              ? `bg-gray-400 dark:bg-gray-700`
              : `bg-gray-300 dark:bg-gray-600`
          }`}
      >
        {word.word}
      </div>
      {selectState.selectId === word.id && (
        <div class="absolute top-1/3 md:top-full left-1/2 transform -translate-x-1/2 mt-2 p-2  rounded-md z-50 bg-gray-400 dark:bg-gray-700">
          <div>{word.word}</div>
          <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      )}
    </div>
  );
});
