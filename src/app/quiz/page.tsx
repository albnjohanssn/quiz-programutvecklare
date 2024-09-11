'use client';
import React, { useState } from 'react';
import { quiz } from '../data';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(0);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <main className='flex justify-center items-center min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      <div className='max-w-[32rem] pb-3 p-4 bg-zinc-50/30 backdrop-blur-md border-[3px] border-b-[6px] border-solid border-zinc-950 rounded-lg dark:bg-zinc-950/30 dark:border-zinc-50'>
        <Header />
        <div>
          {!showResult ? (
            <div className='flex justify-center items-center flex-col gap-y-3'>
              <h3 className='font-sans font-medium text-2xl text-center text-zinc-950 not-italic no-underline normal-case tracking-wide leading-loose align-middle hyphens-none antialiased dark:text-zinc-50'>
                {questions[activeQuestion].question + (activeQuestion + 1)}/
                <span>{questions.length}</span>
              </h3>
              {answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`${
                    selectedAnswerIndex === idx
                      ? 'bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950'
                      : 'hover:bg-zinc-950 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950 dark:hover:border-zinc-950'
                  }  font-sans font-medium text-xl text-center not-italic no-underline normal-case tracking-wide leading-loose align-middle hyphens-none antialiased border-[3px] border-solid border-zinc-950 rounded-lg px-3 shadow-none transition duration-100 ease-out active:shadow-[0_5.5px_0.1px_0px_rgba(0,0,0,0.4)] dark:border-zinc-50 dark:active:shadow-[0_5.5px_0.1px_0px_rgba(255,255,255,0.4)]`}
                >
                  <span>{answer}</span>
                </button>
              ))}
              {checked ? (
                <button
                  type='button'
                  onClick={nextQuestion}
                  className='bg-white border-[3px] border-solid border-zinc-950 rounded-lg px-3 font-sans font-medium text-xl shadow-none text-zinc-950 not-italic no-underline normal-case tracking-normal leading-loose align-middle hyphens-none antialiased transition duration-100 ease-out hover:bg-zinc-950 hover:text-zinc-50 active:shadow-[0_5.5px_0.1px_0px_rgba(0,0,0,0.4)] dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950 dark:hover:border-zinc-950 dark:active:shadow-[0_5.5px_0.1px_0px_rgba(255,255,255,0.4)]'
                >
                  {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                </button>
              ) : (
                <button
                  type='button'
                  onClick={nextQuestion}
                  disabled
                  className='bg-white border-[3px] border-solid border-zinc-950 rounded-lg px-3 font-sans font-medium text-xl shadow-none text-zinc-950 not-italic no-underline normal-case tracking-normal leading-loose align-middle hyphens-none antialiased cursor-not-allowed dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-50'
                >
                  {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                </button>
              )}
            </div>
          ) : (
            <div className=' flex justify-center items-center flex-col'>
              <h3 className='font-sans font-medium text-2xl text-center text-zinc-950 not-italic no-underline normal-case tracking-wide leading-loose align-middle hyphens-none antialiased dark:text-zinc-50'>
                Results
              </h3>
              <p className='font-sans font-medium text-xl text-center text-zinc-950 not-italic no-underline normal-case tracking-normal leading-relaxed align-middle hyphens-none antialiased dark:text-zinc-50'>
                You are{' '}
                <span className='text-green-500 dark:text-green-400'>
                  {(result.score / 50) * 100}%
                </span>{' '}
                a programmer!
              </p>
              <p className='font-sans font-medium text-xl text-center text-zinc-950 not-italic no-underline normal-case tracking-normal leading-relaxed align-middle hyphens-none antialiased dark:text-zinc-50'>
                Total Score:{' '}
                <span className='text-green-500 dark:text-green-400'>
                  {result.score}
                </span>
              </p>
              <p className='font-sans font-medium text-xl text-center text-zinc-950 not-italic no-underline normal-case tracking-normal leading-relaxed align-middle hyphens-none antialiased dark:text-zinc-50'>
                Total Questions:{' '}
                <span className='text-green-500 dark:text-green-400'>
                  {questions.length}
                </span>
              </p>

              <button
                className='mt-3 bg-white border-[3px] border-solid border-zinc-950 rounded-lg px-3 font-sans font-medium text-xl shadow-none text-zinc-950 not-italic no-underline normal-case tracking-normal leading-loose align-middle hyphens-none antialiased transition duration-100 ease-out hover:bg-zinc-950 hover:text-zinc-50 active:shadow-[0_5.5px_0.1px_0px_rgba(0,0,0,0.4)] dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950 dark:hover:border-zinc-950 dark:active:shadow-[0_5.5px_0.1px_0px_rgba(255,255,255,0.4)]'
                onClick={() => window.location.reload()}
              >
                Restart
              </button>
            </div>
          )}
        </div>
        <div className='flex justify-center items-center mt-3'>
          <Footer />
        </div>
      </div>
    </main>
  );
}
