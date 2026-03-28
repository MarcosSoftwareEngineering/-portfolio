import React, { useState } from 'react';
import bannerImage from './assets/banner.png'; // Imagem de fundo para a seção hero

// --- DADOS DINÂMICOS ---
const skillsData = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3'],
  backend: ['Node.js', 'Python', 'FastAPI', 'Java', 'Kotlin'],
  tools: ['PostgreSQL', 'MySQL', 'Git/GitHub', 'Docker', 'Firebase']
};

const projectsData = [
  {
    title: 'Sistema de Gestão de Inventário',
    desc: 'Web app para controle de estoque em tempo real para construção civil. Inclui alertas automatizados de estoque baixo e monitoramento dinâmico.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/MarcosSoftwareEngineering'
  },
  {
    title: 'WhatsApp Backup Chatbot',
    desc: 'Bot automatizado desenvolvido em Python para integração com WhatsApp, focado em geração de relatórios e automação de backups.',
    tags: ['Python', 'FastAPI', 'WhatsApp API'],
    link: 'https://github.com/MarcosSoftwareEngineering'
  },
  {
    title: 'Studios Delivery Checklist',
    desc: 'Aplicação de checklist para entregas. Foco em usabilidade e design responsivo para controle de qualidade.',
    tags: ['JavaScript', 'HTML/CSS', 'Git'],
    link: 'https://github.com/MarcosSoftwareEngineering/studios-delivery-checklist'
  }
];

