import React, { useState, useMemo } from 'react';
// FIX: Import Complexity from '../types' instead of '../constants'.
import { COMPLEXITY_LEVELS, BW_TIME_DAYS, PRICING_MAP } from '../constants';
import { Complexity } from '../types';

const RoiCalculator: React.FC = () => {
    const [complexity, setComplexity] = useState<Complexity>(Complexity.STANDARD);
    const [traditionalWeeks, setTraditionalWeeks] = useState(8);

    const results = useMemo(() => {
        const bwPrice = PRICING_MAP[complexity];
        const bwTimeDays = BW_TIME_DAYS[complexity];
        const bwTimeWeeks = bwTimeDays / 5;
        const level = COMPLEXITY_LEVELS[complexity];
        const deltaWeeks = Math.max(0, traditionalWeeks - bwTimeWeeks);
        
        const traditionalCostRaw = (bwPrice * 2.33) * (1 + 0.62 * level) * (1 + 0.10 * deltaWeeks);
        const traditionalCost = Math.round(traditionalCostRaw / 50) * 50;
        
        const timeSaved = Math.max(0, traditionalWeeks - bwTimeWeeks).toFixed(1);
        const savings = traditionalCost - bwPrice;
        const roi = savings > 0 && bwPrice > 0 ? Math.min(9999, (savings / bwPrice) * 100) : 0;

        return {
            traditionalCost,
            bwPrice,
            timeSaved,
            savings,
            roi,
        };
    }, [complexity, traditionalWeeks]);

    const complexityOptions = Object.values(Complexity);

    return (
        <div className="mt-12 bg-white border border-[#EAEAEA] rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="complexity" className="block text-sm font-semibold text-gray-700 mb-2">Complexity</label>
                        <div className="grid grid-cols-2 gap-2">
                           {complexityOptions.map(option => (
                               <button key={option} onClick={() => setComplexity(option)} className={`px-4 py-2 text-sm rounded-md transition-colors ${complexity === option ? 'bg-[#111] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                   {option}
                               </button>
                           ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="trad-weeks" className="block text-sm font-semibold text-gray-700 mb-2">
                            Traditional Agency Weeks ({traditionalWeeks})
                        </label>
                        <input
                            id="trad-weeks"
                            type="range"
                            min="2"
                            max="28"
                            value={traditionalWeeks}
                            onChange={(e) => setTraditionalWeeks(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                         <p className="text-xs text-gray-500 mt-2">Note: Weeks model a typical small project. Adding weeks inflates legacy pricing by +10%/week.</p>
                    </div>
                </div>

                {/* Outputs */}
                <div className="bg-[#F7F7F8] border border-[#EAEAEA] rounded-xl p-6 space-y-4">
                    <div className="flex justify-between items-baseline">
                        <p className="text-gray-600">Traditional Cost</p>
                        <p className="font-bold font-display text-2xl text-red-500">€{results.traditionalCost.toLocaleString()}</p>
                    </div>
                     <div className="flex justify-between items-baseline">
                        <p className="text-gray-600">BlackWeaver Cost</p>
                        <p className="font-bold font-display text-2xl text-green-600">€{results.bwPrice.toLocaleString()}</p>
                    </div>
                    <div className="border-t border-[#EAEAEA] my-2"></div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-gray-600">Time Saved</p>
                        <p className="font-semibold text-lg">{results.timeSaved} weeks</p>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-gray-600">Total Savings</p>
                        <p className="font-semibold text-lg">€{results.savings.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-gray-600">ROI</p>
                        <p className="font-semibold text-lg text-green-600">{results.roi.toFixed(0)}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoiCalculator;