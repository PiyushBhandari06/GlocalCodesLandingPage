const features = [
  {
    title: "Stay Compliant",
    description: "We ensure your filings meet IRS requirements and deadlines",
  },
  {
    title: "Reduce Penalties",
    description:
      "Accurate preparation lowers the risk of costly errors and late fees",
  },
  {
    title: "Be Fully Prepared",
    description:
      "Clean books and organized records make filing smooth and predictable",
  },
];

export default function TaxSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-20 flex items-center justify-center ">
            <img
              src="/Tax-icon.png"
              alt="Tax icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary mb-12">
          Why Businesses Choose{" "}
          <span className="text-accent italic font-extrabold">Glocal Accounting</span>
          <br />
          During Tax Season ?
        </h2>

        {/* Feature Cards */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
          {features.map((feature) => (
            <div key={feature.title} className="flex w-full md:w-auto">
              {/* Card */}
              <div className="flex-1 md:px-6 lg:px-8">
                <div className="rounded-4xl p-px bg-linear-to-r from-[#EC2F6B] to-[#315A68]">
                  <div className="bg-white rounded-4xl shadow-sm hover:shadow-4xl transition-shadow p-6 w-full max-w-sm h-36 mx-auto md:max-w-none md:w-80 md:h-40 text-center flex flex-col items-center justify-start">
                    <h3 className="text-accent font-extrabold text-xl md:text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-black-1 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
