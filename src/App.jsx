import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Braces, Code2, Database, Globe2, Layers3, MousePointer2, Sparkles, Terminal, Workflow } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import { experience, profile, skills } from './data/portfolio.js'

function SectionHeading({ index, title, subtitle }) {
  return <div className="section-heading"><div className="section-index">{index} <span/> {subtitle}</div><h2>{title}</h2></div>
}
function Hero() {
  return <section className="hero section" id="home"><div className="hero-grid container"><div className="hero-copy"><motion.div className="availability" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.1}}><span className="pulse-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></motion.div><motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>HEY THERE, I'M</motion.p><motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.25}}>Muhammad<br/><span>Umais<span className="hero-period">.</span></span></motion.h1><motion.div className="hero-role" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}><span className="role-bar"/> FULL STACK DEVELOPER</motion.div><motion.p className="hero-description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.5}}>{profile.intro} I care about the details, the user, and the code behind the experience.</motion.p><motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.6}}><a className="button button-primary" href="#skills">Explore my skills <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#about">A little about me <ArrowDown size={16}/></a></motion.div><motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}><span><Globe2 size={14}/> Pakistan · Working worldwide</span><span className="meta-separator"/><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></motion.div></div>
  <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.25}}><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="code-window"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>umais.dev / profile.jsx</span><span className="window-lock">●</span></div><div className="code-body"><div className="line-no">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10</div><pre><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}{ '\n' }  name: <span className="code-green">'Umais'</span>,{ '\n' }  focus: <span className="code-green">'Full Stack'</span>,{ '\n' }  mindset: <span className="code-green">'Build with care'</span>,{ '\n' }  stack: [{ '\n' }    <span className="code-orange">'React'</span>, <span className="code-orange">'Node.js'</span>,{ '\n' }    <span className="code-orange">'MongoDB'</span>{ '\n' }  ],{ '\n' }  available: <span className="code-pink">true</span>{ '\n' }{'}'}<span className="cursor">▍</span></pre></div><div className="window-status"><span><span className="status-dot"/> All systems creative</span><span>UTF-8&nbsp; · &nbsp;JSX</span></div></div><div className="floating-card float-top"><span className="float-icon"><Code2 size={16}/></span><div><b>Clean code</b><small>Built to scale</small></div></div><div className="floating-card float-bottom"><span className="float-icon float-icon-lime"><Sparkles size={16}/></span><div><b>Pixel mindful</b><small>Every detail matters</small></div></div><div className="art-caption">A GOOD IDEA, MADE REAL. <ArrowUpRight size={13}/></div></motion.div></div><div className="hero-bottom container"><span>SCROLL TO DISCOVER</span><div className="scroll-track"><motion.span animate={{x:[0,100,0]}} transition={{duration:2.5,repeat:Infinity,ease:'easeInOut'}}/></div><span>01 — 04</span></div></section>
}
function About() {
  return <section className="section about-section" id="about"><div className="container"><SectionHeading index="01" title="A bit about me." subtitle="THE PERSON BEHIND THE PIXELS"/><div className="about-grid"><Reveal className="about-main"><p className="big-statement">I build digital things that feel <span>simple on the surface</span> and work beautifully underneath.</p><p className="body-copy">{profile.about}</p><p className="body-copy">I believe great development is a mix of curiosity, consistency, and empathy. I like breaking big problems into thoughtful, maintainable pieces—and learning something new along the way.</p><a className="text-link" href="#experience">My approach to growth <ArrowUpRight size={16}/></a></Reveal><Reveal className="about-aside" delay={.12}><div className="about-note"><div className="note-symbol"><Braces size={21}/></div><p>“Good software is not just what it does. It’s how naturally it fits into someone’s life.”</p><span>— MY WORKING PHILOSOPHY</span></div><div className="stat-row"><div><strong>01<span>+</span></strong><small>Curious mindset</small></div><div><strong>100<span>%</span></strong><small>Commitment</small></div></div></Reveal></div></div></section>
}
function Skills() {
 const icons = [<Code2 size={19}/>,<Terminal size={19}/>,<Database size={19}/>]
 return <section className="section skills-section" id="skills"><div className="container"><SectionHeading index="02" title="My toolkit." subtitle="TOOLS OF THE TRADE"/><div className="skills-intro"><p>Thoughtful tools for building products from the first component to the final API response.</p><span><Layers3 size={16}/> ALWAYS LEARNING, ALWAYS BUILDING</span></div><div className="skills-grid">{skills.map((group,i)=><Reveal key={group.group} className="skill-card" delay={i*.09}><div className="skill-card-top"><span className="skill-icon">{icons[i]}</span><span className="skill-number">0{i+1}</span></div><h3>{group.group}</h3><p className="skill-desc">{i===0?'Interfaces that feel fast, clear, and intuitive.':i===1?'Reliable server-side logic and clean API design.':'A practical workflow from local build to collaboration.'}</p><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></Reveal>)}</div><div className="skills-foot"><Workflow size={16}/><span>My favorite stack is the one that solves the problem well.</span></div></div></section>
}
function Experience() {
 return <section className="section experience-section" id="experience"><div className="container"><SectionHeading index="03" title="The journey so far." subtitle="GROWTH IN PROGRESS"/><div className="experience-layout"><Reveal className="experience-side"><span className="side-stamp"><MousePointer2 size={19}/></span><p className="big-statement">Built through <span>practice,</span> curiosity, and showing up.</p><p className="body-copy">Every project is a chance to get a little better—at the craft, the process, and the way I work with people.</p></Reveal><div className="timeline">{experience.map((item,i)=><Reveal key={item.role} className="timeline-item" delay={i*.12}><div className="timeline-marker"><span/></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-description">{item.description}</p></div></Reveal>)}</div></div></div></section>
}
export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('umais-portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('umais-portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
