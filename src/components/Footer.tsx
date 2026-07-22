import { Mic, Heart } from 'lucide-react';
import { useLang } from '@/i18n';

export default function Footer() {
  const { t } = useLang();
  const ft = t.footer;

  const navHrefs = ['#features', '#install', '#download', '#faq'];

  return (
    <footer className="relative border-t border-green-500/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center glow-green">
                <Mic className="w-5 h-5 text-[#06240f]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-white">CreeperVoiceMod</span>
                <span className="text-[10px] text-green-400/70 font-medium tracking-widest uppercase">{ft.modLabel}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-2">{ft.desc}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{ft.navigate}</h4>
            <ul className="space-y-2.5">
              {ft.navLinks.map((l, i) => (
                <li key={l}>
                  <a href={navHrefs[i]} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{ft.resources}</h4>
            <ul className="space-y-2.5">
              {ft.resourceLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{ft.legal}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            {ft.builtWith} <Heart className="w-3.5 h-3.5 text-green-400 fill-green-400" /> {ft.forCommunity}
          </p>
        </div>
      </div>
    </footer>
  );
}
