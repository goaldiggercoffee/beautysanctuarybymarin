/**
 * Results Gallery Data
 *
 * Before/After images organized by treatment category.
 * Images should be placed in: public/images/results/
 *
 * IMPORTANT: Each image should contain BOTH before and after side-by-side in one picture.
 *
 * Folder Structure:
 * - /images/results/body-contouring/butt-lifting/
 * - /images/results/body-contouring/body-slimming/
 * - /images/results/facials/cryotherapy/
 * - /images/results/anti-aging/face-lifting/
 * - etc.
 *
 * Naming convention: [descriptive-name]-[number].jpg
 * Example: /images/results/body-contouring/butt-lifting/butt-lifting-1.jpg
 */

export type ResultCategory =
  | 'body-contouring'
  | 'facials'
  | 'anti-aging'
  | 'specialized-treatments';

export interface Result {
  id: string;
  treatment: string;
  category: ResultCategory;
  image: string; // Single combined before/after image
  sessions?: number;
  description?: string;
  featured?: boolean;
}

export const results: Result[] = [
  // Body Contouring Results - Butt Lifting
  {
    id: 'body-contouring-1',
    treatment: 'Butt Lifting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lift1.jpg',
    sessions: 6,
    description: 'Dramatic lifting and contouring results after 6 sessions',
    featured: true
  },
  {
    id: 'body-contouring-2',
    treatment: 'Butt Lifting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lifting3.jpg',
    sessions: 8,
    description: 'Enhanced shape and firmness achieved through consistent treatments',
    featured: true
  },
  {
    id: 'body-contouring-3',
    treatment: 'Butt Lifting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lifting4.jpg',
    sessions: 6,
    description: 'Visible lifting and improved definition'
  },
  {
    id: 'body-contouring-4',
    treatment: 'Butt Lifting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lifting5.jpg',
    sessions: 8,
    description: 'Remarkable transformation with enhanced curves'
  },
  {
    id: 'body-contouring-5',
    treatment: 'Butt Lifting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lift-6.jpg',
    sessions: 6,
    description: 'Sculpted and lifted results'
  },
  {
    id: 'body-contouring-6',
    treatment: 'Butt Lifting (In Progress)',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lift-in-progress1.jpg',
    sessions: 4,
    description: 'Progress shown after 4 sessions'
  },
  {
    id: 'body-contouring-7',
    treatment: 'Butt Lifting (In Progress)',
    category: 'body-contouring',
    image: '/images/results/body-contouring/butt-lifting/butt-lift-in-progress2.jpg',
    sessions: 3,
    description: 'Visible improvement after 3 sessions'
  },

  // Body Slimming
  {
    id: 'body-contouring-8',
    treatment: 'Body Slimming',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-slimming/body-slimming.jpg',
    sessions: 8,
    description: 'Visible reduction in inches and improved body contours',
    featured: true
  },
  {
    id: 'body-contouring-9',
    treatment: 'Body Slimming',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-slimming/body-slimming2.png',
    sessions: 6,
    description: 'Dramatic inch loss and body reshaping'
  },
  {
    id: 'body-contouring-10',
    treatment: 'Body Slimming',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-slimming/body-slimming3.jpg',
    sessions: 8,
    description: 'Significant body contouring results'
  },
  {
    id: 'body-contouring-11',
    treatment: 'Body Slimming',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-slimming/body-slimming5.jpg',
    sessions: 10,
    description: 'Comprehensive body transformation'
  },

  // Body Sculpting
  {
    id: 'body-contouring-12',
    treatment: 'Body Sculpting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-sculpting/body-sculpting.jpg',
    sessions: 4,
    description: 'Sculpted definition and smoother skin texture'
  },
  {
    id: 'body-contouring-13',
    treatment: 'Body Sculpting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-sculpting/body-sculpting2.jpg',
    sessions: 6,
    description: 'Enhanced muscle definition and toning'
  },
  {
    id: 'body-contouring-14',
    treatment: 'Body Sculpting',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-sculpting/body-sculpting4.jpg',
    sessions: 5,
    description: 'Targeted body contouring and firming'
  },
  {
    id: 'body-contouring-15',
    treatment: 'Body Contouring',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-sculpting/body-contouring6.jpg',
    sessions: 8,
    description: 'Full body sculpting transformation'
  },
  {
    id: 'body-contouring-16',
    treatment: 'Body Contouring',
    category: 'body-contouring',
    image: '/images/results/body-contouring/body-sculpting/body-contouring7.jpg',
    sessions: 6,
    description: 'Comprehensive body reshaping'
  },

  // Facial Results - Cryotherapy
  {
    id: 'facial-1',
    treatment: 'Cryotherapy Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/cryotherapy-facial-antiaging.jpg',
    sessions: 1,
    description: 'Immediate brightening and tightening effects',
    featured: true
  },
  {
    id: 'facial-2',
    treatment: 'Cryo RF Anti-Aging Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/cryo-rf-antiaging-facial.jpg',
    sessions: 3,
    description: 'Advanced anti-aging with radiofrequency and cryotherapy'
  },
  {
    id: 'facial-3',
    treatment: 'Cryo RF Anti-Aging Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/cryo-rf-antiaging-facial2.jpg',
    sessions: 5,
    description: 'Lifted and rejuvenated facial contours'
  },
  {
    id: 'facial-4',
    treatment: 'Crystal Healing Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/Crystal-Healing-facial.jpg',
    sessions: 1,
    description: 'Holistic facial treatment with crystal therapy'
  },
  {
    id: 'facial-5',
    treatment: 'Cryo LED Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/facial-cryo-led-inflamation-reduced.jpg',
    sessions: 3,
    description: 'Reduced inflammation and improved skin tone'
  },
  {
    id: 'facial-6',
    treatment: 'Cryotherapy Facial',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/facial-cryo-reduced.jpg',
    sessions: 1,
    description: 'Instant tightening and pore refinement'
  },
  {
    id: 'facial-7',
    treatment: 'LED Facial (In Progress)',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/led-facial-in-progress.jpg',
    sessions: 2,
    description: 'Progress shown during LED light therapy'
  },
  {
    id: 'facial-8',
    treatment: 'Facial Treatment (In Progress)',
    category: 'facials',
    image: '/images/results/facials/cryotherapy/facial-in-progress.jpg',
    sessions: 1,
    description: 'Treatment in action'
  },

  // Deep Cleansing Facials
  {
    id: 'facial-9',
    treatment: 'Deep Cleansing Facial',
    category: 'facials',
    image: '/images/results/facials/deep-cleansing/deep-facial.jpg',
    sessions: 1,
    description: 'Deep cleansing with visible clarity improvement'
  },
  {
    id: 'facial-10',
    treatment: 'Deep Cleansing Facial',
    category: 'facials',
    image: '/images/results/facials/deep-cleansing/facial-deap-cleanse1.jpg',
    sessions: 1,
    description: 'Thorough pore cleansing and extraction'
  },
  {
    id: 'facial-11',
    treatment: 'Deep Cleansing Facial',
    category: 'facials',
    image: '/images/results/facials/deep-cleansing/facial-deap-cleanse2.jpg',
    sessions: 1,
    description: 'Clear, refreshed complexion'
  },

  // Anti-Aging Results - Face Lifting
  {
    id: 'anti-aging-1',
    treatment: 'Anti-Aging Eye Treatment',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/anti-aging-reduced-eye-wrinkles.jpg',
    sessions: 5,
    description: 'Reduced eye wrinkles and crow\'s feet',
    featured: true
  },
  {
    id: 'anti-aging-2',
    treatment: 'Anti-Aging Forehead Treatment',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/anti-aging-reduced-front-wrinkles.jpg',
    sessions: 5,
    description: 'Smoothed forehead lines and wrinkles'
  },
  {
    id: 'anti-aging-3',
    treatment: 'Eye Lifting',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/eye-lifting1.jpg',
    sessions: 6,
    description: 'Lifted eye area with reduced sagging'
  },
  {
    id: 'anti-aging-4',
    treatment: 'Eye Lifting',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/eye-liftying3.jpg',
    sessions: 5,
    description: 'Brightened and lifted eye contours'
  },
  {
    id: 'anti-aging-5',
    treatment: 'Face Lifting Anti-Aging',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/face-liffting-antiage.jpg',
    sessions: 8,
    description: 'Overall facial lifting and rejuvenation'
  },
  {
    id: 'anti-aging-6',
    treatment: 'Forehead Anti-Aging',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/forehead-antiaging-reduced1.jpg',
    sessions: 5,
    description: 'Dramatic reduction in forehead lines'
  },
  {
    id: 'anti-aging-7',
    treatment: 'Nano Pen Forehead Treatment',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/forehead-nanopen-facial.jpg',
    sessions: 3,
    description: 'Micro-needling for forehead rejuvenation'
  },
  {
    id: 'anti-aging-8',
    treatment: 'Nano Infusion Facial',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/nano-infusion-facial2.jpg',
    sessions: 4,
    description: 'Plumped skin with minimized wrinkles'
  },
  {
    id: 'anti-aging-9',
    treatment: 'ProPen Nano Infusion',
    category: 'anti-aging',
    image: '/images/results/anti-aging/face-lifting/propen-nanoinfusion-facial3.jpg',
    sessions: 3,
    description: 'Advanced micro-needling for facial rejuvenation'
  },

  // Neck & Chin Treatments
  {
    id: 'anti-aging-10',
    treatment: 'Cryo RF Chin Toning',
    category: 'anti-aging',
    image: '/images/results/anti-aging/neck-chin/cryo-rf-chin-5.jpg',
    sessions: 5,
    description: 'Defined jawline with reduced double chin',
    featured: true
  },
  {
    id: 'anti-aging-11',
    treatment: 'Neck & Chin Reduction',
    category: 'anti-aging',
    image: '/images/results/anti-aging/neck-chin/neck-chin-reduction-slimming.jpg',
    sessions: 6,
    description: 'Slimmed and contoured neck and chin area'
  },
  {
    id: 'anti-aging-12',
    treatment: 'Neck & Chin Treatment',
    category: 'anti-aging',
    image: '/images/results/anti-aging/neck-chin/neck-chin.jpg',
    sessions: 5,
    description: 'Tightened neck and defined jawline'
  },
  {
    id: 'anti-aging-13',
    treatment: 'RF Chin Toning (Side View)',
    category: 'anti-aging',
    image: '/images/results/anti-aging/neck-chin/rf-chin-toning-side-view.jpg',
    sessions: 5,
    description: 'Dramatic chin and jawline improvement'
  }
];

