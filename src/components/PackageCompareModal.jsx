import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Minus } from 'lucide-react';
import { packageComparisonMatrix } from '../data/packages';

export default function PackageCompareModal({ isOpen, onClose, onSelectEnquiry }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 max-w-6xl w-full glass-panel rounded-3xl p-6 my-6 shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#F5F1EA]">
                COMPARE ALL PACKAGES
              </h3>
              <p className="text-xs text-[#A8A29A]">
                Side-by-side rate sheet comparison matrix
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto my-4 flex-1">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-[#C9A96E]">
                  <th className="py-4 px-3 font-semibold bg-[#151515] sticky left-0 z-10 w-48">
                    Feature / Specs
                  </th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 01 (₹30k)</th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 02 (₹40k)</th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 03 (₹50k)</th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 04 (Custom)</th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 05 (₹80-90k)</th>
                  <th className="py-4 px-3 font-semibold text-center">Pkg 06 (₹1.2L)</th>
                  <th className="py-4 px-3 font-semibold text-center">Special (₹60-70k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-[#F5F1EA]/90">
                {packageComparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-3 font-medium bg-[#151515] sticky left-0 z-10 text-[#F5F1EA]">
                      {row.feature}
                    </td>
                    {['pkg1', 'pkg2', 'pkg3', 'pkg4', 'pkg5', 'pkg6', 'pkgSp'].map((col) => (
                      <td key={col} className="py-3 px-3 text-center">
                        {typeof row[col] === 'boolean' ? (
                          row[col] ? (
                            <Check size={16} className="text-[#C9A96E] mx-auto" />
                          ) : (
                            <Minus size={16} className="text-[#A8A29A]/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-[11px] text-[#A8A29A]">{row[col]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onSelectEnquiry();
              }}
              className="bg-[#C9A96E] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
