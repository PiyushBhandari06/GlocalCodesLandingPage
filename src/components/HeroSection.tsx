import { useRef } from "react";
import { Phone } from "lucide-react";
import emailjs from "emailjs-com";

export default function HeroSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ld9aamk",
        "template_tfzsilf",
        formRef.current,
        "1kcDRvGmNSfn7s_IC"
      )
      .then(() => {
        alert("Form submitted successfully ✅");
        formRef.current?.reset();
      })
      .catch((err) => {
        alert("Failed ❌ " + err.text);
      });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 py-3 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] items-start gap-1 md:gap-2">
          
          {/* Left Content */}
          <div className="pt-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-accent italic font-semibold">Tax Deadlines</span>
              <br />
              <span className="text-primary ">Are Closer</span>
              <br />
              <span className="text-primary ">Than You Think</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-none">
              Avoid penalties. Stay compliant.
              <br />
              Get expert support from{" "}
              <span className="font-semibold text-gray-800 italic">
                Glocal Accounting
              </span>
              <br />
              before time runs out.
            </p>

            <p className="text-primary text-base md:text-lg font-medium py-5">
              1099 • W-2 • Bookkeeping • Tax Preparation • IRS Compliance
            </p>
          </div>

          {/* Right Form Card */}
          <div className="w-full bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-[0_-4px_12px_rgba(148,163,184,0.2),0_6px_14px_rgba(148,163,184,0.25)]">
            <h2 className="text-xl md:text-2xl font-bold text-black-1 text-center mb-1">
              Get Started Today
            </h2>
            <p className="text-black-1 text-xs text-center mb-6">
              Fill out the form and we'll be in touch within 24 hours
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4 py-1">
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4 py-1">
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4 py-1">
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-black-1 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border-b border-rose-400 py-2 text-sm focus:outline-none  bg-transparent"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-xs text-black-1 mb-1">
                  Please Describe The Type Of Service You Are Interested In
                </label>
                <textarea
                  rows={2}
                  name="message"
                  className="w-full border-b border-rose-400 py-1 text-sm focus:outline-none  bg-transparent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[85%] mx-auto bg-linear-to-r from-[#EC2F6B] to-[#315A68] text-white font-medium py-3 rounded-full transition-all flex items-center justify-center gap-2 hover:from-[#d9265f] hover:to-[#2a4e5b] hover:shadow-md hover:cursor-pointer"
              >
                <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                <span>Partner With Us</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
