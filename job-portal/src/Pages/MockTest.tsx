import { IconAlertCircle, IconBook, IconChevronLeft, IconChevronRight, IconCircleCheck, IconClock } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

interface Question {
  id: number;
  type: 'mcq' | 'text';
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export const MockTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds

  const questions: Question[] = [
    {
      id: 1,
      type: 'mcq',
      question: 'Which of the following is not a Java feature?',
      options: ['Object-oriented', 'Portable', 'Use of pointers', 'Platform-independent'],
      answer: 'Use of pointers',
      explanation: 'Java does not support pointers to avoid direct memory access and ensure security.'
    },
    {
      id: 2,
      type: 'mcq',
      question: 'Which method is used to start a thread execution?',
      options: ['start()', 'run()', 'execute()', 'begin()'],
      answer: 'start()',
      explanation: 'The start() method is used to begin thread execution in Java.'
    },
    {
      id: 3,
      type: 'mcq',
      question: 'What is the default value of a local variable in Java?',
      options: ['0', 'null', 'Undefined', 'Depends on the type'],
      answer: 'Undefined',
      explanation: 'Local variables must be initialized before use; they do not have default values.'
    },
    {
      id: 4,
      type: 'mcq',
      question: 'Which of the following is used to create an object in Java?',
      options: ['new keyword', 'malloc()', 'create()', 'alloc()'],
      answer: 'new keyword',
      explanation: 'The new keyword is used to create and initialize objects in Java.'
    },
    {
      id: 5,
      type: 'mcq',
      question: 'Which of these is not a valid keyword in Java?',
      options: ['super', 'extends', 'main', 'synchronized'],
      answer: 'main',
      explanation: 'main is not a keyword in Java; it is a method name.'
    },
    {
      id: 6,
      type: 'mcq',
      question: 'Which data structure is used to implement a Map in Java?',
      options: ['List', 'Set', 'Dictionary', 'Tree'],
      answer: 'Dictionary',
      explanation: 'Map interface implementations use dictionary-like data structures.'
    },
    {
      id: 7,
      type: 'mcq',
      question: 'What does the final keyword mean when applied to a variable?',
      options: [
        'It cannot be changed once initialized.',
        'It can only be changed by subclasses.',
        'It can be changed only inside the same class.',
        'None of the above.'
      ],
      answer: 'It cannot be changed once initialized.',
      explanation: 'final variables become constants once initialized.'
    },
    {
      id: 8,
      type: 'mcq',
      question: 'Which package contains the ArrayList class?',
      options: ['java.util', 'java.io', 'java.lang', 'java.net'],
      answer: 'java.util',
      explanation: 'ArrayList is part of the Java Collections Framework in java.util package.'
    },
    {
      id: 9,
      type: 'mcq',
      question: 'Which of these exceptions is thrown if an array is accessed with an illegal index?',
      options: [
        'NullPointerException',
        'ArrayIndexOutOfBoundsException',
        'IllegalAccessException',
        'IndexOutOfBoundsException'
      ],
      answer: 'ArrayIndexOutOfBoundsException',
      explanation: 'This exception is thrown when trying to access an array index that is out of bounds.'
    },
    {
      id: 10,
      type: 'mcq',
      question: 'Which of these is the correct way to declare a generic class in Java?',
      options: ['class MyClass<T> { }', 'class MyClass<> { }', 'class MyClass { T }', 'class <T>MyClass { }'],
      answer: 'class MyClass<T> { }',
      explanation: 'Generic type parameter T is declared within angle brackets after the class name.'
    },
    {
      id: 11,
      type: 'text',
      question: 'What is the difference between == and equals() in Java?',
      answer: '== checks reference equality (whether two object references point to the same memory location). equals() checks content equality (whether two objects have the same value, depending on how the method is overridden).'
    },
    {
      id: 12,
      type: 'text',
      question: 'Explain the concept of the Java Virtual Machine (JVM).',
      answer: 'JVM is a runtime environment for executing Java bytecode. It converts bytecode into machine-specific code and provides features like garbage collection, security, and platform independence.'
    },
    {
      id: 13,
      type: 'text',
      question: 'What is the purpose of garbage collection in Java?',
      answer: 'Garbage collection in Java is the process of automatically reclaiming memory by removing objects no longer referenced by the application, thus preventing memory leaks.'
    },
    {
      id: 14,
      type: 'text',
      question: 'What is the difference between an abstract class and an interface?',
      answer: 'Abstract class: Can have both abstract and concrete methods; supports constructors and fields. Interface: Contains only abstract methods (before Java 8); supports default and static methods from Java 8 onwards.'
    },
    {
      id: 15,
      type: 'text',
      question: 'What are the access modifiers in Java? Explain each.',
      answer: 'public: Accessible from anywhere. protected: Accessible within the same package and by subclasses. default (no modifier): Accessible only within the same package. private: Accessible only within the same class.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (questions[Number(questionIndex)].answer === answer) {
        correct++;
      }
    });
    return correct;
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <IconBook className="text-[#FFB800]" size={32} />
            <h1 className="text-2xl font-bold">Java Programming Mock Test</h1>
          </div>
          <div className="flex items-center gap-2 text-[#FFB800]">
            <IconClock size={20} />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#2A2A2A] h-2 rounded-full mb-8">
          <div 
            className="bg-[#FFB800] h-full rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {showResults ? (
          // Results Section
          <div className="bg-[#2A2A2A] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Test Results</h2>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[#FFB800] mb-4">
                {calculateScore()}/{questions.length}
              </div>
              <p className="text-gray-400">
                You answered {calculateScore()} questions correctly out of {questions.length}
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((q, index) => (
                <div key={q.id} className="border-b border-gray-700 pb-6">
                  <div className="flex items-start gap-4">
                    {answers[index] === q.answer ? (
                      <IconCircleCheck className="text-green-500 mt-1" size={20} />
                    ) : (
                      <IconAlertCircle className="text-red-500 mt-1" size={20} />
                    )}
                    <div>
                      <p className="font-medium mb-2">{q.question}</p>
                      <p className="text-gray-400 mb-2">Your answer: {answers[index] || 'Not answered'}</p>
                      <p className="text-[#FFB800]">Correct answer: {q.answer}</p>
                      {q.explanation && (
                        <p className="text-gray-400 mt-2">Explanation: {q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Question Section
          <div className="bg-[#2A2A2A] rounded-lg p-8">
            <div className="mb-8">
              <span className="text-[#FFB800] mb-2 block">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <h2 className="text-xl font-medium">{currentQ.question}</h2>
            </div>

            {currentQ.type === 'mcq' ? (
              <div className="space-y-4">
                {currentQ.options?.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      answers[currentQuestion] === option
                        ? 'bg-[#FFB800] text-white'
                        : 'bg-[#1E1E1E] hover:bg-[#333333]'
                    }`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                className="w-full h-32 bg-[#1E1E1E] border border-gray-700 rounded-lg p-4 text-white resize-none"
                placeholder="Type your answer here..."
                value={answers[currentQuestion] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
              />
            )}

            <div className="flex justify-between mt-8">
              <button
                className="flex items-center gap-2 text-[#FFB800]"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <IconChevronLeft size={20} />
                Previous
              </button>
              <button
                className="flex items-center gap-2 text-[#FFB800]"
                onClick={handleNext}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                <IconChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};