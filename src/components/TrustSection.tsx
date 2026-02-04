const testimonials = [
  {
    quote:
      '"Glocal Accounting helped us organize months of financial records and file on time without stress. Their team made complex deadlines feel manageable."',
  },
  {
    quote:
      '"We were behind on reconciliations and unsure about 1099 filings. Glocal stepped in, fixed everything, and kept us penalty-free."',
  },
]

export default function TrustSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Shield Icon Placeholder */}
          <div className="flex justify-center mb-6">
            <img src="/ICON 2.png" alt="Shield Icon" className="w-25 h-25" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-[clamp(1rem,2.4vw,1.875rem)] whitespace-nowrap mb-12">
          <span className="text-accent italic font-semibold">Trusted by Businesses</span>{" "}
          <span className="text-primary font-semibold">That Can't Afford Filing Mistakes</span>
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-col gap-6">
          {/* First Testimonial */}
          <div className="relative w-full mx-auto mb-6">
            <div className="rounded-[2.5rem] p-0.5 bg-[linear-gradient(-73deg,rgba(236,47,107,0.6)_0%,rgba(49,90,104,0.6)_100%)] overflow-hidden">
              <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm min-h-50 md:min-h-55 flex items-center justify-center">
                <p className="text-black-1 text-lg md:text-xl text-center px-20">
                  {testimonials[0].quote}
                </p>
                {/* Decorative Quote Mark */}
                <img
                  src="/COMA.png"
                  alt="COMA img"
                  className="pt-6 absolute -bottom-12 right-12 w-30 h-30 opacity-100 select-none pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="relative w-full mx-auto mt-4">
            <div className="rounded-[2.5rem] p-0.5 bg-[linear-gradient(90deg,rgba(236,47,107,0.6)_0%,rgba(49,90,104,0.6)_100%)] overflow-hidden">
              <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm min-h-50 md:min-h-55 flex items-center justify-center">
                <p className="text-black-1 text-lg md:text-xl text-center px-20">
                  {testimonials[1].quote}
                </p>
                {/* Decorative Quote Mark */}
                <img
                  src="/COMA.png"
                  alt="COMA img"
                  className="pt-6 absolute -bottom-12 right-12 w-30 h-30 opacity-100 select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
