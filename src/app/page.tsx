'use client';
import { PageRoute } from '@/@types/route.type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const route = useRouter();
  const handleWordClick = () => {
    route.push(PageRoute.WORD);
  };
  const handleSentenceClick = () => {
    route.push(PageRoute.SENTENCE);
  };
  const handleWrongClick = () => {
    route.push(PageRoute.WRONG);
  };
  const handleTestClick = () => {
    route.push(PageRoute.TEST);
  };
  return (
    <>
      <div className="pt-20 flex justify-center items-center flex-col gap-20">
        <div className="flex flex-col gap-4">
          <div className="text-2xl">KT 랜선야학 멘토링 </div>
          <div className="text-lg">능률VOCA 고교필수 2000</div>
        </div>
        <div className="flex flex-col gap-6">
          <button
            onClick={handleWordClick}
            type="button"
            className="border-1 border-blue-700 border p-2 w-40 rounded-xl"
          >
            영어 단어/한글 뜻
          </button>
          <button
            onClick={handleSentenceClick}
            type="button"
            className="border-1 border-blue-700 border p-2 w-40 rounded-xl"
          >
            문장
          </button>
          <button
            onClick={handleWrongClick}
            type="button"
            className="border-1 border-blue-700 border p-2 w-40 rounded-xl"
          >
            오답노트
          </button>
          <button
            onClick={handleTestClick}
            type="button"
            className="border-1 border-blue-700 border p-2 w-40 rounded-xl"
          >
            TEST
          </button>
        </div>
      </div>
    </>
  );
}
