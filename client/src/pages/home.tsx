import { useState } from "react";
import { Template1 } from "@/components/Template1";
import { Template2 } from "@/components/Template2";

const problems = [
  {
    id: 1,
    type: "template1",
    title: "Trigonometry Problem 1",
    description: "Find the value of Sec C + Cot A"
  },
  {
    id: 2,
    type: "template1",
    title: "Trigonometry Problem 2",
    description: "Calculate Sin A + Cos C"
  },
  {
    id: 3,
    type: "template2",
    title: "Compound Interest Problem 1",
    description: "Find the rate of interest and amount after 2 years"
  },
  {
    id: 4,
    type: "template2",
    title: "Compound Interest Problem 2",
    description: "Calculate compound interest for 3 years"
  }
];

export default function Home() {
  const [activeProblem, setActiveProblem] = useState(1);

  const currentProblem = problems.find(p => p.id === activeProblem);

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" data-testid="text-title">
            Mathematical Problem Solver
          </h1>
          <div className="flex gap-2 overflow-x-auto">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveProblem(problem.id)}
                data-testid={`button-problem-${problem.id}`}
                className={`
                  px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all
                  ${activeProblem === problem.id
                    ? 'bg-[#1bad83] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {problem.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Description */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800" data-testid="text-problem-title">
            {currentProblem?.title}
          </h2>
          <p className="text-gray-600 mt-1" data-testid="text-problem-description">
            {currentProblem?.description}
          </p>
        </div>

        {/* Problem Solution */}
        <div data-testid={`container-problem-${activeProblem}`}>
          {activeProblem === 1 && <Template1 problemNumber={1} />}
          {activeProblem === 2 && <Template1 problemNumber={2} />}
          {activeProblem === 3 && <Template2 problemNumber={1} />}
          {activeProblem === 4 && <Template2 problemNumber={2} />}
        </div>
      </div>
    </div>
  );
}
