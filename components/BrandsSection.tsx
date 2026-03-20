export default function BrandsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
          Trusted by brands that care about creator-led growth
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900">
          Trusted by leading brands
        </h2>

        <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
          D2C, fintech and consumer brands use{" "}
          <span className="font-medium">yourBrand</span> to run always-on influencer campaigns.
        </p>

        {/* ✅ LOGOS */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">

          <img src="https://dummyimage.com/120x40/000/fff&text=Brand1" className="mx-auto opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/120x40/000/fff&text=Brand2" className="mx-auto opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/120x40/000/fff&text=Brand3" className="mx-auto opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/120x40/000/fff&text=Brand4" className="mx-auto opacity-70 hover:opacity-100" />
          <img src="https://dummyimage.com/120x40/000/fff&text=Brand5" className="mx-auto opacity-70 hover:opacity-100" />

        </div>

        <p className="mt-8 text-xs text-gray-400">
          Join 120+ brands that trust our influencer hunting team.
        </p>
      </div>
    </section>
  );
}