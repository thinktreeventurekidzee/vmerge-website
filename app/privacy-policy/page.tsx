export default function PrivacyPolicy() {
  return (
    <main className="bg-sky-100 text-slate-900">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-sky-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Legal
          </span>

          <h1 className="mt-6 text-3xl font-bold text-blue-500 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:mt-6 sm:text-base md:text-lg">
            Vmerg Media Pvt Ltd values your privacy and is committed to
            protecting your personal information while providing influencer
            marketing and campaign management services.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500 sm:mt-8 sm:text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Effective date: April 17, 2026
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Last updated: April 17, 2026
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Applies to brands, creators, clients, leads, and website visitors
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          {/* SIDEBAR – desktop only */}
          <aside className="hidden self-start md:sticky md:top-24 md:block">
            <nav className="space-y-3">
              {[
                ["overview", "Overview"],
                ["data-we-collect", "Information We Collect"],
                ["how-we-use-data", "How We Use Your Information"],
                ["sharing", "Data Sharing & Disclosure"],
                ["cookies", "Cookies & Tracking"],
                ["security", "Data Security"],
                ["retention", "Data Retention"],
                ["your-rights", "Your Rights"],
                ["legal-compliance", "Legal Compliance"],
                ["third-party-links", "Third-Party Links"],
                ["updates", "Updates to this Policy"],
                ["contact", "Contact Us"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-300 hover:text-black"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="space-y-10 sm:space-y-12">
            {/* 1. Overview */}
            <section id="overview">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Overview
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
                This Privacy Policy explains how Vmerg Media Pvt Ltd
                (&quot;Vmerg&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) collects, uses, stores, shares, and protects
                your personal information when you interact with our website,
                social channels, campaigns, and services.
              </p>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                By using our services or interacting with us as a brand,
                creator, client, or lead, you agree to the practices described
                in this Privacy Policy, subject to applicable laws in India.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="data-we-collect">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Information We Collect
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We may collect the following categories of information,
                depending on how you interact with us:
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-blue-50 p-4 sm:mt-5 sm:p-6">
                <ul className="space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                  <li>
                    <span className="font-semibold">Personal Information:</span>{" "}
                    Name, email address, phone number, and address.
                  </li>
                  <li>
                    <span className="font-semibold">Professional Information:</span>{" "}
                    Social media handles, public profile information, audience
                    insights, and engagement data relevant to collaborations.
                  </li>
                  <li>
                    <span className="font-semibold">Financial Information:</span>{" "}
                    Payment details, billing information, and related transaction
                    data (as required for processing payments and invoices).
                  </li>
                  <li>
                    <span className="font-semibold">Technical Data:</span> IP
                    address, browser type, device information, operating system,
                    referring URLs, and cookie identifiers.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Communication & Interaction Data:
                    </span>{" "}
                    Emails, messages, call records, proposals, campaign briefs,
                    and feedback shared with us.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use-data">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                How We Use Your Information
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We use your information for the following purposes:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>
                  To connect brands with suitable influencers/creators and
                  manage end-to-end influencer marketing campaigns.
                </li>
                <li>
                  To communicate campaign details, briefs, updates, offers, and
                  other relevant information.
                </li>
                <li>
                  To process payments, invoices, agreements, and other financial
                  transactions.
                </li>
                <li>
                  To analyze performance metrics, campaign results, and
                  engagement data to improve our services.
                </li>
                <li>
                  To maintain security, detect and prevent fraud, abuse,
                  unauthorized access, or other harmful activities.
                </li>
                <li>
                  To comply with legal, regulatory, tax, or contractual
                  obligations.
                </li>
              </ul>
            </section>

            {/* 4. Data Sharing & Disclosure */}
            <section id="sharing">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Data Sharing and Disclosure
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We may share your information only in the following situations:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>
                  With{" "}
                  <span className="font-semibold">
                    brands, agencies, and influencers
                  </span>{" "}
                  for the purpose of collaboration, campaign planning, and
                  execution.
                </li>
                <li>
                  With{" "}
                  <span className="font-semibold">
                    trusted third-party service providers
                  </span>{" "}
                  such as payment gateways, analytics tools, CRM platforms, ad
                  platforms, or cloud hosting providers, strictly for business
                  operations.
                </li>
                <li>
                  With{" "}
                  <span className="font-semibold">
                    legal or regulatory authorities
                  </span>{" "}
                  where required by applicable law, court order, or to protect
                  our rights, safety, or the rights of others.
                </li>
              </ul>

              <p className="mt-3 text-sm font-semibold text-slate-700 sm:text-base">
                We do <span className="underline">not</span> sell or rent your
                personal data to any third party.
              </p>
            </section>

            {/* 5. Cookies & Tracking */}
            <section id="cookies">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Cookies and Tracking Technologies
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We use cookies and similar tracking technologies to:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>Enhance your browsing experience on our website.</li>
                <li>
                  Understand user behavior, traffic patterns, and website
                  performance.
                </li>
                <li>
                  Customize content, improve functionality, and optimize
                  campaigns.
                </li>
              </ul>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                You can manage or disable cookies through your browser settings.
                However, disabling some cookies may impact certain features of
                our website.
              </p>
            </section>

            {/* 6. Data Security */}
            <section id="security">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Data Security
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We implement appropriate technical and organizational measures
                to protect your personal data, including:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>Use of secure servers and encrypted connections.</li>
                <li>
                  Restricted access to sensitive data on a need-to-know basis.
                </li>
                <li>Regular monitoring and basic security best practices.</li>
              </ul>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                While we strive to protect your information, no method of
                transmission over the internet or method of electronic storage
                is completely secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section id="retention">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Data Retention
              </h2>

              <ul className="mt-3 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes described in this Privacy Policy, or as
                  required for business, legal, accounting, or reporting
                  obligations.
                </li>
                <li>
                  Data may be retained for a longer period where required to
                  comply with applicable laws, resolve disputes, or enforce our
                  agreements.
                </li>
              </ul>
            </section>

            {/* 8. Your Rights */}
            <section id="your-rights">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Your Rights
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Subject to applicable laws, you may have the following rights
                regarding your personal data:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:space-y-4 sm:text-base">
                <li>To access and review the personal data we hold about you.</li>
                <li>To update or correct inaccurate or incomplete information.</li>
                <li>
                  To request deletion of your data, subject to legal or
                  contractual obligations that may require retention.
                </li>
                <li>
                  To withdraw consent where processing is based on your consent.
                </li>
              </ul>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To exercise these rights, please contact us using the details
                provided in the{" "}
                <a href="#contact" className="text-blue-600 underline">
                  Contact Us
                </a>{" "}
                section below.
              </p>
            </section>

            {/* 9. Legal Compliance */}
            <section id="legal-compliance">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Legal Compliance
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We comply with applicable data protection laws in India,
                including the Information Technology Act, 2000, the relevant IT
                Rules, and other applicable regulations, as updated from time to
                time. Where required, we obtain your consent before collecting
                or processing certain categories of data. [web:81][web:84]
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section id="third-party-links">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Third-Party Links
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Our website, social media pages, or campaigns may contain links
                to third-party websites, tools, or platforms. We are not
                responsible for the privacy practices, security, or content of
                such third-party services. We encourage you to review their
                privacy policies separately.
              </p>
            </section>

            {/* 11. Updates to this Policy */}
            <section id="updates">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Updates to This Privacy Policy
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, services, or legal requirements. Any
                updates will be posted on this page with an updated &quot;Last
                Updated&quot; date. We encourage you to review this page
                periodically.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section id="contact">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, you can contact us at:
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-blue-50 p-4 sm:mt-5 sm:p-6">
                <div className="space-y-2 text-sm text-slate-700 sm:text-base">
                  <p>
                    <span className="font-semibold">Company:</span> Vmerg Media
                    Pvt Ltd
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    vmergmedia@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +91 86607
                    83740
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> Bengaluru,
                    India
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}