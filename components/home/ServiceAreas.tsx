'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceAreas() {
  const serviceAreas = [
    { name: 'Euless', description: 'Our Location', primary: true },
    { name: 'Arlington', description: '10 min drive' },
    { name: 'Irving', description: '15 min drive' },
    { name: 'Grand Prairie', description: '15 min drive' },
    { name: 'Mansfield', description: '20 min drive' },
    { name: 'Fort Worth', description: '20 min drive' },
    { name: 'Dallas', description: '30 min drive' },
    { name: 'Plano', description: '35 min drive' },
    { name: 'Frisco', description: '40 min drive' },
    { name: 'McKinney', description: '45 min drive' },
    { name: 'Coppell', description: '20 min drive' },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-light-primary mb-4"
          >
            Conveniently Located in Euless
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-light-secondary max-w-3xl mx-auto"
          >
            Centrally located in Euless, TX - clients from across the DFW metroplex drive to us
            for premium facials, body contouring, massage therapy, and slimming treatments.
          </motion.p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg text-center transition-all hover:scale-105 ${
                area.primary
                  ? 'bg-accent-rose text-dark-bg'
                  : 'bg-dark-hover border border-accent-rose/20'
              }`}
            >
              <h3
                className={`text-lg md:text-xl font-bold mb-1 ${
                  area.primary ? 'text-white' : 'text-light-primary'
                }`}
              >
                {area.name}
              </h3>
              <p
                className={`text-sm ${
                  area.primary ? 'text-white/90' : 'text-light-secondary'
                }`}
              >
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEO-Rich Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-dark-hover border border-accent-rose/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-serif text-light-primary mb-4">
            A Quick Drive from Anywhere in DFW
          </h3>
          <div className="space-y-4 text-light-secondary leading-relaxed">
            <p>
              <strong className="text-accent-rose">Beauty Sanctuary by Carmen Marin</strong> is
              conveniently located in <strong>Euless, Texas</strong>, at the center of the
              Dallas-Fort Worth metroplex. Our clients enjoy easy access from surrounding cities,
              making the short drive to experience our{' '}
              <strong>anti-aging facials, non-invasive body contouring, therapeutic massage,</strong>{' '}
              and <strong>professional slimming treatments</strong>.
            </p>
            <p>
              Clients from <strong>Arlington, Irving, Grand Prairie, Mansfield,</strong> and{' '}
              <strong>Coppell</strong> are just minutes away, while those from{' '}
              <strong>Fort Worth, Dallas, Plano, Frisco,</strong> and <strong>McKinney</strong>{' '}
              find our Euless location worth the drive for personalized, expert care in a
              luxurious setting. Our central location makes us easily accessible from anywhere
              in the DFW area.
            </p>
            <p>
              Our licensed esthetician, Carmen Marin, brings over 6 years of expertise in advanced
              skincare treatments, cryotherapy facials, radiofrequency body contouring, lymphatic
              drainage, and wood therapy (Maderoterapia). We also offer{' '}
              <strong>worldwide virtual face coaching consultations</strong> for clients who prefer
              remote guidance.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#services"
              className="inline-block bg-accent-rose text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-accent-rose/90 transition-colors text-center"
            >
              View All Services
            </Link>
            <Link
              href="/#contact"
              className="inline-block bg-transparent border-2 border-accent-rose text-accent-rose px-8 py-3 rounded-lg font-semibold hover:bg-accent-rose hover:text-dark-bg transition-colors text-center"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
