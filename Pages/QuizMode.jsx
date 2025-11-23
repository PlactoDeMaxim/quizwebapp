import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { questionBank } from '../Components/quiz/questionBank';
import { ChevronLeft, CheckCircle2, XCircle, RotateCcw, Brain, Lightbulb, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import ParrotLogo from '@/components/ParrotLogo';

export default function QuizMode() {
  const [selectedWeek, setSelectedWeek] = useState('week1');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [checkedQuestions, setCheckedQuestions] = useState(new Set());

  const weeks = Object.keys(questionBank);
  const currentWeek = questionBank[selectedWeek];
  const totalQuestions = currentWeek.questions.length;

  const handleAnswerSelect = (questionId, optionIndex, isMultiple) => {
    if (isMultiple) {
      const currentSelections = selectedAnswers[questionId] || [];
      const newSelections = currentSelections.includes(optionIndex)
        ? currentSelections.filter(idx => idx !== optionIndex)
        : [...currentSelections, optionIndex];
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: newSelections
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: optionIndex
      });
    }
  };

  const handleCheckAnswer = (questionId) => {
    setCheckedQuestions(new Set([...checkedQuestions, questionId]));
  };

  const handleRetake = () => {
    // Reset only the current week's answers
    const newAnswers = { ...selectedAnswers };
    const newChecked = new Set(checkedQuestions);
    
    // Remove answers and checked status for current week's questions
    currentWeek.questions.forEach(q => {
      delete newAnswers[q.id];
      newChecked.delete(q.id);
    });
    
    setSelectedAnswers(newAnswers);
    setCheckedQuestions(newChecked);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
    setSelectedAnswers({});
    setCheckedQuestions(new Set());
  };

  const answeredCount = Object.keys(selectedAnswers).filter(id => {
    const answer = selectedAnswers[id];
    return answer !== undefined && answer !== null && 
           (Array.isArray(answer) ? answer.length > 0 : true);
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')}>
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <ParrotLogo className="w-6 h-6" />
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">ParrotClaw</span>
                <span className="text-slate-400">·</span>
                <Brain className="w-5 h-5 text-slate-600" />
                <h1 className="text-xl font-semibold text-slate-900">Quiz Mode</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to={createPageUrl('Search')}>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </Link>
              <Badge variant="outline" className="gap-2">
                {answeredCount}/{totalQuestions}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Week Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {weeks.map((week, index) =>
            <button
              key={week}
              onClick={() => handleWeekChange(week)}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
              selectedWeek === week ?
              'bg-slate-700 text-white shadow-md' :
              'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`
              }>
                Week {index + 1}
              </button>
            )}
          </div>
        </div>

        {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">
                  {answeredCount} of {totalQuestions} answered
                </span>
                <span className="text-sm text-slate-500">
                  {currentWeek.title}
                </span>
              </div>
              <Progress value={answeredCount / totalQuestions * 100} className="h-2" />
            </div>

            {/* All Questions - Scrollable */}
            <div className="space-y-6">
              {currentWeek.questions.map((q, index) => {
              const userAnswer = selectedAnswers[q.id];
              const isMultiple = Array.isArray(q.correctAnswer);
              const isChecked = checkedQuestions.has(q.id);
              const isAnswered = userAnswer !== undefined && userAnswer !== null && 
                                 (Array.isArray(userAnswer) ? userAnswer.length > 0 : true);
              
              // For multiple answer questions, only show feedback if checked
              // For single answer questions, show feedback immediately after selection
              const showFeedback = isMultiple ? isChecked : isAnswered;
              
              let isCorrect = false;
              if (isAnswered) {
                if (isMultiple) {
                  const correctSet = new Set(q.correctAnswer);
                  const userSet = Array.isArray(userAnswer) ? new Set(userAnswer) : new Set();
                  isCorrect = correctSet.size === userSet.size && 
                              [...correctSet].every(x => userSet.has(x));
                } else {
                  isCorrect = userAnswer === q.correctAnswer;
                }
              }

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>

                    <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg">
                      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-transparent">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline">
                                Question {index + 1}
                              </Badge>
                              {Array.isArray(q.correctAnswer) && (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                                  More than one
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-medium text-slate-900 leading-relaxed">
                              {q.question}
                            </h3>
                            {q.subQuestions &&
                          <ul className="mt-4 space-y-1.5 text-sm text-slate-600 ml-4">
                                {q.subQuestions.map((sq, i) =>
                            <li key={i} className="leading-relaxed">{sq}</li>
                            )}
                              </ul>
                          }
                          </div>
                          {showFeedback &&
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'}`
                        }>
                              {isCorrect ?
                          <CheckCircle2 className="w-5 h-5 text-white" /> :

                          <XCircle className="w-5 h-5 text-white" />
                          }
                            </div>
                        }
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          {q.options.map((option, optIndex) => {
                          const isMultiple = Array.isArray(q.correctAnswer);
                          const userAnswer = selectedAnswers[q.id];
                          const isSelected = isMultiple 
                            ? (Array.isArray(userAnswer) && userAnswer.includes(optIndex))
                            : userAnswer === optIndex;
                          const isCorrectOption = isMultiple
                            ? q.correctAnswer.includes(optIndex)
                            : optIndex === q.correctAnswer;

                          let borderColor = 'border-slate-200';
                          let bgColor = 'bg-white hover:bg-slate-50';

                          if (showFeedback) {
                            if (isCorrectOption) {
                              borderColor = 'border-green-400';
                              bgColor = 'bg-green-50';
                            } else if (isSelected && !isCorrect) {
                              borderColor = 'border-red-400';
                              bgColor = 'bg-red-50';
                            }
                          } else if (isSelected) {
                            borderColor = 'border-slate-400';
                            bgColor = 'bg-slate-100';
                          }

                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleAnswerSelect(q.id, optIndex, isMultiple)}
                              disabled={showFeedback && !isMultiple}
                              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${borderColor} ${bgColor} ${
                              !showFeedback ? 'hover:border-slate-300 cursor-pointer' : isMultiple ? 'cursor-pointer' : 'cursor-not-allowed'}`
                              }>

                                <div className="flex items-start gap-3">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                showFeedback && isCorrectOption ?
                                'bg-green-500' :
                                showFeedback && isSelected && !isCorrect ?
                                'bg-red-500' :
                                isSelected ?
                                'border-2 border-slate-600 bg-slate-600' :
                                'border-2 border-slate-300'}`
                                }>
                                    {showFeedback && isCorrectOption ?
                                  <CheckCircle2 className="w-4 h-4 text-white" /> :
                                  showFeedback && isSelected && !isCorrect ?
                                  <XCircle className="w-4 h-4 text-white" /> :
                                  isSelected ?
                                  <div className="w-2 h-2 rounded-full bg-white" /> :
                                  null}
                                  </div>
                                  <span className={`leading-relaxed ${
                                showFeedback && isCorrectOption ?
                                'font-medium text-green-900' :
                                showFeedback && isSelected && !isCorrect ?
                                'text-red-900' :
                                'text-slate-800'}`
                                }>
                                    {option}
                                  </span>
                                </div>
                              </button>);

                        })}
                        </div>

                        {/* Check Answer Button for Multiple Answer Questions */}
                        {isMultiple && !isChecked && isAnswered && (
                          <div className="mt-4 flex justify-center">
                            <Button
                              onClick={() => handleCheckAnswer(q.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                            >
                              Check Answer
                            </Button>
                          </div>
                        )}

                        {/* Feedback - shown after selection/checking */}
                        {showFeedback &&
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 space-y-4">

                            {/* Result Badge */}
                            <div className={`p-4 rounded-xl flex items-start gap-3 ${
                        isCorrect ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`
                        }>
                              {isCorrect ?
                          <>
                                  <CheckCircle2 className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-semibold text-green-900">Correct!</p>
                                    <p className="text-sm text-green-800 mt-1">{q.explanation}</p>
                                  </div>
                                </> :

                          <>
                                  <XCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-semibold text-red-900">Incorrect</p>
                                    <p className="text-sm text-red-800 mt-1">{q.explanation}</p>
                                  </div>
                                </>
                          }
                            </div>

                            {/* Memory Aid */}
                            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
                              <div className="flex items-start gap-3">
                                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-semibold text-amber-900 mb-1 text-sm">Memory Aid</h4>
                                  <p className="text-amber-800 leading-relaxed text-sm">{q.cheat}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                      }
                      </CardContent>
                    </Card>
                  </motion.div>);

            })}
            </div>

            {/* Retake Button */}
            <div className="mt-8 flex justify-center pb-8">
              <Button
                onClick={handleRetake}
                variant="outline"
                size="lg"
                className="gap-2 bg-white hover:bg-slate-50 border-slate-300">
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </Button>
            </div>
      </div>
    </div>);
}

