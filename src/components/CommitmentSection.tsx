export default function CommitmentSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Handshake Icon */}
        <div className="flex justify-center mb-6">
          <img src="/ICON 4.png" alt="Handshake Icon" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl mb-10">
          <span className="text-primary">Our </span>
          <span className="text-accent italic font-semibold">Commitment</span>
          <span className="text-primary"> to You</span>
        </h2>

        {/* Commitment Items */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Item 1 */}
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(-45deg,#DB1658_0%,#315A68_100%)] flex items-center justify-center shrink-0 z-10 ml-6">
              <img src="Checkmark.png" alt="Checkmark" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 rounded-full p-0.5 -ml-8 bg-[linear-gradient(90deg,#DB1658_0%,#315A68_100%)] shadow-sm overflow-hidden h-16">
              <div className="bg-white rounded-full px-6 h-full text-center flex items-center justify-center">
                <span className="text-black-1 font-semibold text-base leading-tight text-center">
                  Accurate financial preparation
                </span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(-45deg,#DB1658_0%,#315A68_100%)] flex items-center justify-center shrink-0 z-10 ml-6">
              <img src="Checkmark.png" alt="Checkmark" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 rounded-full p-0.5 -ml-8 bg-[linear-gradient(90deg,#DB1658_0%,#315A68_100%)] shadow-sm overflow-hidden h-16">
              <div className="bg-white rounded-full px-6 h-full text-center flex items-center justify-center">
                <span className="text-black-1 font-semibold text-base leading-tight text-center">
                  Timely filing support
                </span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(-45deg,#DB1658_0%,#315A68_100%)] flex items-center justify-center shrink-0 z-10 ml-6">
              <img src="Checkmark.png" alt="Checkmark" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 rounded-full p-0.5 -ml-8 bg-[linear-gradient(90deg,#DB1658_0%,#315A68_100%)] shadow-sm overflow-hidden h-16">
              <div className="bg-white rounded-full px-6 h-full text-center flex items-center justify-center">
                <span className="text-black-1 font-semibold text-base leading-tight text-center">
                  Clear communication at every step
                </span>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(-45deg,#DB1658_0%,#315A68_100%)] flex items-center justify-center shrink-0 z-10 ml-6">
              <img src="Checkmark.png" alt="Checkmark" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 rounded-full p-0.5 -ml-8 bg-[linear-gradient(90deg,#DB1658_0%,#315A68_100%)] shadow-sm overflow-hidden h-16">
              <div className="bg-white rounded-full px-6 h-full text-center flex items-center justify-center">
                <span className="text-black-1 font-semibold text-base leading-tight text-center">
                  Proactive deadline tracking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Text */}
        <p className="text-center text-primary text-2xl md:text-xl mb-16 font-semibold">
          <span className="font-extrabold text-accent italic">We focus</span> on precision, compliance, and making
          <br />
          tax season easier <span className="font-extrabold text-accent italic">for your business.</span>
        </p>

        {/* Calendar/Clipboard Icon */}
        <div className="flex justify-center mb-6">
          <img src="ICON 5.png" alt="Calendar Icon" className="w-30 h-30 object-contain" />
        </div>

        {/* Bottom Heading */}
        <h3 className="text-center text-xl md:text-2xl font-semibold mb-4">
          <span className="text-primary">The </span>
          <span className="text-accent italic">Deadline Is Fixed.</span>
          <span className="text-primary"> Your Preparation Isn't.</span>
        </h3>

        {/* Bottom Subtext */}
        <p className="text-center text-black-1 text-md mb-6">
          Accurate preparation lowers the risk of
          <br />
          costly errors and late fees.
        </p>
      </div>
    </section>
  )
}
