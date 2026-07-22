import { Radio, Sliders, Shield, Globe, Waves, Users, Volume2 } from 'lucide-react';
import Reveal from './Reveal';
import { useLang } from '@/i18n';

const icons = [Radio, Sliders, Volume2, Users, Shield, Globe];

export default function Features() {
  const { t } = useLang();
  const f = t.features;

  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-green-400 tracking-[0.25em] uppercase">{f.eyebrow}</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            {f.h2a} <span className="gradient-text">{f.h2b}</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">{f.sub}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {f.items.map((item, i) => {
            const Icon = icons[i];
            const accents = [
              'from-green-400/20 to-emerald-500/5',
              'from-lime-400/20 to-green-500/5',
              'from-emerald-400/20 to-teal-500/5',
              'from-green-400/20 to-lime-500/5',
              'from-teal-400/20 to-green-500/5',
              'from-emerald-400/20 to-green-500/5',
            ];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="glass glass-hover rounded-2xl p-7 h-full group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accents[i]} border border-green-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-green-400" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2.5">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-20">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-green opacity-50" />
            <div className="relative flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                  <Waves className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-semibold text-green-300 tracking-wide">{f.liveAudio}</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">{f.hearDiff}</h3>
                <p className="mt-3 text-gray-400 max-w-md">{f.hearDiffSub}</p>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar w-1.5 sm:w-2 rounded-full bg-gradient-to-t from-green-500 to-lime-400"
                    style={{
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.06}s`,
                      animationDuration: `${0.8 + Math.random() * 0.6}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
