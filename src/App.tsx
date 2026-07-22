import { LangProvider } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import DownloadSection from './components/DownloadSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-[#070b08] text-gray-100 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <Installation />
          <DownloadSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
