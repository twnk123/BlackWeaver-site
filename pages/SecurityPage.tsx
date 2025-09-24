
import React from 'react';
import Button from '../components/Button';

interface SecurityCardProps {
    title: string;
    children: React.ReactNode;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-[#EAEAEA] shadow-sm">
        <h2 className="font-display text-2xl font-bold">{title}</h2>
        <div className="mt-4 text-gray-600 space-y-3">{children}</div>
    </div>
);


const SecurityPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold">QA & Provenance</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Our commitment to secure, compliant, and high-quality software delivery.
        </p>
      </div>

      <div className="mt-20 space-y-8">
        <SecurityCard title="Hosting & Data">
            <p>We build on modern, secure provider infrastructure. While you manage your own hosting account, we ensure our builds are compatible with platforms that meet high security standards, including those with ISO 27001 and SOC 2 certifications at the infrastructure level.</p>
        </SecurityCard>
        <SecurityCard title="GDPR-aligned">
            <p>Our process is designed with privacy in mind. We advocate for minimal data collection, ensure user consent for non-essential cookies via optional add-ons, and structure our builds to support simple data deletion and export requests, helping you align with GDPR principles.</p>
        </SecurityCard>
        <SecurityCard title="Accessibility Basics">
            <p>We believe the web should be accessible to everyone. Our builds include fundamental accessibility features like keyboard navigation support, semantic HTML for screen readers, sufficient color contrast (WCAG AA on our standard themes), and alt text for all content images.</p>
        </SecurityCard>
        <SecurityCard title="Performance Target">
            <p>Slow websites lose users. We target a Google Lighthouse performance score of 90+ for our builds. Final scores can depend on your content (e.g., large images) and hosting provider, but we give you a highly optimized foundation to build upon.</p>
        </SecurityCard>
      </div>

      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="mailto:dpa@blackweaver.com" className="inline-block text-center text-sm font-semibold rounded-lg px-6 py-3 transition-all duration-200 bg-white text-[#111] border border-[#EAEAEA] hover:bg-[#EFEFEF] hover:border-gray-300 w-full sm:w-auto">
            Request DPA
        </a>
        <Button to="/configurator" variant="primary" className="w-full sm:w-auto">Start Configurator</Button>
      </div>
    </div>
  );
};

export default SecurityPage;
