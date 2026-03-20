export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        Our Services
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Influencer Marketing
          </h3>
          <p className="text-gray-500">
            Connect brands with creators for powerful campaigns.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Content Strategy
          </h3>
          <p className="text-gray-500">
            Build content that converts and scales your brand.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Campaign Management
          </h3>
          <p className="text-gray-500">
            End-to-end campaign execution with real results.
          </p>
        </div>

      </div>

    </section>
  )
}