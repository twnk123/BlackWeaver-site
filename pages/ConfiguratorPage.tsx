import React, { useState, useMemo } from 'react';
// FIX: Import Complexity from '../types' instead of '../constants'.
import { PRICING_TIERS, ADDONS } from '../constants';
import { Complexity } from '../types';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import type { PricingTier } from '../types';

// FIX: Destructure props to get 'title'.
const LockedTile: React.FC<{ title: string }> = ({ title }) => (
    <div className="relative bg-[#F7F7F8] border border-[#EAEAEA] rounded-2xl p-6 text-center opacity-60">
        <h3 className="font-display text-xl font-bold text-gray-500">{title}</h3>
        <p className="absolute top-2 right-2 bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">Coming soon</p>
        <p className="text-sm text-gray-400 mt-2">Currently in development.</p>
        <div className="mt-4">
            <input type="email" placeholder="Notify me" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" disabled />
        </div>
    </div>
);

const ConfiguratorPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [complexity, setComplexity] = useState<Complexity | null>(null);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const selectedTier = useMemo(() => {
        return PRICING_TIERS.find(tier => tier.name.toLowerCase() === complexity?.toLowerCase());
    }, [complexity]);

    const totalPrice = useMemo(() => {
        const tierPrice = selectedTier?.price ?? 0;
        const addonsPrice = selectedAddons.reduce((total, addonName) => {
            const addon = ADDONS.find(a => a.name === addonName);
            return total + (addon?.price ?? 0);
        }, 0);
        return tierPrice + addonsPrice;
    }, [selectedTier, selectedAddons]);

    const handleAddonToggle = (addonName: string) => {
        setSelectedAddons(prev =>
            prev.includes(addonName)
                ? prev.filter(name => name !== addonName)
                : [...prev, addonName]
        );
    };
    
    const mailtoHref = useMemo(() => {
        const summary = {
            complexity,
            addons: selectedAddons,
            totalPrice,
            eta: selectedTier?.eta,
        };
        const subject = "New BlackWeaver Project Configuration";
        const body = `Hello BlackWeaver Team,\n\nPlease see my project configuration below:\n\n${JSON.stringify(summary, null, 2)}\n\nI'm ready to start my build.\n\nBest,`;
        return `mailto:build@blackweaver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, [complexity, selectedAddons, totalPrice, selectedTier]);


    return (
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="font-display text-5xl md:text-6xl font-bold">Configurator</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Design your project in a few steps. The final estimate will appear on the last step.
                </p>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center items-center space-x-4 my-12">
                {[1, 2, 3, 4].map(s => (
                    <React.Fragment key={s}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 transition-all ${step >= s ? 'bg-[#111] text-white border-[#111]' : 'bg-white text-gray-400 border-gray-300'}`}>
                        {s}
                    </div>
                    {s < 4 && <div className={`h-0.5 w-16 transition-all ${step > s ? 'bg-[#111]' : 'bg-gray-300'}`}></div>}
                    </React.Fragment>
                ))}
            </div>


            <div className="bg-white border border-[#EAEAEA] rounded-2xl p-8 min-h-[300px]">
                {/* Step 1: Type */}
                {step === 1 && (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-6">Step 1: Choose your project type</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <button onClick={() => setStep(2)} className="bg-white border-2 border-[#111] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                <h3 className="font-display text-xl font-bold">Website</h3>
                                <p className="text-sm text-gray-500 mt-2">A professional, fast, and secure website.</p>
                            </button>
                            <LockedTile title="iOS & Android App" />
                            <LockedTile title="Web + App" />
                            <LockedTile title="Workflows" />
                        </div>
                    </div>
                )}
                {/* Step 2: Complexity */}
                {step === 2 && (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-6">Step 2: Select website complexity</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {PRICING_TIERS.map(tier => (
                                <button key={tier.name} onClick={() => { setComplexity(tier.name as Complexity); setStep(3); }} className={`bg-white border rounded-2xl p-6 text-left hover:shadow-lg transition-shadow ${complexity === tier.name ? 'border-2 border-[#111]' : 'border-[#EAEAEA]'}`}>
                                    <h3 className="font-display text-lg font-bold uppercase">{tier.name}</h3>
                                    <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStep(1)} className="text-sm font-semibold mt-6">&larr; Back</button>
                    </div>
                )}
                {/* Step 3: Options */}
                {step === 3 && (
                     <div>
                        <h2 className="font-display text-2xl font-bold mb-6">Step 3: Choose add-ons</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {ADDONS.map(addon => (
                                <button key={addon.name} onClick={() => handleAddonToggle(addon.name)} className={`p-4 rounded-lg text-left transition-all border ${selectedAddons.includes(addon.name) ? 'bg-gray-100 border-gray-400' : 'bg-white border-[#EAEAEA]'}`}>
                                    <div className="flex items-start justify-between">
                                        <span className="font-semibold text-sm">{addon.name}</span>
                                        <div className={`w-5 h-5 border rounded-sm flex items-center justify-center flex-shrink-0 ml-2 ${selectedAddons.includes(addon.name) ? 'bg-[#111] border-[#111]' : 'border-gray-300'}`}>
                                            {selectedAddons.includes(addon.name) && <Icon name="check" className="w-4 h-4 text-white"/>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">+ €{addon.price}</p>
                                </button>
                            ))}
                        </div>
                         <div className="flex justify-between mt-8">
                           <button onClick={() => setStep(2)} className="text-sm font-semibold">&larr; Back</button>
                           <Button onClick={() => setStep(4)} variant="primary">Review & Price &rarr;</Button>
                         </div>
                    </div>
                )}
                {/* Step 4: Review & Price */}
                {step === 4 && selectedTier && (
                     <div>
                        <h2 className="font-display text-2xl font-bold mb-6">Step 4: Review & Price</h2>
                        <div className="bg-[#F7F7F8] border border-[#EAEAEA] rounded-xl p-6 space-y-4">
                            <div>
                                <h3 className="text-sm uppercase text-gray-500 font-semibold">Complexity</h3>
                                <p className="font-bold">{selectedTier.name} <span className="text-gray-600 font-normal">- €{selectedTier.price}</span></p>
                            </div>
                            {selectedAddons.length > 0 && (
                                <div>
                                    <h3 className="text-sm uppercase text-gray-500 font-semibold">Add-ons</h3>
                                    <ul>
                                        {selectedAddons.map(name => {
                                            const addon = ADDONS.find(a => a.name === name);
                                            return <li key={name} className="flex justify-between"><p>{name}</p> <p>€{addon?.price}</p></li>
                                        })}
                                    </ul>
                                </div>
                            )}
                             <div className="border-t border-[#EAEAEA] my-2"></div>
                             <div className="flex justify-between items-center">
                                 <p className="font-display font-bold text-xl">Total</p>
                                 <p className="font-display font-bold text-3xl">€{totalPrice}</p>
                             </div>
                             <div className="flex justify-between items-center">
                                 <p className="font-display font-bold text-xl">ETA</p>
                                 <p className="font-display font-bold text-xl">{selectedTier.eta}</p>
                             </div>
                        </div>
                         <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                           <button onClick={() => setStep(3)} className="text-sm font-semibold">&larr; Adjust</button>
                           <a href={mailtoHref} className="w-full sm:w-auto text-center inline-block text-sm font-semibold rounded-lg px-6 py-3 transition-all duration-200 bg-[#111] text-white hover:bg-gray-800">
                            Start My Build
                           </a>
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConfiguratorPage;