import { useState } from 'react';
import { Package, Boxes, ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { useLang } from '@/i18n';

const stepIcons = [Boxes, Package, Package, ArrowRight];

export default function Installation() {
  const { t } = useLang();
  const i = t.install;
  const [loader, setLoader] = useState<'fabric' | 'forge'>('fabric');

  const steps = loader === 'fabric' ? i.fabricSteps : i.forgeSteps;
  const reqs = loader === 'fabric' ? i.fabricReqs : i.forgeReqs;

  return (
    <section id="install" className="relative py-28 sm:py-36 bg-gradient-to-b from-transparent via-[#0a110c] to-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-green-400 tracking-[0.25em] uppercase">{i.eyebrow}</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            {i.h2a} <span className="gradient-text">{i.h2b}</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">{i.sub}</p>
        </Reveal>

        {/* Loader toggle */}
        <Reveal delay={100} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-xl glass">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">{i.loader}</span>
            <button
              onClick={() => setLoader('fabric')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loader === 'fabric'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {i.fabric}
            </button>
            <button
              onClick={() => setLoader('forge')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loader === 'forge'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {i.forge}
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => {
            const Icon = stepIcons[idx];
            return (
              <Reveal key={s.step} delay={idx * 100}>
                <div className="relative glass glass-hover rounded-2xl p-7 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/5 border border-green-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-400" strokeWidth={2} />
                    </div>
                    <span className="font-display font-bold text-3xl text-green-500/20">{s.step}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2.5">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Requirements banner */}
        <Reveal delay={300} className="mt-10">
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display font-semibold text-xl text-white mb-3">{i.reqTitle}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {reqs.map((req) => (
                  <div key={req} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
