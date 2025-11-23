import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { questionBank } from '../Components/quiz/questionBank';
import { ChevronLeft, Search as SearchIcon, CheckCircle2, Lightbulb, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import ParrotLogo from '@/components/ParrotLogo';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  // Fast search function - case-insensitive, handles spaces
  const searchQuestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    const results = [];

    Object.keys(questionBank).forEach((weekKey) => {
      const week = questionBank[weekKey];
      const weekNumber = parseInt(weekKey.replace('week', ''));

      week.questions.forEach((question) => {
        const questionText = question.question.toLowerCase();
        const explanationText = question.explanation.toLowerCase();
        const cheatText = question.cheat.toLowerCase();
        
        // Search in question text, explanation, and memory aid
        const matchesQuestion = questionText.includes(query);
        const matchesExplanation = explanationText.includes(query);
        const matchesCheat = cheatText.includes(query);
        
        // Also search in options
        const matchesOptions = question.options.some(opt => 
          opt.toLowerCase().includes(query)
        );

        if (matchesQuestion || matchesExplanation || matchesCheat || matchesOptions) {
          results.push({
            ...question,
            weekKey,
            weekNumber,
            weekTitle: week.title,
            matchType: matchesQuestion ? 'question' : 
                      matchesOptions ? 'option' : 
                      matchesExplanation ? 'explanation' : 'memory-aid'
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50/30 via-stone-50 to-slate-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
                <SearchIcon className="w-5 h-5 text-sage-600" />
                <h1 className="text-xl font-semibold text-slate-900">Search Questions</h1>
              </div>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, answers, explanations... (case-insensitive)"
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-slate-200 rounded-xl focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-200 bg-white shadow-sm"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-slate-600">
              Found {searchQuestions.length} result{searchQuestions.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Search Results */}
        {!searchQuery ? (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">Start Searching</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Enter keywords to search across all questions, answers, explanations, and memory aids from all 12 weeks.
            </p>
          </div>
        ) : searchQuestions.length === 0 ? (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">No Results Found</h2>
            <p className="text-slate-500">
              Try different keywords or check your spelling.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {searchQuestions.map((question, index) => (
                <motion.div
                  key={`${question.weekKey}-${question.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-slate-50 to-transparent border-b">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="outline" className="bg-sage-100 text-sage-700 border-sage-300">
                              Week {question.weekNumber}
                            </Badge>
                            <Badge variant="outline">
                              {question.weekTitle}
                            </Badge>
                            {Array.isArray(question.correctAnswer) && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                                More than one
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs text-slate-500">
                              Matched in: {question.matchType}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-medium text-slate-900 leading-relaxed">
                            {question.question}
                          </h3>
                          {question.subQuestions && (
                            <ul className="mt-3 space-y-1 text-sm text-slate-600 ml-4">
                              {question.subQuestions.map((sq, i) => (
                                <li key={i}>{sq}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 space-y-6">
                      {/* Options with Correct Answers Highlighted */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Options:</h4>
                        {question.options.map((option, optIndex) => {
                          const isCorrect = Array.isArray(question.correctAnswer) 
                            ? question.correctAnswer.includes(optIndex)
                            : optIndex === question.correctAnswer;
                          
                          return (
                            <div
                              key={optIndex}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                isCorrect
                                  ? 'border-green-300 bg-green-50/50'
                                  : 'border-slate-200 bg-slate-50/30'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  isCorrect
                                    ? 'bg-green-500'
                                    : 'bg-slate-200'
                                }`}>
                                  {isCorrect ? (
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  ) : (
                                    <span className="text-xs font-medium text-slate-600">
                                      {String.fromCharCode(65 + optIndex)}
                                    </span>
                                  )}
                                </div>
                                <span className="text-slate-900 text-sm">
                                  {option}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Memory Aid */}
                      <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/50">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-amber-900 mb-1 text-sm">Memory Aid</h4>
                            <p className="text-amber-800 leading-relaxed">{question.cheat}</p>
                          </div>
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm">Explanation</h4>
                        <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

