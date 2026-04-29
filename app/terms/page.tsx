export default function Terms() {
  return (
    <main className="bg-sky-100 text-slate-900">

      {/* HEADER */}
      <section className="border-b border-slate-200 bg-sky-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 md:px-8 md:py-24">

          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Legal
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
            Terms & Conditions
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600">
            These Terms & Conditions govern your access to and use of the Vmerg
            Media Pvt Ltd website, services, communications, and business interactions.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Last updated: April 17, 2026
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Applicable To Website Visitors, Brands, Creators, Partners, And Leads
            </span>
          </div>

        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-14 md:px-8 md:py-16">

        <div className="grid gap-10 md:grid-cols-[220px_1fr]">

          {/* ❌ SIDEBAR MOBILE PE HIDE */}
          <aside className="hidden md:block md:sticky md:top-24 md:self-start">
            <nav className="space-y-3">
              {[
                ["acceptance", "Acceptance of Terms"],
                ["services", "Use of Services"],
                ["accounts", "User Responsibilities"],
                ["campaigns", "Campaign Responsibility"],
                ["ip", "Intellectual Property"],
                ["third-party", "Third-Party Services"],
                ["disclaimer", "Disclaimers"],
                ["liability", "Limitation of Liability"],
                ["termination", "Suspension & Termination"],
                ["law", "Governing Law"],
                ["contact", "Contact Details"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium 
                  text-slate-600 hover:bg-blue-200 hover:text-black transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="space-y-10 sm:space-y-12">

            <section id="acceptance">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Acceptance of Terms
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                By accessing or using this website, you agree to these Terms.
              </p>
            </section>

            <section id="services">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Use of Services
              </h2>

              <div className="mt-4 sm:mt-5 rounded-2xl border border-slate-200 bg-blue-50 p-4 sm:p-6">
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600">
                  <li>Use services lawfully</li>
                  <li>No misuse or hacking</li>
                  <li>We may modify services</li>
                </ul>
              </div>
            </section>

            {/* 👉 SAME FOR REST (only class updates) */}

            <section id="contact">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Contact Details
              </h2>

              <div className="mt-4 sm:mt-5 rounded-2xl border border-slate-200 bg-blue-50 p-4 sm:p-6">

                <div className="space-y-2 text-sm sm:text-base text-slate-700">
                  <p><strong>Company:</strong> Vmerg Media Pvt Ltd</p>
                  <p><strong>Email:</strong> vmergmedia@gmail.com</p>
                  <p><strong>Grievance Officer:</strong> Vmerg Support Team</p>
                  <p><strong>Address:</strong> Bengaluru, India</p>
                  <p><strong>Phone:</strong> +91 86607 83740</p>
                </div>

              </div>
            </section>

          </div>

        </div>

      </section>

    </main>
  );
}