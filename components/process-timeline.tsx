"use client";

import React from "react";
import { motion } from "framer-motion";

const Icons = {
  1: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  ),
  2: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  3: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  4: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  5: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  6: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};

export default function ProcessTimeline({
  steps,
}: {
  steps: { step: string; title: string; desc: string }[];
}) {
  return (
    <div className="relative mt-20 px-4 md:px-0">
      {/* Horizontal Line across all steps for Desktop */}
      <div className="hidden lg:block absolute top-[44%] left-0 w-full h-[1px] border-t border-dashed border-slate-300" />

      <div className="flex flex-col lg:flex-row justify-between lg:gap-4 relative z-10 space-y-10 lg:space-y-0">
        {steps.map((step, index) => {
          const IconWrapper = Icons[(index + 1) as keyof typeof Icons] || Icons[1];
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              key={index}
              className="flex flex-row lg:flex-col items-center flex-1 group"
            >
              {/* Vertical line for mobile (simulating connections downwards) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden absolute left-[56px] mt-[100px] h-[calc(100%-80px)] w-[1px] border-l border-dashed border-slate-300 -z-10" />
              )}

              <div className="flex flex-col items-center shrink-0 w-24 lg:w-full">
                {/* Icon Circle */}
                <div className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full bg-white border border-slate-200 text-amber-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:-translate-y-2 group-hover:text-white transition duration-500 ease-out z-10">
                  <IconWrapper className="w-8 h-8 transition-transform group-hover:scale-110 duration-500 relative z-20" />
                  
                  {/* Subtle pulsing background on hover */}
                  <div className="absolute inset-0 rounded-full bg-amber-500 opacity-0 group-hover:animate-ping transition duration-500" />
                </div>
                
                {/* Standard numbers below icons */}
                <div className="mt-5 text-slate-800 font-black text-xl lg:text-2xl font-outfit">
                  {index + 1}
                </div>
              </div>

              <div className="ml-6 lg:ml-0 lg:mt-3 text-left lg:text-center w-full">
                <h3
                  className="text-base lg:text-lg font-bold text-slate-900 mb-2 transition duration-300 group-hover:text-amber-600"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
