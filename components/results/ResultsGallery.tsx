'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Result, ResultCategory, getResultsByCategory, categoryInfo } from '@/data/results';
import ResultCard from './ResultCard';
import Lightbox from './Lightbox';

interface ResultsGalleryProps {
  results: Result[];
}

const ResultsGallery = ({ results }: ResultsGalleryProps) => {
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ResultCategory | 'all'>('all');

  const categories: (ResultCategory | 'all')[] = ['all', 'body-contouring', 'facials', 'anti-aging', 'specialized-treatments'];

  const categoryLabels: Record<ResultCategory | 'all', string> = {
    'all': 'All Results',
    'body-contouring': 'Body Contouring',
    'facials': 'Facials',
    'anti-aging': 'Anti-Aging',
    'specialized-treatments': 'Specialized Treatments'
  };

  const filteredResults = selectedCategory === 'all'
    ? results
    : getResultsByCategory(selectedCategory);

  // Group results by category for Netflix-style sections
  const resultsByCategory: Record<ResultCategory, Result[]> = {
    'body-contouring': getResultsByCategory('body-contouring'),
    'facials': getResultsByCategory('facials'),
    'anti-aging': getResultsByCategory('anti-aging'),
    'specialized-treatments': getResultsByCategory('specialized-treatments')
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="mb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent-primary text-dark-bg'
                  : 'bg-dark-secondary text-light-secondary hover:bg-dark-hover hover:text-light-primary'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 text-center">
        <p className="text-light-secondary">
          Showing {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      {/* Netflix-Style Category Sections */}
      {selectedCategory === 'all' ? (
        <div className="space-y-16">
          {(Object.keys(resultsByCategory) as ResultCategory[]).map(category => {
            const categoryResults = resultsByCategory[category];
            if (categoryResults.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-serif text-light-primary mb-2">
                    {categoryInfo[category].title}
                  </h2>
                  <p className="text-light-secondary">
                    {categoryInfo[category].description}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryResults.map(result => (
                    <ResultCard
                      key={result.id}
                      result={result}
                      onViewFullSize={setSelectedResult}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        // Filtered View
        <div>
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResults.map(result => (
                <ResultCard
                  key={result.id}
                  result={result}
                  onViewFullSize={setSelectedResult}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-light-secondary text-lg">
                No results found in this category.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {selectedResult && (
        <Lightbox
          result={selectedResult}
          allResults={filteredResults}
          onClose={() => setSelectedResult(null)}
          onNavigate={setSelectedResult}
        />
      )}
    </>
  );
};

export default ResultsGallery;