// Category display information
export const categoryInfo: Record<ResultCategory, {
  title: string;
  description: string;
  slug: string;
}> = {
  'body-contouring': {
    title: 'Body Contouring & Sculpting',
    description: 'Transform your body with our advanced contouring treatments',
    slug: 'body-contouring'
  },
  'facials': {
    title: 'Facial Transformations',
    description: 'Radiant skin through professional facial treatments',
    slug: 'facials'
  },
  'anti-aging': {
    title: 'Anti-Aging Results',
    description: 'Turn back time with cutting-edge anti-aging therapies',
    slug: 'anti-aging'
  },
  'specialized-treatments': {
    title: 'Specialized Treatments',
    description: 'Targeted solutions for specific areas and concerns',
    slug: 'specialized-treatments'
  }
};

// Helper functions
export const getResultsByCategory = (category: ResultCategory): Result[] => {
  return results.filter(result => result.category === category);
};

export const getFeaturedResults = (): Result[] => {
  return results.filter(result => result.featured);
};

export const getAllResults = (): Result[] => {
  return results;
};

export const getResultById = (id: string): Result | undefined => {
  return results.find(result => result.id === id);
};

export const getAllCategories = (): ResultCategory[] => {
  return Array.from(new Set(results.map(result => result.category)));
};
