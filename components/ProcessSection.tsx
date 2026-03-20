export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50 text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        How We Work
      </h2>

      {/* Steps */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* Step 1 */}
        <div>
          <div className="text-4xl font-bold text-yellow-400 mb-4">01</div>
          <h3 className="text-xl font-semibold mb-2">Strategy</h3>
          <p className="text-gray-500">
            We understand your brand and create a tailored plan.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <div className="text-4xl font-bold text-yellow-400 mb-4">02</div>
          <h3 className="text-xl font-semibold mb-2">Execution</h3>
          <p className="text-gray-500">
            We collaborate with creators to launch campaigns.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <div className="text-4xl font-bold text-yellow-400 mb-4">03</div>
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <p className="text-gray-500">
            We track performance and optimize for better ROI.
          </p>
        </div>

      </div>

    </section>
  )
}