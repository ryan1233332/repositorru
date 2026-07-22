import { Mic, Download, ChevronDown, Sparkles } from 'lucide-react';
import { useLang } from '@/i18n';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070b08]" />

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-green-400" />
          <span className="text-xs font-medium text-green-300 tracking-wide">{h.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {h.h1a}
          <br />
          <span className="gradient-text text-glow">{h.h1b}</span>
        </h1>

        <p className="mt-7 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {h.desc}{' '}
          <span className="text-green-400 font-semibold">{h.descHighlight}</span>
          {' '}{h.descEnd}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#download"
            className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] font-bold text-base hover:shadow-[0_0_40px_-5px_rgba(74,222,128,0.7)] transition-all duration-300 hover:scale-[1.03]"
          >
            <Download className="w-5 h-5" strokeWidth={2.5} />
            {h.ctaPrimary}
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl glass glass-hover text-gray-200 font-semibold text-base"
          >
            <Mic className="w-5 h-5 text-green-400" strokeWidth={2.2} />
            {h.ctaSecondary}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '4.2M+', label: h.stat1 },
            { value: '0ms', label: h.stat2 },
            { value: '4.9/5', label: h.stat3 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-green-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
