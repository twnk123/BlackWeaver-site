
import React, { useState } from 'react';
import Button from '../components/Button';

interface Project {
    id: number;
    title: string;
    result: string;
    imageUrl: string;
    buildNotes: string[];
}

const projects: Project[] = [
    { id: 1, title: "Fintech Startup Landing", result: "Launched MVP marketing site in 3 days, enabling first user signups.", imageUrl: "https://picsum.photos/seed/studio1/600/450", buildNotes: ["Used 'Standard' complexity tier.", "Integrated with a third-party newsletter service.", "Performance-tuned for a Lighthouse score of 95+."] },
    { id: 2, title: "Consulting Agency Website", result: "Delivered a 7-page site with a CMS for case studies and a booking calendar.", imageUrl: "https://picsum.photos/seed/studio2/600/450", buildNotes: ["'Advanced' tier with Bookings-Lite and CMS packs.", "Custom post types created for 'Team' and 'Services'.", "Full source code handed over for internal team to manage."] },
    { id: 3, title: "E-commerce Pre-launch", result: "Built a 'coming soon' page with email capture that generated 1,000+ leads.", imageUrl: "https://picsum.photos/seed/studio3/600/450", buildNotes: ["Simple 'Basic' tier one-pager.", "Hooked up to Mailchimp via the 'Newsletter Hookup' addon.", "Delivered in 2 business days."] },
    { id: 4, title: "SaaS Analytics Dashboard", result: "Password-protected area for beta users to view early data.", imageUrl: "https://picsum.photos/seed/studio4/600/450", buildNotes: ["Utilized the 'Auth-Lite' feature pack.", "Included simple data tables and placeholder charts.", "Provided a secure environment for user testing."] },
    { id: 5, title: "Author Portfolio & Blog", result: "A clean, fast blog and portfolio site with an integrated CMS for new posts.", imageUrl: "https://picsum.photos/seed/studio5/600/450", buildNotes: ["'Standard' complexity with the 'Blog' addon.", "SEO+ addon used for rich snippets and social sharing previews.", "Client was able to add new content on day of handover."] },
    { id: 6, title: "Local Restaurant Site", result: "Online menu, contact form, and reservation booking.", imageUrl: "https://picsum.photos/seed/studio6/600/450", buildNotes: ["Combined 'Bookings-Lite' and a CMS for menu management.", "Mobile-first design for customers on the go.", "Google Maps integration for directions."] },
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div className="group cursor-pointer" onClick={onClick}>
        <div className="overflow-hidden rounded-2xl">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover aspect-[4/3] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" loading="lazy" />
        </div>
        <h3 className="font-display font-bold text-xl mt-4">{project.title}</h3>
        <p className="text-gray-600 mt-1">{project.result}</p>
        <p className="font-semibold text-sm mt-2 text-[#111] group-hover:underline">View build notes</p>
    </div>
);

const Modal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full" onClick={e => e.stopPropagation()}>
                <h2 className="font-display font-bold text-2xl">{project.title}</h2>
                <img src={project.imageUrl} alt={project.title} className="w-full object-cover aspect-video rounded-xl mt-4" />
                <h3 className="font-display font-bold text-lg mt-6 mb-2">Build Notes</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.buildNotes.map((note, i) => <li key={i}>{note}</li>)}
                </ul>
                <button onClick={onClose} className="mt-6 w-full bg-gray-100 py-2 rounded-lg font-semibold hover:bg-gray-200">Close</button>
            </div>
        </div>
    );
};


const StudioPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
            <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
            <div className="text-center">
                <h1 className="font-display text-5xl md:text-6xl font-bold">Studio</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    A selection of recent projects built with the BlackWeaver engine.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <Button to="/configurator" variant="primary">Build Your Own</Button>
            </div>
        </div>
    );
};

export default StudioPage;
