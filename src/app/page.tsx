"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/5547988801966?text=Ol%C3%A1%2C%20Poffo%20Marcenaria!%20Quero%20conversar%20sobre%20um%20projeto%20sob%20medida.";

const media = {
  hero: "/images/hero.webp",
  station: "/images/suite-estacao.webp",
  headboard: "/images/suite-cabeceira.webp",
  bathroom: "/images/banheiro-azul.webp",
  led: "/images/suite-led.webp",
  panel: "/images/painel-tv.webp",
  office: "/images/home-office.webp",
  bedroom: "/images/dormitorio-casal.webp",
  bedroomPanel: "/images/dormitorio-painel.webp",
};

const chapters = [
  { image: media.station, number: "01 / 05", title: <>UMA PAREDE.<br />TRÊS FUNÇÕES.</>, text: "Bancada de estudo, painel para TV e armazenamento resolvidos como uma única composição.", position: "center 48%" },
  { image: media.headboard, number: "02 / 05", title: <>DESENHO QUE<br />MUDA A ROTINA.</>, text: "Cabeceira orgânica, apoio lateral e iluminação integrados para aproveitar cada centímetro.", position: "center 48%" },
  { image: media.led, number: "03 / 05", title: <>LUZ TAMBÉM<br />É MATERIAL.</>, text: "A iluminação percorre teto e parede para criar profundidade e uma identidade que não passa despercebida.", position: "center 46%" },
  { image: media.panel, number: "04 / 05", title: <>TUDO NO<br />LUGAR CERTO.</>, text: "Tomadas, cabos, gavetas e superfícies de uso diário pensados antes da fabricação.", position: "center 48%" },
  { image: media.bathroom, number: "05 / 05", title: <>UM PROJETO.<br />SEM QUEBRAS.</>, text: "O mesmo acabamento atravessa quarto e banheiro, conectando os ambientes com coerência.", position: "center 48%" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#inicio" aria-label="Poffo Marcenaria — início">
          <span>P</span><strong>Poffo<br />Marcenaria</strong>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projeto">Projeto</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#metodo">Método</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Pedir orçamento <ArrowUpRight size={16} /></a>
        <button className="nav-toggle" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu /></button>
      </header>

      <aside className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X /></button>
        <div className="mobile-logo">POFFO</div>
        <nav>
          {[["projeto", "Projeto"], ["portfolio", "Portfólio"], ["metodo", "Método"], ["contato", "Contato"]].map(([id, label], index) => (
            <a href={`#${id}`} onClick={() => setMenuOpen(false)} key={id}><span>0{index + 1}</span>{label}</a>
          ))}
        </nav>
      </aside>

      <section className="visual-hero" id="inicio">
        <div className="hero-picture"><Image src={media.hero} alt="Sala integrada com marcenaria sob medida em madeira natural" fill priority sizes="100vw" /></div>
        <div className="hero-scrim" /><div className="hero-light" aria-hidden="true" />
        <div className="hero-kicker">Blumenau + região <span>SC</span></div>
        <div className="hero-title"><p>Projeto. Fabricação. Montagem.</p><h1>MÓVEIS<br />SOB MEDIDA<span>.</span></h1></div>
        <div className="hero-bottom">
          <p>Ambientes únicos, construídos a partir do seu espaço, da sua rotina e do seu jeito de viver.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer">Quero planejar meu ambiente <ArrowUpRight /></a>
        </div>
        <a className="hero-scroll" href="#manifesto"><span>Role para descobrir</span><ArrowDownRight /></a>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-label" data-reveal><span>O que fazemos</span><small>01 — 04</small></div>
        <div className="manifesto-copy" data-reveal><p>O móvel pronto ocupa espaço.</p><h2>O MÓVEL CERTO FAZ O ESPAÇO TRABALHAR POR VOCÊ.</h2></div>
        <div className="manifesto-facts" data-reveal>
          <div><strong>2015</strong><span>início da nossa história</span></div>
          <div><strong>100%</strong><span>projetos sob medida</span></div>
          <div><strong>1 time</strong><span>do projeto à montagem</span></div>
        </div>
      </section>

      <section className="case-study" id="projeto">
        <div className="case-head" data-reveal>
          <div><span>Projeto em destaque</span><small>Suíte jovem · Blumenau</small></div>
          <h2>UM AMBIENTE.<br />CINCO DECISÕES.</h2>
          <p>Um projeto completo mostra melhor o nosso trabalho: proporção, uso, iluminação e acabamento resolvidos como uma coisa só.</p>
        </div>
        <div className="project-chapters">
          {chapters.map((chapter, index) => (
            <article className={`project-chapter chapter-${index + 1}`} key={chapter.number}>
              <div className="chapter-sticky">
                <div className="chapter-image"><Image src={chapter.image} alt="Detalhe do projeto de suíte sob medida" fill sizes="100vw" style={{ objectPosition: chapter.position }} /></div>
                <div className="chapter-curtain" />
                <div className="chapter-copy"><span>{chapter.number}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-head" data-reveal><span>Outros ambientes</span><h2>PROJETOS QUE<br />NÃO SE REPETEM.</h2><p>Cada composição parte de um uso real. O resultado é uma marcenaria que pertence ao lugar — e a quem vive nele.</p></div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-main" data-reveal><div><Image src={media.bedroom} alt="Dormitório de casal com painel em madeira e iluminação indireta" fill sizes="(max-width: 760px) 100vw, 62vw" /></div><footer><span>Dormitório de casal</span><small>Conforto + continuidade</small></footer></article>
          <article className="portfolio-card" data-reveal><div><Image src={media.office} alt="Home office sob medida em madeira escura" fill sizes="(max-width: 760px) 100vw, 38vw" /></div><footer><span>Home office</span><small>Organização + personalidade</small></footer></article>
          <article className="portfolio-card portfolio-wide" data-reveal><div><Image src={media.bedroomPanel} alt="Painel de televisão integrado ao dormitório" fill sizes="100vw" /></div><footer><span>Suíte integrada</span><small>Função + leveza visual</small></footer></article>
        </div>
        <a className="instagram-line" href="https://www.instagram.com/poffomarcenaria_/" target="_blank" rel="noreferrer"><Camera /><span>Veja mais projetos no Instagram</span><strong>@poffomarcenaria_</strong><ArrowUpRight /></a>
      </section>

      <section className="method" id="metodo">
        <div className="method-head" data-reveal><span>Nosso método</span><h2>CLARO DO INÍCIO<br />ATÉ A ENTREGA.</h2></div>
        <div className="method-list">
          {[["01", "Entender", "O ambiente, a rotina, o que precisa caber e o resultado que você espera."], ["02", "Projetar", "Medidas, materiais, ferragens e soluções definidos antes de entrar em produção."], ["03", "Fabricar", "Cada peça produzida e conferida com atenção ao encaixe e ao acabamento."], ["04", "Instalar", "Montagem organizada, ajuste fino e entrega do ambiente pronto para usar."]].map(([number, title, text]) => (
            <article data-reveal key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><ChevronRight /></article>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-media" data-reveal><Image src={media.office} alt="Home office executado pela Poffo Marcenaria" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
        <div className="about-copy" data-reveal><span>Poffo Marcenaria</span><h2>IDEIA BOA PRECISA DE EXECUÇÃO À ALTURA.</h2><p>Desde 2015, desenvolvemos móveis sob medida para transformar necessidades reais em ambientes completos, funcionais e bem resolvidos.</p><ul><li><Check /> Projeto, fabricação e montagem</li><li><Check /> Atendimento em Blumenau e região</li><li><Check /> Soluções residenciais personalizadas</li></ul><a href="https://www.instagram.com/poffomarcenaria_/" target="_blank" rel="noreferrer"><Camera /> Acompanhar no Instagram <ArrowUpRight /></a></div>
      </section>

      <section className="contact" id="contato">
        <span className="contact-label">Seu projeto começa aqui</span><h2 data-reveal>VAMOS FAZER<br />DO SEU <em>JEITO</em>?</h2>
        <a className="contact-main" href={whatsapp} target="_blank" rel="noreferrer" data-reveal><span><MessageCircle /> Conversar no WhatsApp</span><ArrowUpRight /></a>
        <div className="contact-grid">
          <a href="tel:+5547988801966"><Phone /><span><small>Telefone</small>(47) 98880-1966</span></a>
          <a href="https://share.google/c7QshZWgid09uki1j" target="_blank" rel="noreferrer"><MapPin /><span><small>Endereço</small>Rua das Acácias, 212<br />Salto Weissbach · Blumenau/SC</span></a>
          <a href="https://www.instagram.com/poffomarcenaria_/" target="_blank" rel="noreferrer"><Camera /><span><small>Instagram</small>@poffomarcenaria_</span></a>
        </div>
      </section>

      <footer className="site-footer"><a className="logo" href="#inicio"><span>P</span><strong>Poffo<br />Marcenaria</strong></a><p>Móveis sob medida em Blumenau e região.</p><p>© {new Date().getFullYear()} Poffo Marcenaria</p></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle /></a>
    </main>
  );
}
