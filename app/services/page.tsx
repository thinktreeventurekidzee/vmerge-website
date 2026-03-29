"use client";

export default function ServicesPage() {

  const allServices = [
    {
      name: "Beauty Influencers",
      icon: "💄",
      description: "Premium beauty creators for makeup, skincare & fashion brands",
      stats: "15K+ Creators",
      href: "#beauty"
    },
    {
      name: "Gaming Creators",
      icon: "🎮",
      description: "Esports & gaming influencers for authentic community engagement",
      stats: "8K+ Gamers",
      href: "#gaming"
    },
    {
      name: "Finance Experts",
      icon: "💰",
      description: "FinTech specialists & investment advisors with trusted audiences",
      stats: "5K+ Experts",
      href: "#finance"
    },
    {
      name: "Tech Reviews",
      icon: "💻",
      description: "Gadget reviewers & tech YouTubers driving purchase decisions",
      stats: "12K+ Techies",
      href: "#tech"
    },
    {
      name: "Health & Fitness",
      icon: "🏋️",
      description: "Fitness trainers, yoga gurus & wellness influencers",
      stats: "10K+ Trainers",
      href: "#health"
    },
    {
      name: "Comedy Content",
      icon: "😂",
      description: "Viral comedians & roast creators for maximum engagement",
      stats: "7K+ Comedians",
      href: "#comedy"
    },
    {
      name: "Education Channels",
      icon: "🎓",
      description: "Subject matter experts & educational content creators",
      stats: "9K+ Educators",
      href: "#education"
    },
    {
      name: "Food & Travel Vlogs",
      icon: "🌍",
      description: "Lifestyle vloggers for authentic brand storytelling",
      stats: "11K+ Vloggers",
      href: "#vlogs"
    },
    {
      name: "Short Form Experts",
      icon: "📱",
      description: "Reels, Shorts & viral content creators",
      stats: "20K+ Creators",
      href: "#shorts"
    },
    {
      name: "Enterprise Solutions",
      icon: "🏢",
      description: "Custom campaigns for BFSI, FMCG & global brands",
      stats: "Custom",
      href: "#enterprise"
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            10+ Influencer Categories
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the right creators across every niche. From beauty to fintech,
            we help brands scale with high-performing influencer campaigns.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {allServices.map((service) => (
            <button
              key={service.name}
              onClick={() => {
                const el = document.querySelector(service.href);
                if (el) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group p-6 rounded-2xl border border-slate-200 bg-white shadow hover:shadow-xl transition text-left"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-slate-900">
                {service.name}
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                {service.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-emerald-600">
                {service.stats}
              </p>
            </button>
          ))}

        </div>
      </section>

      {/* ANCHOR SECTIONS */}
      {allServices.map((service) => (
        <section
          key={service.name}
          id={service.href.replace("#", "")}
          className="py-24 bg-slate-50"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="text-5xl mb-6">{service.icon}</div>

            <h2 className="text-3xl font-bold text-slate-900">
              {service.name}
            </h2>

            <p className="mt-3 text-slate-600">
              {service.description}
            </p>

            <p className="mt-4 text-lg font-semibold text-emerald-600">
              {service.stats}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Ready to launch your campaign?
          </h2>

          <p className="mt-4 text-slate-600">
            Tell us your goals — we’ll connect you with the right creators.
          </p>

          <a
            href="#lead-form"
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-full font-medium hover:scale-105 transition"
          >
            Start Campaign 🚀
          </a>
        </div>
      </section>
    </>
  );
}