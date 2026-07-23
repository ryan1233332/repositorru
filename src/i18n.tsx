import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'pt';

export const translations = {
  en: {
    // Nav
    nav: {
      features: 'Features',
      install: 'Installation',
      download: 'Download',
      faq: 'FAQ',
      cta: 'Get CreeperVoiceMod',
      modLabel: 'Fabric & Forge Mod',
    },
    // Hero
    hero: {
      badge: 'v2.5.1 — Minecraft 1.21.11 · Fabric & Forge',
      h1a: 'Talk. Laugh.',
      h1b: 'Play together.',
      desc: 'CreeperVoiceMod brings crystal-clear proximity voice chat to Minecraft. Available for',
      descHighlight: 'Fabric & Forge 1.21.11',
      descEnd: '— hear your friends, coordinate builds, and survive the night together.',
      ctaPrimary: 'Download Now',
      ctaSecondary: 'Explore Features',
      stat1: 'Downloads',
      stat2: 'Latency Goal',
      stat3: 'User Rating',
    },
    // Features
    features: {
      eyebrow: 'Why CreeperVoiceMod',
      h2a: 'Everything you need to',
      h2b: 'be heard',
      sub: 'A complete voice communication toolkit designed for the way modern Minecraft communities play.',
      liveAudio: 'LIVE AUDIO',
      hearDiff: 'Hear the difference',
      hearDiffSub: 'Opus-encoded, noise-suppressed, spatially positioned. The most immersive voice experience in Minecraft.',
      items: [
        { title: 'Proximity Voice Chat', desc: 'Volume and stereo panning based on real in-world distance. Hear footsteps creep closer as enemies approach.' },
        { title: 'Spatial Audio Engine', desc: 'Full 3D positional sound. Voices move around you as players walk — left, right, above, and below.' },
        { title: 'Studio-Quality Audio', desc: 'Opus codec encoding at 64kbps with noise suppression and echo cancellation. Your voice, crystal clear.' },
        { title: 'Group Channels', desc: 'Create private channels for your team. Switch between proximity and group chat with a single keybind.' },
        { title: 'Mute & Push-to-Talk', desc: 'Granular controls for every player. Toggle push-to-talk, mute individuals, or mute yourself instantly.' },
        { title: 'Dedicated Servers', desc: 'Self-host your own voice server or use our free relay. Low latency with AES-256 encrypted audio.' },
      ],
    },
    // Installation
    install: {
      eyebrow: 'Setup Guide',
      h2a: 'Up and running in',
      h2b: '4 steps',
      sub: 'A clean install takes under five minutes. No coding required.',
      loader: 'Loader',
      fabric: 'Fabric',
      forge: 'Forge',
      reqTitle: 'System Requirements',
      fabricReqs: ['Minecraft 1.21.11', 'Fabric Loader 0.16+', 'Fabric API', 'Java 21+'],
      forgeReqs: ['Minecraft 1.21.11', 'Forge 55.0+', 'Java 21+'],
      fabricSteps: [
        { step: '01', title: 'Install Fabric Loader', desc: 'Go to fabricmc.net, download the installer, and select Minecraft version 1.21.11. Run the installer and open your launcher to select the new Fabric profile.' },
        { step: '02', title: 'Add Fabric API', desc: 'Download Fabric API from Modrinth or CurseForge and place the .jar file inside your mods folder. CreeperVoiceMod requires it for networking.' },
        { step: '03', title: 'Add CreeperVoiceMod', desc: 'Place the CreeperVoiceMod .jar in the same mods folder alongside Fabric API. No extra dependencies needed.' },
        { step: '04', title: 'Launch & Configure', desc: 'Start Minecraft with the Fabric profile. Once in-game, press V to open the CreeperVoiceMod settings and configure your microphone and keybinds.' },
      ],
      forgeSteps: [
        { step: '01', title: 'Install Forge', desc: 'Go to minecraftforge.net, download the Forge installer for 1.21.11, run it, and select "Install client". Your launcher will create a new Forge profile automatically.' },
        { step: '02', title: 'Locate Mods Folder', desc: 'Open your Minecraft game directory. On Windows use %appdata%\\.minecraft\\mods, on Mac ~/Library/Application Support/minecraft/mods. Create the folder if it doesn\'t exist.' },
        { step: '03', title: 'Add CreeperVoiceMod', desc: 'Place the CreeperVoiceMod Forge .jar inside the mods folder. Make sure you use the Forge build, not the Fabric one — they are separate files.' },
        { step: '04', title: 'Launch & Configure', desc: 'Start Minecraft with the Forge profile. Once in-game, press V to open the CreeperVoiceMod settings and configure your microphone and keybinds.' },
      ],
    },
    // Download
    download: {
      eyebrow: 'Get CreeperVoiceMod',
      h2a: 'Download',
      h2b: 'CreeperVoiceMod',
      sub: 'Free and open-source. Always.',
      loader: 'Loader',
      fabric: 'Fabric',
      forge: 'Forge',
      modVersion: 'CreeperVoiceMod 2.5.1',
      mc: 'Minecraft 1.21.11',
      meta: '73.4 MB · Released Jul 22, 2026',
      downloadJar: 'Download .jar',
      changelog: 'Changelog',
      githubAll: 'View all releases on GitHub',
      downloadBtn: 'Download',
      latest: 'Latest',
      stable: 'Stable',
      legacy: 'Legacy',
      editLink: 'Set link',
      done: 'Done',
      placeholderFabric: 'Fabric download URL…',
      placeholderForge: 'Forge download URL…',
      fileMissing: 'Jar file not uploaded yet — place it in public/downloads/ to enable this button.',
      releases: [
        { version: '2.5.1', tag: 'Latest', date: 'Jul 22, 2026', size: '73.4 MB', changes: ['Minecraft 1.21.11 support', 'Reduced voice latency by 30%', 'New push-to-talk UI'] },
        { version: '2.4.0', tag: 'Stable', date: 'Jun 02, 2026', size: '71.2 MB', changes: ['Spatial audio overhaul', 'Added group channels', 'Bug fixes'] },
        { version: '2.3.2', tag: 'Legacy', date: 'Apr 14, 2026', size: '68.7 MB', changes: ['1.21.5 support', 'Opus codec upgrade'] },
      ],
    },
    // FAQ
    faq: {
      eyebrow: 'Help Center',
      h2a: 'Frequently asked',
      h2b: 'questions',
      items: [
        { q: 'Is CreeperVoiceMod free to use?', a: 'Yes. CreeperVoiceMod is 100% free and open-source under the MIT license. There are no premium tiers, ads, or telemetry. You can self-host the voice server at no cost, or use our free relay for quick setup.' },
        { q: 'Does it work on multiplayer servers?', a: 'Absolutely. CreeperVoiceMod works in both singleplayer and multiplayer. For servers, install the server-side mod and clients automatically connect — no per-player configuration needed.' },
        { q: 'Do all players need the mod installed?', a: 'Yes, every player who wants to use voice chat needs CreeperVoiceMod installed client-side. Players without the mod won\'t hear or transmit voice — they won\'t be kicked or affected in any way.' },
        { q: 'Is both Fabric and Forge supported?', a: 'Yes! CreeperVoiceMod 2.5.1 ships two separate .jar builds — one for Fabric 0.16+ and one for Forge 55.0+, both targeting Minecraft 1.21.11. Make sure to download the correct build for your mod loader.' },
        { q: 'How much bandwidth does voice chat use?', a: 'CreeperVoiceMod uses the Opus codec at 64 kbps per active speaker. A typical server with 10 simultaneous talkers uses roughly 640 kbps — minimal even for mobile hotspots.' },
        { q: 'Can I use a custom push-to-talk key?', a: 'Yes. Every keybind is fully rebindable in the controls screen. Push-to-talk, mute, and channel switching are all independently mappable, including controller buttons.' },
      ],
    },
    // Footer
    footer: {
      modLabel: 'Fabric & Forge Mod',
      desc: 'The proximity voice chat mod for Minecraft. Open-source, lightweight, and built for both the Fabric and Forge communities.',
      navigate: 'Navigate',
      navLinks: ['Features', 'Installation', 'Download', 'FAQ'],
      resources: 'Resources',
      resourceLinks: ['Documentation', 'Source Code', 'Changelog', 'Privacy'],
      legal: '© 2026 CreeperVoiceMod. MIT Licensed. Not affiliated with Mojang or Microsoft.',
      builtWith: 'Built with',
      forCommunity: 'for the Minecraft community',
    },
  },

  pt: {
    nav: {
      features: 'Recursos',
      install: 'Instalação',
      download: 'Download',
      faq: 'FAQ',
      cta: 'Baixar CreeperVoiceMod',
      modLabel: 'Mod Fabric & Forge',
    },
    hero: {
      badge: 'v2.5.1 — Minecraft 1.21.11 · Fabric & Forge',
      h1a: 'Fale. Ria.',
      h1b: 'Jogue junto.',
      desc: 'CreeperVoiceMod traz chat de voz por proximidade ao Minecraft. Disponível para',
      descHighlight: 'Fabric & Forge 1.21.11',
      descEnd: '— ouça seus amigos, coordene construções e sobreviva à noite juntos.',
      ctaPrimary: 'Baixar Agora',
      ctaSecondary: 'Ver Recursos',
      stat1: 'Downloads',
      stat2: 'Meta de Latência',
      stat3: 'Avaliação',
    },
    features: {
      eyebrow: 'Por que CreeperVoiceMod',
      h2a: 'Tudo que você precisa para',
      h2b: 'ser ouvido',
      sub: 'Um kit completo de comunicação por voz feito para a forma como as comunidades modernas de Minecraft jogam.',
      liveAudio: 'ÁUDIO AO VIVO',
      hearDiff: 'Sinta a diferença',
      hearDiffSub: 'Codificado com Opus, supressão de ruído e posicionamento espacial. A experiência de voz mais imersiva do Minecraft.',
      items: [
        { title: 'Chat de Voz por Proximidade', desc: 'Volume e panorama estéreo baseados na distância real no mundo. Ouça passos se aproximando enquanto inimigos chegam.' },
        { title: 'Motor de Áudio Espacial', desc: 'Som posicional 3D completo. As vozes se movem ao seu redor conforme os jogadores caminham — esquerda, direita, acima e abaixo.' },
        { title: 'Áudio de Alta Qualidade', desc: 'Codec Opus a 64kbps com supressão de ruído e cancelamento de eco. Sua voz, cristalina.' },
        { title: 'Canais de Grupo', desc: 'Crie canais privados para sua equipe. Alterne entre proximidade e chat de grupo com um único atalho.' },
        { title: 'Silenciar e Push-to-Talk', desc: 'Controles granulares para cada jogador. Ative push-to-talk, silencie indivíduos ou silencie a si mesmo instantaneamente.' },
        { title: 'Servidores Dedicados', desc: 'Hospede seu próprio servidor de voz ou use nosso relay gratuito. Baixa latência com áudio criptografado AES-256.' },
      ],
    },
    install: {
      eyebrow: 'Guia de Instalação',
      h2a: 'Pronto em apenas',
      h2b: '4 passos',
      sub: 'Uma instalação limpa leva menos de cinco minutos. Sem precisar de código.',
      loader: 'Loader',
      fabric: 'Fabric',
      forge: 'Forge',
      reqTitle: 'Requisitos do Sistema',
      fabricReqs: ['Minecraft 1.21.11', 'Fabric Loader 0.16+', 'Fabric API', 'Java 21+'],
      forgeReqs: ['Minecraft 1.21.11', 'Forge 55.0+', 'Java 21+'],
      fabricSteps: [
        { step: '01', title: 'Instalar Fabric Loader', desc: 'Acesse fabricmc.net, baixe o instalador e selecione a versão 1.21.11 do Minecraft. Execute o instalador e abra seu launcher para selecionar o novo perfil Fabric.' },
        { step: '02', title: 'Adicionar Fabric API', desc: 'Baixe o Fabric API no Modrinth ou CurseForge e coloque o arquivo .jar dentro da pasta mods. O CreeperVoiceMod precisa dele para o sistema de rede.' },
        { step: '03', title: 'Adicionar CreeperVoiceMod', desc: 'Coloque o .jar do CreeperVoiceMod na mesma pasta mods, ao lado do Fabric API. Nenhuma dependência adicional é necessária.' },
        { step: '04', title: 'Iniciar e Configurar', desc: 'Inicie o Minecraft com o perfil Fabric. No jogo, pressione V para abrir as configurações do CreeperVoiceMod e configure seu microfone e atalhos.' },
      ],
      forgeSteps: [
        { step: '01', title: 'Instalar o Forge', desc: 'Acesse minecraftforge.net, baixe o instalador do Forge para 1.21.11, execute-o e selecione "Install client". Seu launcher criará um novo perfil Forge automaticamente.' },
        { step: '02', title: 'Localizar a Pasta Mods', desc: 'Abra o diretório do jogo. No Windows use %appdata%\\.minecraft\\mods, no Mac ~/Library/Application Support/minecraft/mods. Crie a pasta se não existir.' },
        { step: '03', title: 'Adicionar CreeperVoiceMod', desc: 'Coloque o .jar do CreeperVoiceMod para Forge dentro da pasta mods. Use o build correto para Forge — ele é separado do build Fabric.' },
        { step: '04', title: 'Iniciar e Configurar', desc: 'Inicie o Minecraft com o perfil Forge. No jogo, pressione V para abrir as configurações do CreeperVoiceMod e configure seu microfone e atalhos.' },
      ],
    },
    download: {
      eyebrow: 'Obter CreeperVoiceMod',
      h2a: 'Baixar',
      h2b: 'CreeperVoiceMod',
      sub: 'Gratuito e open-source. Sempre.',
      loader: 'Loader',
      fabric: 'Fabric',
      forge: 'Forge',
      modVersion: 'CreeperVoiceMod 2.5.1',
      mc: 'Minecraft 1.21.11',
      meta: '2.4 MB · Lançado em 18 Jul 2026',
      downloadJar: 'Baixar .jar',
      changelog: 'Changelog',
      githubAll: 'Ver todos os lançamentos no GitHub',
      downloadBtn: 'Baixar',
      latest: 'Mais Recente',
      stable: 'Estável',
      legacy: 'Legado',
      editLink: 'Definir link',
      done: 'Pronto',
      placeholderFabric: 'URL de download Fabric…',
      placeholderForge: 'URL de download Forge…',
      fileMissing: 'Arquivo jar não enviado ainda — coloque-o em public/downloads/ para ativar este botão.',
      releases: [
        { version: '2.5.1', tag: 'Mais Recente', date: '18 Jul 2026', size: '2.4 MB', changes: ['Suporte ao Minecraft 1.21.11', 'Latência de voz reduzida em 30%', 'Nova interface de push-to-talk'] },
        { version: '2.4.0', tag: 'Estável', date: '02 Jun 2026', size: '2.3 MB', changes: ['Reformulação do áudio espacial', 'Canais de grupo adicionados', 'Correções de bugs'] },
        { version: '2.3.2', tag: 'Legado', date: '14 Abr 2026', size: '2.1 MB', changes: ['Suporte ao 1.21.5', 'Atualização do codec Opus'] },
      ],
    },
    faq: {
      eyebrow: 'Central de Ajuda',
      h2a: 'Perguntas',
      h2b: 'frequentes',
      items: [
        { q: 'O CreeperVoiceMod é gratuito?', a: 'Sim. O CreeperVoiceMod é 100% gratuito e open-source sob a licença MIT. Sem planos pagos, anúncios ou telemetria. Você pode hospedar seu próprio servidor de voz ou usar nosso relay gratuito.' },
        { q: 'Funciona em servidores multiplayer?', a: 'Com certeza. O CreeperVoiceMod funciona tanto no singleplayer quanto no multiplayer. Para servidores, instale o mod server-side e os clientes se conectam automaticamente.' },
        { q: 'Todos os jogadores precisam ter o mod?', a: 'Sim, cada jogador que quiser usar o chat de voz precisa do CreeperVoiceMod instalado. Jogadores sem o mod simplesmente não ouvirão nem transmitirão voz — não serão expulsos.' },
        { q: 'Fabric e Forge são suportados?', a: 'Sim! O CreeperVoiceMod 2.5.1 vem em dois builds separados — um para Fabric 0.16+ e outro para Forge 55.0+, ambos para o Minecraft 1.21.11. Certifique-se de baixar o build correto para o seu loader.' },
        { q: 'Quanto de internet o chat de voz usa?', a: 'O CreeperVoiceMod usa o codec Opus a 64 kbps por falante ativo. Um servidor típico com 10 falantes simultâneos usa cerca de 640 kbps — mínimo mesmo em redes móveis.' },
        { q: 'Posso usar uma tecla personalizada de push-to-talk?', a: 'Sim. Todos os atalhos podem ser remapeados na tela de controles. Push-to-talk, mudo e troca de canal são todos configuráveis independentemente, inclusive botões de controle.' },
      ],
    },
    footer: {
      modLabel: 'Mod Fabric & Forge',
      desc: 'O mod de chat de voz por proximidade para Minecraft. Open-source, leve e construído para as comunidades Fabric e Forge.',
      navigate: 'Navegar',
      navLinks: ['Recursos', 'Instalação', 'Download', 'FAQ'],
      resources: 'Recursos',
      resourceLinks: ['Documentação', 'Código Fonte', 'Changelog', 'Privacidade'],
      legal: '© 2026 CreeperVoiceMod. Licença MIT. Não afiliado à Mojang ou Microsoft.',
      builtWith: 'Feito com',
      forCommunity: 'para a comunidade Minecraft',
    },
  },
};

export type Translations = typeof translations.en;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