const App = () => {
  // --- ESTADO DO TEMA (Dark/Light) ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- DEFINIÇÃO DOS TEMAS ---
  const lightTheme = {
    bgApp: '#ffffff',
    bgSection: '#f8f9fa',
    cardBg: '#ffffff',
    textPrimary: '#212529',
    textSecondary: '#555555',
    accent: '#0056b3',
    border: '#e9ecef',
    inputBg: '#ffffff'
  };

  const darkTheme = {
    bgApp: '#0d1117',
    bgSection: '#161b22',
    cardBg: '#1c2128',
    textPrimary: '#c9d1d9',
    textSecondary: '#8b949e',
    accent: '#58a6ff',
    border: '#30363d',
    inputBg: '#0d1117'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  // --- ESTILOS GLOBAIS BASEADOS NO TEMA ATUAL ---
  // Removi as configurações fixas de Grid daqui e passei para o CSS dinâmico abaixo
  const styles = {
    container: { backgroundColor: theme.bgApp, color: theme.textPrimary, fontFamily: 'Inter, sans-serif', margin: 0, padding: 0, transition: 'background-color 0.3s ease, color 0.3s ease' },
    text: { lineHeight: '1.8', color: theme.textSecondary, transition: 'color 0.3s ease' },
    btnPrimary: { backgroundColor: theme.accent, color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', textAlign: 'center' },
    btnOutline: { backgroundColor: 'transparent', color: theme.accent, border: `1px solid ${theme.accent}`, padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', transition: 'all 0.3s ease', textAlign: 'center' },
    card: { backgroundColor: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', transition: 'background-color 0.3s ease, border-color 0.3s ease' },
    tag: { backgroundColor: isDarkMode ? 'rgba(88, 166, 255, 0.1)' : 'rgba(0, 86, 179, 0.08)', color: theme.accent, padding: '6px 12px', borderRadius: '12px', fontSize: '0.85rem', margin: '4px', display: 'inline-block', fontWeight: '600', transition: 'all 0.3s ease' }
  };

  return (
    <div style={styles.container}>
      
      {/* --- ESTILOS CSS (ANIMAÇÃO, UX E RESPONSIVIDADE) --- */}
      <style>{`
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        
        /* Utilitários Gerais */
        .section-container { padding: 80px 20px; max-width: 1100px; margin: 0 auto; width: 100%; box-sizing: border-box; }
        .section-title { font-size: 2.5rem; color: ${theme.textPrimary}; border-bottom: 2px solid ${theme.border}; padding-bottom: 10px; margin-bottom: 40px; text-align: center; transition: color 0.3s ease, border-color 0.3s ease; }
        .hero-title { font-size: 2.5rem; color: #e6edf3; font-weight: 400; margin-bottom: 20px; }
        .hero-desc { font-size: 1.3rem; line-height: 1.8; color: #c9d1d9; max-width: 700px; margin: 0 auto 40px auto; }
        .logo-container { position: absolute; top: 40px; left: 40px; z-index: 5; }
        
        /* Grids Responsivos */
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .btn-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
        
        /* Efeitos Hover */
        .hover-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; height: 100%; display: flex; flex-direction: column; }
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); border-color: ${theme.accent}; }
        .tag-hover { transition: all 0.2s ease; cursor: default; }
        .tag-hover:hover { background-color: ${isDarkMode ? 'rgba(88, 166, 255, 0.2)' : 'rgba(0, 86, 179, 0.15)'} !important; transform: scale(1.05); }
        .input-focus { transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease; outline: none; width: 100%; box-sizing: border-box; }
        .input-focus:focus { border-color: ${theme.accent} !important; box-shadow: 0 0 0 3px ${isDarkMode ? 'rgba(88,166,255,0.2)' : 'rgba(0,86,179,0.15)'}; }
        .btn-hover { transition: background-color 0.3s, transform 0.2s; width: auto; flex: 1; min-width: 150px; max-width: 250px; }
        .btn-hover:hover { background-color: ${isDarkMode ? '#3182ce' : '#004494'} !important; transform: translateY(-2px); }
        .link-hover { transition: color 0.2s; word-break: break-word; }
        .link-hover:hover { color: ${isDarkMode ? '#8ab4f8' : '#003d82'} !important; text-decoration: underline !important; }
        
        /* Estilo do Botão de Projeto */
        .btn-project { display: block; width: 100%; text-align: center; padding: 12px; margin-top: auto; border: 2px solid ${theme.accent}; border-radius: 6px; color: ${theme.accent}; background-color: transparent; text-decoration: none; font-weight: bold; transition: all 0.3s ease; box-sizing: border-box; }
        .btn-project:hover { background-color: ${theme.accent}; color: #ffffff; }

        /* Botão Toggle Tema */
        .theme-toggle-btn { position: absolute; top: 30px; right: 40px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.3); color: white; font-size: 1.5rem; cursor: pointer; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease, background 0.3s ease; z-index: 10; }
        .theme-toggle-btn:hover { transform: scale(1.1); background: rgba(255, 255, 255, 0.4); }

        /* ======== MEDIA QUERIES (MOBILE & TABLET) ======== */
        @media (max-width: 768px) {
          .section-container { padding: 50px 15px; }
          .section-title { font-size: 2rem; margin-bottom: 30px; text-align: center !important; }
          .hero-title { font-size: 1.8rem; }
          .hero-desc { font-size: 1.1rem; }
          
          /* Ajuste do cabeçalho no mobile para não bater no botão de tema */
          .logo-container { position: relative; top: 0; left: 0; text-align: center; padding-top: 30px; margin-bottom: 20px; width: 100%; }
          .theme-toggle-btn { top: 15px; right: 15px; width: 45px; height: 45px; font-size: 1.3rem; }
          
          /* Grids empilham 100% no celular */
          .grid-2 { grid-template-columns: 1fr; gap: 20px; }
          .grid-3 { grid-template-columns: 1fr; gap: 20px; }
          
          /* Ajuste para alinhar textos no centro em telas muito pequenas */
          .mobile-center-text { text-align: center !important; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        backgroundImage: `linear-gradient(to right, rgba(13, 17, 23, 0.95), rgba(13, 17, 23, 0.6)), url(${bannerImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="theme-toggle-btn"
          aria-label="Alternar tema"
          title={isDarkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <div className="logo-container">
          <h1 style={{ fontSize: '2rem', color: '#fff', margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>Marcos Vinicius</h1>
        </div>

        <div className="section-container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <h2 className="hero-title">Software Engineer | React, Node.js, Python</h2>
          <p className="hero-desc">
            Especialista em Front-end e Engenharia de Software. Transformando requisitos complexos em interfaces de alto desempenho.
          </p>
          <div className="btn-group">
            <a href="#projetos" style={styles.btnPrimary} className="btn-hover">Ver Projetos</a>
            <a href="/curriculo-marcos-vinicius.pdf" download style={{ ...styles.btnOutline, color: '#fff', borderColor: '#fff' }} className="btn-hover">Download CV</a>
          </div>
        </div>
      </section>

      {/* 2. RESUMO PROFISSIONAL (Sobre) */}
      <section id="sobre" className="section-container">
        <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Mim</h2>
        <div className="grid-2">
          <div className="mobile-center-text">
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>
              Sou um Engenheiro de Software com forte foco em desenvolvimento Front-end e criação de arquiteturas escaláveis. Com base sólida em Análise e Desenvolvimento de Sistemas e especialização em Engenharia de Software, atuo desenhando soluções que unem código limpo (Clean Architecture) e interfaces dinâmicas.
            </p>
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>
              Como fundador da Marvin Site Builders e desenvolvedor freelancer, tenho experiência prática gerenciando o ciclo completo de vida de aplicações, desde o levantamento de requisitos até o deploy.
            </p>
          </div>
          <div style={{...styles.card, backgroundColor: theme.bgSection}} className="hover-card">
            <h3 style={{ color: theme.textPrimary, marginTop: 0 }} className="mobile-center-text">Foco Atual</h3>
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>🚀 Engenharia de Software Aplicada</p>
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>⚛️ Ecossistema React & Front-end Avançado</p>
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>⚙️ Arquitetura de Software (SOLID, Clean Code)</p>
          </div>
        </div>
      </section>

      {/* 4. HABILIDADES TÉCNICAS */}
      <section id="habilidades" className="section-container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="grid-3">
          <div style={styles.card} className="hover-card">
            <h3 style={{ color: theme.textPrimary, textAlign: 'center' }}>Front-end</h3>
            <div style={{ textAlign: 'center' }}>
              {skillsData.frontend.map(tech => <span key={tech} style={styles.tag} className="tag-hover">{tech}</span>)}
            </div>
          </div>
          <div style={styles.card} className="hover-card">
            <h3 style={{ color: theme.textPrimary, textAlign: 'center' }}>Back-end</h3>
            <div style={{ textAlign: 'center' }}>
              {skillsData.backend.map(tech => <span key={tech} style={styles.tag} className="tag-hover">{tech}</span>)}
            </div>
          </div>
          <div style={styles.card} className="hover-card">
            <h3 style={{ color: theme.textPrimary, textAlign: 'center' }}>Banco de Dados & Ferramentas</h3>
            <div style={{ textAlign: 'center' }}>
              {skillsData.tools.map(tech => <span key={tech} style={styles.tag} className="tag-hover">{tech}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJETOS EM DESTAQUE */}
      <section id="projetos" style={{ backgroundColor: theme.bgSection, transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <h2 className="section-title">Projetos em Destaque</h2>
          <div className="grid-3">
            
            {projectsData.map((project, index) => (
              <div key={index} style={styles.card} className="hover-card">
                <h3 style={{ color: theme.textPrimary, textAlign: 'center', marginTop: 0 }}>{project.title}</h3>
                <p style={{ ...styles.text, fontSize: '0.95rem', textAlign: 'center', flexGrow: 1 }}>{project.desc}</p>
                <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                  {project.tags.map(tag => <span key={tag} style={styles.tag} className="tag-hover">{tag}</span>)}
                </div>
                <a href={project.link} className="btn-project" target="_blank" rel="noopener noreferrer">
                  Ver no GitHub
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 5. EXPERIÊNCIA E FORMAÇÃO */}
      <section id="experiencia" className="section-container">
        <h2 className="section-title" style={{ textAlign: 'left' }}>Experiência e Formação</h2>
        <div className="grid-2">
          <div className="hover-card" style={{ padding: '20px', borderRadius: '8px', backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
            <h3 style={{ color: theme.accent, fontSize: '1.5rem', marginTop: 0 }}>🎓 Acadêmico</h3>
            <div style={{ borderLeft: `2px solid ${theme.accent}`, paddingLeft: '20px', margin: '20px 0' }}>
              <h4 style={{ color: theme.textPrimary, margin: '0 0 5px 0' }}>Pós-graduação em Engenharia de Software</h4>
              <p style={{ ...styles.text, fontSize: '1rem', margin: '0 0 10px 0' }}>Faculdade Metropolitana de São Paulo • <span style={{fontWeight: '600', color: theme.accent}}>Em andamento</span></p>
              
              <h4 style={{ color: theme.textPrimary, margin: '15px 0 5px 0' }}>Análise e Desenvolvimento de Sistemas</h4>
              <p style={{ ...styles.text, fontSize: '1rem', margin: 0 }}>Estácio de Sá • Último semestre</p>
            </div>
            <p style={{ ...styles.text, fontSize: '0.95rem' }}><strong>Princípios Adotados:</strong> Clean Architecture, SOLID, Metodologias Ágeis (Scrum/Kanban).</p>
          </div>
          
          <div className="hover-card" style={{ padding: '20px', borderRadius: '8px', backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
            <h3 style={{ color: theme.accent, fontSize: '1.5rem', marginTop: 0 }}>💼 Profissional</h3>
            <div style={{ borderLeft: `2px solid ${theme.accent}`, paddingLeft: '20px', margin: '20px 0' }}>
              <h4 style={{ color: theme.textPrimary, margin: '0 0 5px 0' }}>Founder & Web Developer</h4>
              <p style={{ ...styles.text, fontSize: '1rem', margin: '0 0 5px 0' }}>Marvin Site Builders • Freelance</p>
              <p style={{ ...styles.text, fontSize: '0.9rem', margin: '0 0 10px 0' }}>Desenvolvimento de landing pages e sites corporativos focados em conversão e performance.</p>
              
              <h4 style={{ color: theme.textPrimary, margin: '15px 0 5px 0' }}>Desenvolvedor / Estagiário</h4>
              <p style={{ ...styles.text, fontSize: '1rem', margin: '0 0 5px 0' }}>CS Sustentáveis</p>
              <p style={{ ...styles.text, fontSize: '0.9rem', margin: 0 }}>Desenvolvimento de ferramentas internas, como listas de presença online e controle de estoque.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTATO E LINKS */}
      <section id="contato" className="section-container">
        <h2 className="section-title">Vamos conversar?</h2>
        <div className="grid-2">
          <div className="mobile-center-text">
            <p style={{ ...styles.text, fontSize: '1.1rem' }}>Estou sempre aberto a discutir novos projetos, oportunidades de software engineering e ideias inovadoras.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="https://github.com/MarcosSoftwareEngineering" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ color: theme.accent, textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>🐙 GitHub: /MarcosSoftwareEngineering</a>
              <a href="https://linkedin.com/in/marcosvinicius" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ color: theme.accent, textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>💼 LinkedIn: /marcosvinicius</a>
              <a href="mailto:contato@exemplo.com" className="link-hover" style={{ color: theme.accent, textDecoration: 'none', fontSize: '1.1rem', fontWeight: '500' }}>✉️ E-mail: me@exemplo.com</a>
            </div>
          </div>
          
          <div style={styles.card} className="hover-card">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Seu Nome" className="input-focus" style={{ padding: '14px', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.textPrimary, fontSize: '1rem' }} />
              <input type="email" placeholder="Seu E-mail" className="input-focus" style={{ padding: '14px', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.textPrimary, fontSize: '1rem' }} />
              <textarea placeholder="Sua Mensagem" rows="4" className="input-focus" style={{ padding: '14px', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.inputBg, color: theme.textPrimary, resize: 'vertical', fontSize: '1rem' }}></textarea>
              <button type="button" style={{ ...styles.btnPrimary, width: '100%' }} className="btn-hover">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '30px', borderTop: `1px solid ${theme.border}`, backgroundColor: theme.bgSection, color: theme.textSecondary, transition: 'background-color 0.3s ease' }}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Marcos Vinicius. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;