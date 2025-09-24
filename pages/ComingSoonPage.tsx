
import React from 'react';

interface ComingSoonPageProps {
    title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center py-24 sm:py-32">
        <div className="max-w-md mx-auto px-4 text-center">
            <div className="bg-white border border-[#EAEAEA] rounded-2xl p-8 shadow-lg">
                <h1 className="font-display text-3xl md:text-4xl font-bold">{title}</h1>
                <p className="mt-4 text-gray-600">
                    Coming soon. Currently in development.
                </p>
                <p className="mt-2 text-gray-600">
                    We’re automating the full pipeline. Leave your email and we’ll invite you first.
                </p>
                <form className="mt-8 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-grow w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#111] focus:border-transparent"
                    />
                    <button type="submit" className="px-4 py-2 bg-[#111] text-white font-semibold rounded-md hover:bg-gray-800">
                        Notify Me
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ComingSoonPage;
