import { useState } from 'react';
import { Download, FileText, Calendar, Link, Check, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';
import { useLang } from '@/i18n';

interface ReleaseLink { fabric: string; forge: string }

const defaultLinks: ReleaseLink[] = [
  { fabric: 'https://www.dropbox.com/scl/fi/ru8qcgvnad6bgnf7dbjgw/vanilla-voice-mod-mc-1.21.11.fabric.jar?rlkey=396v7um2u05yc2q2tiptpvzkz&st=5gu3gl3z&raw=1', forge: '' },
  { fabric: '', forge: '' },
  { fabric: '', forge: '' },
];

// Local jar files — served directly from public/downloads/.
// Drop the .jar files in public/downloads/ with these exact names and the
// main download button will serve them automatically (no external hosting needed).
const LOCAL_JARS: Record<string, { fabric: string; forge: string }> = {
  '2.5.1': {
    fabric: 'https://www.dropbox.com/scl/fi/ru8qcgvnad6bgnf7dbjgw/vanilla-voice-mod-mc-1.21.11.fabric.jar?rlkey=396v7um2u05yc2q2tiptpvzkz&st=5gu3gl3z&raw=1',
    forge: '',
  },
};

function LinkEditor({
  links,
  onChange,
  fabricLabel,
  forgeLabel,
  placeholderFabric,
  placeholderForge,
}: {
  links: ReleaseLink;
  onChange: (v: ReleaseLink) => void;
  fabricLabel: string;
  forgeLabel: string;
  placeholderFabric: string;
  placeholderForge: string;
}) {
  return (
    <div className="mt-4 space-y-2 border-t border-green-500/10 pt-4">
      <div className="flex items-center gap-2">
        <Link className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
        <input
          type="url"
          placeholder={placeholderFabric}
          value={links.fabric}
          onChange={(e) => onChange({ ...links, fabric: e.target.value })}
          className="flex-1 min-w-0 bg-black/30 border border-green-500/15 rounded-lg px-3 py-1.5 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-green-500/40 transition-colors"
        />
        <span className="text-[10px] font-bold text-green-400/60 uppercase tracking-wide flex-shrink-0">{fabricLabel}</span>
      </div>
      <div className="flex items-center gap-2">
        <Link className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
        <input
          type="url"
          placeholder={placeholderForge}
          value={links.forge}
          onChange={(e) => onChange({ ...links, forge: e.target.value })}
          className="flex-1 min-w-0 bg-black/30 border border-orange-500/15 rounded-lg px-3 py-1.5 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-orange-500/40 transition-colors"
        />
        <span className="text-[10px] font-bold text-orange-400/60 uppercase tracking-wide flex-shrink-0">{forgeLabel}</span>
      </div>
    </div>
  );
}

export default function DownloadSection() {
  const { t } = useLang();
  const d = t.download;
  const [loader, setLoader] = useState<'fabric' | 'forge'>('fabric');
  const [releaseLinks, setReleaseLinks] = useState<ReleaseLink[]>(defaultLinks);
  const [editing, setEditing] = useState<number | null>(null);

  const updateLink = (i: number, v: ReleaseLink) => {
    setReleaseLinks((prev) => prev.map((l, idx) => (idx === i ? v : l)));
  };

  const activeLink = (i: number) =>
    loader === 'fabric' ? releaseLinks[i].fabric : releaseLinks[i].forge;

  // Main release always serves the jar for the selected loader.
  const mainVersion = d.releases[0].version;
  const mainJar = LOCAL_JARS[mainVersion]
    ? loader === 'fabric' ? LOCAL_JARS[mainVersion].fabric : LOCAL_JARS[mainVersion].forge
    : undefined;

  return (
    <section id="download" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-green" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-green-400 tracking-[0.25em] uppercase">{d.eyebrow}</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            {d.h2a} <span className="gradient-text">{d.h2b}</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">{d.sub}</p>
        </Reveal>

        {/* Loader toggle */}
        <Reveal delay={80} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-xl glass">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">{d.loader}</span>
            <button
              onClick={() => setLoader('fabric')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loader === 'fabric'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {d.fabric}
            </button>
            <button
              onClick={() => setLoader('forge')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                loader === 'forge'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {d.forge}
            </button>
          </div>
        </Reveal>

        {/* Main download card */}
        <Reveal delay={100} className="mt-10 max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/15 rounded-full blur-3xl" />
            <div className="relative flex flex-col sm:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center glow-green flex-shrink-0">
                <Download className="w-10 h-10 text-[#06240f]" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center gap-3 justify-center sm:justify-start mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-2xl text-white">{d.modVersion}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-xs font-semibold text-green-300">
                    {d.mc}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-gray-700/40 text-xs font-semibold text-gray-300 capitalize">
                    {loader}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{d.meta}</p>
                {mainJar ? (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                    <a
                      href={mainJar}
                      className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-[#06240f] font-bold text-sm hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.6)] transition-shadow"
                    >
                      <Download className="w-4 h-4" strokeWidth={2.5} />
                      {d.downloadJar}
                    </a>
                    <a
                      href="#download"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-gray-200 font-semibold text-sm"
                    >
                      <FileText className="w-4 h-4 text-green-400" />
                      {d.changelog}
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300/80 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{d.fileMissing}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Previous releases */}
        <div className="mt-10 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {d.releases.map((r, i) => {
            const tagLabel = r.tag === 'Latest' ? d.latest : r.tag === 'Stable' ? d.stable : d.legacy;
            const href = activeLink(i);
            const isEditing = editing === i;

            return (
              <Reveal key={r.version} delay={i * 100}>
                <div className={`rounded-2xl p-6 h-full flex flex-col ${i === 0 ? 'glass border-green-500/30' : 'glass'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-lg text-white">v{r.version}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
                        i === 0 ? 'bg-green-500/20 text-green-300' : 'bg-gray-700/40 text-gray-400'
                      }`}>
                        {tagLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {r.date}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4 flex-1">
                    {r.changes.map((c) => (
                      <li key={c} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">{r.size}</span>
                    <div className="flex items-center gap-2">
                      {/* Edit link button */}
                      <button
                        onClick={() => setEditing(isEditing ? null : i)}
                        className={`inline-flex items-center gap-1 text-xs font-medium transition-colors px-2 py-1 rounded-lg ${
                          isEditing
                            ? 'bg-green-500/15 text-green-400'
                            : 'text-gray-500 hover:text-green-400 hover:bg-green-500/10'
                        }`}
                        title={d.editLink}
                      >
                        {isEditing ? <Check className="w-3.5 h-3.5" /> : <Link className="w-3.5 h-3.5" />}
                        {isEditing ? d.done : d.editLink}
                      </button>
                      {/* Download button */}
                      <a
                        href={href || '#download'}
                        target={href ? '_blank' : undefined}
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                          href
                            ? 'text-green-400 hover:text-green-300'
                            : 'text-gray-600 cursor-default pointer-events-none'
                        }`}
                        aria-disabled={!href}
                      >
                        <Download className="w-3.5 h-3.5" />
                        {d.downloadBtn}
                      </a>
                    </div>
                  </div>

                  {/* Inline link editor */}
                  {isEditing && (
                    <LinkEditor
                      links={releaseLinks[i]}
                      onChange={(v) => updateLink(i, v)}
                      fabricLabel={d.fabric}
                      forgeLabel={d.forge}
                      placeholderFabric={d.placeholderFabric}
                      placeholderForge={d.placeholderForge}
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}