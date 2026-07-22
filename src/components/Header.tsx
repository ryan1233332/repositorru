import { useEffect, useState } from 'react';
import { Mic, Menu, X, Download, Globe } from 'lucide-react';
import { useLang, type Lang } from '@/i18n';

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = t.nav;
  const links = [
    { label: nav.features, href: '#features' },
    { label: nav.install, href: '#install' },
    { label: nav.download, href: '#download' },
    { label: nav.faq, href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const otherLang: Lang = lang === 'en' ? 'pt' : 'en';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#070b08]/80 backdrop-blur-xl border-b border-green-500/10' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center glow-green group-hover:scale-110 transition-transform duration-300">
            <Mic className="w-5 h-5 text-[#06240f]" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl text-white tracking-tight">CreeperVoiceMod</span>
            <span className="text-[10px] text-green-400/70 font-medium tracking-widest uppercase">{nav.modLabel}</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200 rounded-lg hover:bg-green-500/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={() => setLang(otherLang)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass glass-hover text-xs font-semibold text-gray-300 hover:text-green-400 uppercase tracking-wider"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-green-400" />
            {otherLang.toUpperCase()}
          </button>
          <a
            href="#download"
            className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] font-semibold text-sm hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.6)] transition-shadow duration-300"
          >
            <Download className="w-4 h-4" strokeWidth={2.5} />
            {nav.cta}
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-200 hover:text-green-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="mx-5 rounded-2xl glass p-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-green-400 hover:bg-green-500/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setLang(otherLang); setOpen(false); }}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-400 hover:text-green-400 rounded-lg transition-colors"
          >
            <Globe className="w-4 h-4 text-green-400" />
            {lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
          </button>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] font-semibold text-sm"
          >
            <Download className="w-4 h-4" strokeWidth={2.5} />
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
