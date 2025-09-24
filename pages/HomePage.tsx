
import React from 'react';
import Button from '../components/Button';
import { PRICING_TIERS, ADDONS, FEATURE_PACKS_TEASER, PROCESS_STEPS } from '../constants';
import PricingCard from '../components/PricingCard';
import RoiCalculator from '../components/RoiCalculator';
import { Link } from 'react-router-dom';

const ProofChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-[#F7F7F8] rounded-full px-4 py-2 text-sm font-semibold text-[#111] border border-[#EAEAEA]">
    {children}
  </div>
);

const CauseCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl border border-[#EAEAEA]">
        <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const FeatureTeaserCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white p-5 rounded-2xl border border-[#EAEAEA] group-hover:shadow-lg transition-all transform hover:-translate-y-1">
        <h4 className="font-display font-bold text-base">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[#111] leading-tight">
            Ship production software in days. You own the code.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Websites in 3–5 business days at a flat price. Clear scope, human review, full source handover.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ProofChip>3–5 day delivery</ProofChip>
            <ProofChip>Full source code</ProofChip>
            <ProofChip>Median savings €5,000</ProofChip>
            <ProofChip>Time saved 8–12 weeks</ProofChip>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button to="/configurator" variant="primary">Start Configurator</Button>
            <Button to="/#pricing" variant="secondary">See Pricing</Button>
          </div>
        </div>
      </section>

      {/* Cause Section */}
      <section className="bg-[#F7F7F8] py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="font-display text-4xl font-bold">To hell with bloat.</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                <CauseCard title="Overpriced Agencies">Months of process and five-figure bills for what should be a simple build.</CauseCard>
                <CauseCard title="Template Resellers">€49 themes from a marketplace, sold to you as “custom work” for thousands.</CauseCard>
                <CauseCard title="Hourly Drip Billers">Paying for delays, not for results. Incentivized to be slow and inefficient.</CauseCard>
            </div>
        </div>
      </section>

      {/* Feature Packs Teaser */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center">
             <h2 className="font-display text-4xl font-bold">Feature Packs</h2>
             <p className="mt-4 text-lg text-gray-600">Plug-and-play capabilities for your project.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            {FEATURE_PACKS_TEASER.map(pack => (
                <Link to="/feature-packs" key={pack.name} className="group">
                    <FeatureTeaserCard title={pack.name} description={pack.description} />
                </Link>
            ))}
        </div>
        <div className="text-center mt-8">
            <Link to="/feature-packs" className="font-semibold text-[#111] hover:underline">View all packs &rarr;</Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
             <h2 className="font-display text-4xl font-bold">Our Process</h2>
             <p className="mt-4 text-lg text-gray-600">From idea to handover in four clear steps.</p>
        </div>
        <div className="mt-12 border border-[#EAEAEA] rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {PROCESS_STEPS.map((step, index) => (
                <div key={step.name} className="relative">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#F7F7F8] border border-[#EAEAEA] rounded-full flex items-center justify-center font-bold font-display text-lg">{index + 1}</div>
                        <h3 className="mt-4 font-display text-xl font-bold">{step.name}</h3>
                        <p className="mt-1 text-gray-500">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold">Flat-Rate Website Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Transparent, fixed prices. No surprises.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {PRICING_TIERS.map(tier => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <div className="mt-16">
            <h3 className="text-center font-display text-2xl font-bold">Common Add-ons</h3>
            <div className="mt-8 max-w-4xl mx-auto border border-[#EAEAEA] rounded-2xl p-6">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {ADDONS.map(addon => (
                    <li key={addon.name} className="flex justify-between items-baseline">
                        <span className="text-gray-700">{addon.name} {addon.description && <span className="text-gray-400 text-sm">{addon.description}</span>}</span>
                        <span className="font-semibold text-[#111]">€{addon.price}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-[#F7F7F8] py-20">
          <div className="max-w-5xl mx-auto px-4">
              <div className="text-center">
                  <h2 className="font-display text-4xl font-bold">ROI Calculator</h2>
                  <p className="mt-4 text-lg text-gray-600">See your potential savings against traditional agency builds.</p>
              </div>
              <RoiCalculator />
          </div>
      </section>

      {/* Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold">Recent Builds</h2>
         <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <img src="https://picsum.photos/seed/project1/600/400" alt="Project 1 Screenshot" className="rounded-xl aspect-video object-cover" loading="lazy" />
                <p className="mt-4 font-semibold">Fintech Landing Page</p>
                <p className="text-sm text-gray-500">Delivered in 4 days</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <img src="https://picsum.photos/seed/project2/600/400" alt="Project 2 Screenshot" className="rounded-xl aspect-video object-cover" loading="lazy" />
                <p className="mt-4 font-semibold">SaaS Company Blog</p>
                <p className="text-sm text-gray-500">CMS integration in 5 days</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#EAEAEA] p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <img src="https://picsum.photos/seed/project3/600/400" alt="Project 3 Screenshot" className="rounded-xl aspect-video object-cover" loading="lazy" />
                <p className="mt-4 font-semibold">E-commerce Product Showcase</p>
                 <p className="text-sm text-gray-500">Shop-Lite deployed</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
