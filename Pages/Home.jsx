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
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">

            <div className="flex items-center justify-center gap-3 mb-6">
              <ParrotLogo className="w-12 h-12" />
              <h1 className="text-5xl font-bold tracking-tight text-slate-900">
                ParrotClaw
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/50 rounded-full mb-6 border border-sage-200/50">
              <Sparkles className="w-4 h-4 text-sage-700" />
              <span className="text-sm font-medium text-sage-800">Introduction to Large Language Models</span>
            </div>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              Chadhuvukondi Prends
            </p>
          </motion.div>

          {/* Search Button */}
          <div className="mt-12 flex justify-center">
            <Link to={createPageUrl('Search')}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-6 text-base font-medium gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <Search className="w-5 h-5" />
                  Search All Questions
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mode Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              <Link to={createPageUrl('LearnMode')}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-sage-300 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-sage-200/50 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-8">
                    <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-sage-700" />
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                      Learn Mode
                    </h2>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Study with answers visible and memory aids. Master each concept with helpful mnemonics and detailed explanations.
                    </p>
                    
                    <div className="flex items-center gap-2 text-sage-700 font-medium group-hover:gap-4 transition-all">
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
                  
                  <div className="relative p-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-slate-700" />
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                      Quiz Mode
                    </h2>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Test your knowledge without hints. Track your progress and identify areas for improvement.
                    </p>
                    
                    <div className="flex items-center gap-2 text-slate-700 font-medium group-hover:gap-4 transition-all">
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

