import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { questionBank } from '../Components/quiz/questionBank';
import { ChevronLeft, Lightbulb, CheckCircle2, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import ParrotLogo from '@/components/ParrotLogo';

export default function LearnMode() {
  const [selectedWeek, setSelectedWeek] = useState('week1');
  const weeks = Object.keys(questionBank);
  const currentWeek = questionBank[selectedWeek];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50/30 via-stone-50 to-slate-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <Link to={createPageUrl('Home')}>
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 p-2">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1 justify-center">
              <ParrotLogo className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                <span className="text-sm sm:text-lg font-bold text-slate-900 truncate">ParrotClaw</span>
                <span className="text-slate-400 hidden sm:inline">·</span>
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-sage-600 flex-shrink-0" />
                <h1 className="text-base sm:text-xl font-semibold text-slate-900 truncate">Learn Mode</h1>
              </div>
            </div>
            <Link to={createPageUrl('Search')}>
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 p-2">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Week Selector */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-medium text-slate-600 mb-3 sm:mb-4">Select Week</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {weeks.map((week, index) =>
            <button
              key={week}
              onClick={() => setSelectedWeek(week)} 
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all ${
                selectedWeek === week
                  ? 'bg-slate-700 text-white shadow-md'
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 shadow-md shadow-sage-200'
              }`}>
                Week {index + 1}
              </button>
            )}
          </div>
        </div>

        {/* Week Title */}
        <motion.div
          key={selectedWeek}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8">

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            {currentWeek.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {currentWeek.questions.length} questions · Study with answers & memory aids
          </p>
        </motion.div>

        {/* Questions */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {currentWeek.questions.map((q, index) =>
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}>

                <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-transparent border-b p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs sm:text-sm">
                            Question {index + 1}
                          </Badge>
                          {Array.isArray(q.correctAnswer) && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 text-xs sm:text-sm">
                              More than one
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                          {q.question}
                        </h3>
                        {q.subQuestions &&
                      <ul className="mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm text-slate-600 ml-3 sm:ml-4">
                            {q.subQuestions.map((sq, i) =>
                        <li key={i}>{sq}</li>
                        )}
                          </ul>
                      }
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Options */}
                    <div className="space-y-3">
                      {q.options.map((option, optIndex) => {
                      const isCorrect = Array.isArray(q.correctAnswer) 
                        ? q.correctAnswer.includes(optIndex)
                        : optIndex === q.correctAnswer;
                      
                      return (
                        <div
                          key={optIndex}
                          className={`p-4 rounded-lg border-2 transition-all ${
                          isCorrect ?
                          'border-green-300 bg-green-50/50' :
                          'border-slate-200 bg-slate-50/30'}`
                          }>

                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCorrect ?
                          'bg-green-500' :
                          'bg-slate-200'}`
                          }>
                                {isCorrect ?
                            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> :

                            <span className="text-xs font-medium text-slate-600">
                                    {String.fromCharCode(65 + optIndex)}
                                  </span>
                            }
                              </div>
                              <span className="text-slate-900 text-xs sm:text-sm leading-relaxed">
                                {option}
                              </span>
                            </div>
                          </div>
                      );
                    })}
                    </div>

                    {/* Memory Aid */}
                    <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <h4 className="font-semibold text-amber-900 mb-1 text-xs sm:text-sm">Memory Aid</h4>
                          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">{q.cheat}</p>
                        </div>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-2 text-xs sm:text-sm">Explanation</h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{q.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>);
}

