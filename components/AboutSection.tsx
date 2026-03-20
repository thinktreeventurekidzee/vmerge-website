export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
            About VMerg
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            A modern{" "}
            <span className="text-blue-600">
              influencer marketing agency
            </span>{" "}
            built for scale
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Founded in 2021, VMerg helps brands connect with high-impact creators
            across YouTube, Instagram, and digital platforms to drive measurable growth.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">

            <p>
              Headquartered in Bangalore, VMerg operates as a data-driven influencer
              marketing partner for brands across India. We specialize in end-to-end
              campaign execution — from strategy design to influencer selection and launch.
            </p>

            <p>
              With a growing network of creators across 10+ content categories including
              Beauty, Finance, Technology, Gaming, and Lifestyle, we enable brands to
              reach the right audience with precision.
            </p>

            <p>
              Our platform is built to simplify influencer collaborations while ensuring
              scalability, transparency, and performance at every stage.
            </p>

          </div>

          {/* Right Highlights */}
          <div className="grid gap-6">

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg">
                Extensive creator network
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Access influencers across 10+ categories with advanced filtering options.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg">
                Multi-lingual campaigns
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Target audiences across different states and regional demographics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg">
                24/7 support & execution
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Dedicated support to ensure smooth campaign delivery at every step.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg">
                Cost-effective solutions
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Competitive pricing with optimized campaign ROI for brands.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Trusted by growing brands • 1000+ community reach • Built for performance marketing
          </p>
        </div>

      </div>
    </section>
  );
}