export default function WorkGallery() {
  return (
    <section className="py-20 bg-white text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        Our Work
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {/* Card 1 */}
        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg">
          Project 1
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg">
          Project 2
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg">
          Project 3
        </div>

      </div>

    </section>
  )
}