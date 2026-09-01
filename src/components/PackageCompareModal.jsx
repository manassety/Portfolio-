import React from 'react';
import { X, Check, Minus, Phone } from 'lucide-react';
import { packageComparisonMatrix } from '../data/packages';
import { contactConfig } from '../config/contact';

export default function PackageCompareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-6xl w-full bg-white rounded-3xl p-6 my-6 shadow-2xl border border-[#B08A45]/30 overflow-hidden flex flex-col max-h-[90vh] text-[#171717] animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE7DE]">
          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#171717]">
              COMPARE ALL PACKAGES
            </h3>
            <p className="text-xs text-[#625D55]">
              Side-by-side rate sheet comparison matrix
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#ECE7DE] text-[#171717] hover:text-[#B08A45]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto my-4 flex-1">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#ECE7DE] text-xs uppercase tracking-widest text-[#B08A45]">
                <th className="py-4 px-3 font-semibold bg-[#ECE7DE] sticky left-0 z-10 w-48 text-[#171717]">
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
            <tbody className="divide-y divide-[#ECE7DE] text-xs text-[#171717]">
              {packageComparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F5F1EA]">
                  <td className="py-3 px-3 font-medium bg-[#ECE7DE] sticky left-0 z-10 text-[#171717]">
                    {row.feature}
                  </td>
                  {['pkg1', 'pkg2', 'pkg3', 'pkg4', 'pkg5', 'pkg6', 'pkgSp'].map((col) => (
                    <td key={col} className="py-3 px-3 text-center">
                      {typeof row[col] === 'boolean' ? (
                        row[col] ? (
                          <Check size={16} className="text-[#B08A45] mx-auto" />
                        ) : (
                          <Minus size={16} className="text-[#625D55]/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-[11px] text-[#625D55]">{row[col]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-[#ECE7DE] flex justify-end">
          <a
            href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
            className="bg-[#B08A45] text-white font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md hover:bg-[#8F6E33] transition-colors flex items-center space-x-2"
          >
            <Phone size={14} />
            <span>Call Studio to Book</span>
          </a>
        </div>
      </div>
    </div>
  );
}
