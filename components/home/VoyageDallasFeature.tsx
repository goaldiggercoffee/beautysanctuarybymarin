'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VoyageDallasFeature() {
  return (
    <section className="bg-dark-bg py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_1.4fr] gap-6 lg:gap-8 items-center">

          {/* Photo 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/services/body-contouring-working.jpeg"
              alt="Carmen Marin performing body contouring treatment"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          {/* Photo 2 */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/services/Camen-Marin-CryoMachine.jpeg"
              alt="Carmen Marin with cryo machine"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          {/* Right: Article content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full flex flex-col gap-5"
          >
            <p className="text-light-secondary text-sm uppercase tracking-widest font-medium">
              As Featured In
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light-primary leading-tight">
              Exploring Life &amp; Business with Carmen Marin of Beauty Sanctuary
            </h2>

            <p className="text-light-secondary text-base leading-relaxed">
              Voyage Dallas sat down with Carmen Marin to talk about her journey building Beauty Sanctuary — from her passion for advanced skincare to serving clients across the DFW metroplex and beyond. Read her story and discover what drives her dedication to every client she works with.
            </p>

            {/* Logo + Button inline — matches reference layout */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/services/Voyagedallas-Logo.jpg"
                  alt="Voyage Dallas"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <a
                href="https://voyagedallas.com/interview/exploring-life-business-with-carmen-marin-of-beauty-sanctuary-by-carmen-marin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-card border border-light-secondary/20 text-light-primary font-semibold px-6 py-3 rounded-full hover:bg-light-secondary/10 transition-all duration-200 uppercase tracking-wide text-sm"
              >
                Read the Article in Voyage Dallas
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
