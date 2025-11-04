import type { Metadata } from 'next';
import Link from 'next/link';
import FeaturedTestimonials from '@/components/testimonials/FeaturedTestimonials';

export const metadata: Metadata = {
  title: 'About Carmen Marin | Licensed Esthetician | Beauty Sanctuary',
  description: 'Meet Carmen Marin, a licensed esthetician with 6+ years of experience in advanced body contouring, facial rejuvenation, and personalized beauty treatments. Serving Euless, Texas and surrounding areas.',
  keywords: 'Carmen Marin, licensed esthetician, Euless Texas, body contouring, facial treatments, beauty sanctuary, advanced esthetics',
  openGraph: {
    title: 'About Carmen Marin | Licensed Esthetician',
    description: 'Licensed esthetician with 6+ years of experience specializing in advanced body contouring and facial rejuvenation.',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark-bg py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-light-primary mb-6">
              Meet Carmen Marin
            </h1>
            <p className="text-xl md:text-2xl text-accent-rose font-light">
              Your Partner in Beauty & Wellness
            </p>
          </div>
        </div>
      </section>

      {/* Carmen's Story */}
      <section className="py-16 md:py-24 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-8">
              Carmen&apos;s Story
            </h2>
            <div className="space-y-6 text-light-secondary text-lg leading-relaxed">
              <p>
                Welcome to Beauty Sanctuary, where luxury meets expertise. I&apos;m Carmen Marin,
                a licensed esthetician with over 6 years of experience helping clients achieve
                their beauty and wellness goals.
              </p>
              <p>
                My journey in esthetics began with a passion for helping people feel confident
                in their own skin. After completing my esthetician training at ITS Academy of
                Beauty in Miami, I&apos;ve dedicated myself to mastering advanced treatments and
                staying at the forefront of the industry.
              </p>
              <p>
                As the owner of Beauty Sanctuary and a lead esthetician at Hand & Stone, I&apos;ve
                had the privilege of working with hundreds of clients, each with unique needs and
                goals. What drives me is seeing the transformation—not just in how my clients look,
                but in how they feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Credentials */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-12">
            Expertise & Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Professional Credentials */}
            <div>
              <h3 className="text-2xl font-serif text-accent-rose mb-6">
                Professional Credentials
              </h3>
              <ul className="space-y-4 text-light-secondary">
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Licensed Esthetician (ITS Academy of Beauty, 2021)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>6+ Years Professional Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Top Sales Performer & Lead Trainer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Bilingual (English & Spanish)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Background in Hospitality Management</span>
                </li>
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h3 className="text-2xl font-serif text-accent-rose mb-6">
                Areas of Expertise
              </h3>
              <ul className="space-y-4 text-light-secondary">
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Advanced Body Contouring & Sculpting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Facial Rejuvenation & Anti-Aging Treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Wood Therapy (Maderoterapia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Lymphatic Drainage Massage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Cryotherapy & LED Light Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Chemical Peels & Microdermabrasion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Gluteal Enhancement Treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Therapeutic Massage Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Custom Skincare Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-rose mr-3 mt-1">•</span>
                  <span>Client Education & Consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-16 md:py-24 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-8">
              Philosophy & Approach
            </h2>
            <div className="space-y-6 text-light-secondary text-lg leading-relaxed">
              <p>
                At Beauty Sanctuary, my approach is simple: education, customization, and results.
                I believe every client deserves to understand their treatment options and why certain
                treatments will work best for their unique needs.
              </p>
              <p>
                I don&apos;t believe in one-size-fits-all solutions. Instead, I create personalized
                treatment plans that combine advanced techniques with proven methods to deliver real,
                visible results. Whether you&apos;re seeking body contouring, facial rejuvenation, or
                specialized treatments, my goal is to guide you on a journey to looking and feeling
                your best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Beauty Sanctuary */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-12">
            Why Choose Beauty Sanctuary
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Proven Expertise */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10 hover:border-accent-rose/30 transition-colors">
              <h3 className="text-xl font-serif text-accent-rose mb-4">
                Proven Expertise
              </h3>
              <ul className="space-y-2 text-light-secondary">
                <li>6+ years experience</li>
                <li>Continuously trained in latest techniques</li>
                <li>Top-performing professional</li>
              </ul>
            </div>

            {/* Personalized Care */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10 hover:border-accent-rose/30 transition-colors">
              <h3 className="text-xl font-serif text-accent-rose mb-4">
                Personalized Care
              </h3>
              <ul className="space-y-2 text-light-secondary">
                <li>Custom treatment plans</li>
                <li>One-on-one consultations</li>
                <li>Results-focused approach</li>
              </ul>
            </div>

            {/* Advanced Technology */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10 hover:border-accent-rose/30 transition-colors">
              <h3 className="text-xl font-serif text-accent-rose mb-4">
                Advanced Technology
              </h3>
              <ul className="space-y-2 text-light-secondary">
                <li>State-of-the-art equipment</li>
                <li>Cutting-edge treatments</li>
                <li>Professional-grade products</li>
              </ul>
            </div>

            {/* Bilingual Service */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10 hover:border-accent-rose/30 transition-colors">
              <h3 className="text-xl font-serif text-accent-rose mb-4">
                Bilingual Service
              </h3>
              <ul className="space-y-2 text-light-secondary">
                <li>Serving clients comfortably in both English and Spanish</li>
                <li>Servicios en Español disponibles</li>
                <li>Welcoming diverse community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="py-16 md:py-24 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-12">
            Professional Journey
          </h2>
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Timeline Item */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">2014-2017</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Hospitality Management Education
                  </div>
                  <div className="text-light-secondary">
                    San Ignacio University (Peru & Miami)
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">2018</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Career Begins in Esthetics
                  </div>
                  <div className="text-light-secondary">
                    Rosi Bernal Beauty and Spa, Florida
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">2018-2020</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Massage Therapy Assistant
                  </div>
                  <div className="text-light-secondary">
                    Rejuvenate Spa, Dallas
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">March 2020</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Founded Beauty & Health
                  </div>
                  <div className="text-light-secondary">
                    Now Beauty Sanctuary by Carmen Marin
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">2021</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Licensed Esthetician
                  </div>
                  <div className="text-light-secondary">
                    ITS Academy of Beauty, Miami, FL
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">April 2022 - Present</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Lead Esthetician
                  </div>
                  <div className="text-light-secondary">
                    Hand & Stone, Euless TX
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-accent-rose rounded-full mt-2"></div>
                </div>
                <div className="pb-8 border-l-2 border-accent-rose/20 pl-6 -ml-[7px] group-last:border-transparent">
                  <div className="text-accent-rose font-semibold mb-2">Present</div>
                  <div className="text-light-primary font-serif text-lg mb-2">
                    Owner & Lead Esthetician
                  </div>
                  <div className="text-light-secondary">
                    Beauty Sanctuary by Carmen Marin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Client Testimonials */}
      <FeaturedTestimonials />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg text-light-secondary mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover personalized treatments designed
              to help you look and feel your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/QOHU55QBGYWRMJUZB6QLGKRP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-rose text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-accent-rose/90 transition-all hover:scale-105"
              >
                Book In-Person Consultation
              </Link>
              <Link
                href="https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/TQ7J74GD4GQCBD2GXFPUYSTN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-accent-rose text-accent-rose px-8 py-4 rounded-full font-semibold hover:bg-accent-rose hover:text-dark-bg transition-all hover:scale-105"
              >
                Schedule Virtual Consultation
              </Link>
            </div>

            <div className="text-light-secondary">
              <p className="mb-2">Serving Euless, Texas and surrounding areas</p>
              <p className="text-sm">Bilingual services available in English & Spanish</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
