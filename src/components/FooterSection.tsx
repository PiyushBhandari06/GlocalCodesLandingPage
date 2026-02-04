import { Phone, Mail, Globe } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="w-full bg-primary rounded-t-[3rem] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl mb-2 pt-10">
          Schedule My <span className="font-bold italic">Tax Consultation</span>
        </h2>
        <h3 className="text-white text-2xl md:text-3xl mb-6 ">
          Speak to an <span className="font-bold italic">Accounting Specialist</span>
        </h3>

        {/* Tagline */}
        <p className="text-gray-300 text-lg md:text-xl tracking-wide mb-10 py-10 ">
          Clear timelines. Accurate filings. No last-minute surprises.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 py-2 pb-4 ">
          {/* Contact Pill 1 */}
          <a
            href="tel:+17323444260"
            className="flex items-center gap-3 bg-white/10 border border-white rounded-full h-12 pl-0 pr-4 hover:bg-white/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <span className="text-white text-sm">(+1) 732-344-4260</span>
          </a>

          {/* Contact Pill 2 */}
          <a
            href="mailto:info@glocalas.com"
            className="flex items-center gap-3 bg-white/10 border border-white rounded-full h-12 pl-0 pr-4 hover:bg-white/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <span className="text-white text-sm">info@glocalas.com</span>
          </a>

          {/* Contact Pill 3 */}
          <a
            href="https://www.glocalas.com/"
            className="flex items-center gap-3 bg-white/10 border border-white rounded-full h-12 pl-0 pr-4 hover:bg-white/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Globe className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <span className="text-white text-sm">www.glocalas.com</span>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#home"
          className="inline-block bg-white text-gray-800 font-medium px-8 py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          Get In Touch With Us
        </a>
      </div>
    </footer>
  )
}
