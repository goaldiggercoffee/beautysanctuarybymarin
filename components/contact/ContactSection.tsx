const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-light-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-light-secondary max-w-3xl">
            Ready to start your transformation? Contact us today to book your consultation
            or ask any questions. We&apos;re here to help you look and feel your best.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info & Social */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10">
              <h3 className="text-2xl font-serif text-accent-rose mb-4">
                Phone
              </h3>
              <a
                href="tel:4696649996"
                className="text-2xl text-light-primary hover:text-accent-rose transition-colors font-semibold block"
              >
                (469) 664-9996
              </a>
              <p className="text-light-secondary mt-2 text-sm">
                Call or text for appointments and inquiries
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10">
              <h3 className="text-2xl font-serif text-accent-rose mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/beauty_sanctuary_by_cm/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-dark-bg rounded-full border-2 border-accent-rose/20 hover:border-accent-rose hover:bg-accent-rose/10 transition-all group"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-7 h-7 text-light-primary group-hover:text-accent-rose transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/BHbyCarmenMarin/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-dark-bg rounded-full border-2 border-accent-rose/20 hover:border-accent-rose hover:bg-accent-rose/10 transition-all group"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-7 h-7 text-light-primary group-hover:text-accent-rose transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <p className="text-light-secondary mt-4 text-sm">
                Follow us for tips, transformations, and special offers
              </p>
            </div>

            {/* Address */}
            <div className="bg-dark-secondary p-8 rounded-lg border border-accent-rose/10">
              <h3 className="text-2xl font-serif text-accent-rose mb-4">
                Location
              </h3>
              <address className="not-italic text-light-primary space-y-1">
                <p className="font-semibold">Beauty Sanctuary by Carmen Marin</p>
                <p>1321 Chisholm Trail</p>
                <p>Suite 200, Spa Room 2</p>
                <p>Euless, TX 76039</p>
              </address>
              <a
                href="https://maps.google.com/?q=1321+Chisholm+Trail+Suite+200+Euless+TX+76039"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-accent-rose hover:text-accent-rose/80 transition-colors font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="h-full min-h-[600px]">
            <div className="bg-dark-secondary rounded-lg border border-accent-rose/10 overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.8901234567!2d-97.0834567!3d32.8378900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d4e7d4e7d4e%3A0x7d4e7d4e7d4e7d4e!2s1321%20Chisholm%20Trail%20Suite%20200%2C%20Euless%2C%20TX%2076039!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty Sanctuary Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-light-secondary mb-6">
            Bilingual services available in English & Spanish | Servicios en Español disponibles
          </p>
          <a
            href="https://www.vagaro.com/beautysanctuarybycarmenmarin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-rose text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-accent-rose/90 transition-all hover:scale-105 shadow-lg shadow-accent-rose/20"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
