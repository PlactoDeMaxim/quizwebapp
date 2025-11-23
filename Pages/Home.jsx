import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { BookOpen, Brain, GraduationCap, Sparkles, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import ParrotLogo from '@/components/ParrotLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-sage-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sage-100/20 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">

            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <ParrotLogo className="w-8 h-8 sm:w-12 sm:h-12" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                ParrotClaw
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sage-100/50 rounded-full mb-4 sm:mb-6 border border-sage-200/50">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-sage-700" />
              <span className="text-xs sm:text-sm font-medium text-sage-800">Introduction to Large Language Models</span>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4">
              Chadhuvukondi Prends
            </p>
          </motion.div>

          {/* Search Button */}
          <div className="mt-8 sm:mt-12 flex justify-center px-4">
            <Link to={createPageUrl('Search')} className="w-full sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-slate-700 hover:bg-slate-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Search All Questions</span>
                  <span className="sm:hidden">Search</span>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mode Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              <Link to={createPageUrl('LearnMode')}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-sage-300 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-sage-200/50 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-sage-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sage-700" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
                      Learn Mode
                    </h2>
                    
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                      Study with answers visible and memory aids. Master each concept with helpful mnemonics and detailed explanations.
                    </p>
                    
                    <div className="flex items-center gap-2 text-sage-700 font-medium group-hover:gap-4 transition-all text-sm sm:text-base">
                      <span>Start Learning</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>

              <Link to={createPageUrl('QuizMode')}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-slate-300 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-slate-200/50 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
                      Quiz Mode
                    </h2>
                    
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                      Test your knowledge without hints. Track your progress and identify areas for improvement.
                    </p>
                    
                    <div className="flex items-center gap-2 text-slate-700 font-medium group-hover:gap-4 transition-all text-sm sm:text-base">
                      <span>Take Quiz</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);
}

