export default function ResultSection() {
  return (
    <section className="w-full py-16 px-4 bg-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Icon Placeholder */}
        <div className="flex justify-center mb-8">
            <img src="/ICON 3.png" alt="Result Icon" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl mb-12">
          <span className="text-primary font-semibold">From </span>
          <span className="text-accent italic font-semibold">Last-Minute Stress</span>
          <span className="text-primary font-semibold"> to Filing With Confidence</span>
        </h2>

        {/* Ribbon Design Placeholder */}
        <div className="w-screen mx-[calc(50%-50vw)]">
          <img src="text-design.png" alt="Ribbon.png" />
        </div>
        
        {/* Result Section */}
        <div className="flex items-center justify-center pt-20">
          {/* Outer container with border for the combined shape */}
          <div className="flex items-stretch border border-primary rounded-3xl overflow-hidden shadow-sm">
            {/* White Result badge on left */}
            <div className="bg-white flex items-center px-6 py-3 border-r border-gray-200 relative">
              <div className="absolute right-0 top-0 h-full w-5 bg-white skew-x-14 origin-top-right border-r border-gray-200" />
              <span className="text-accent text-2xl md:text-3xl font-bold">Result</span>
            {/* Teal section on right */}
            </div>
            <div className="bg-primary flex items-center px-6 py-3">
              <p className="text-white text-sm md:text-base italic text-center">
                No scrambling. No surprises.
                <br />
                Just accurate, timely filing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
