import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';
import { useLang } from '@/i18n';

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 60}>
      <div className={`glass rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-green-500/30' : ''}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className={`font-display font-semibold text-base sm:text-lg transition-colors ${open ? 'text-green-400' : 'text-white'}`}>
            {q}
          </span>
          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${open ? 'bg-green-500/20 rotate-180' : 'bg-gray-700/30'}`}>
            {open ? <Minus className="w-4 h-4 text-green-400" /> : <Plus className="w-4 h-4 text-gray-300" />}
          </div>
        </button>
        <div className={`grid transition-all duration-400 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-gray-400 leading-relaxed text-[15px]">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-gradient-to-b from-transparent via-[#0a110c] to-transparent">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-semibold text-green-400 tracking-[0.25em] uppercase">{f.eyebrow}</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            {f.h2a} <span className="gradient-text">{f.h2b}</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {f.items.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
