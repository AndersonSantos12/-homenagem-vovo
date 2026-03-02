

import './App.css';
import { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Fireworks } from 'fireworks-js/dist/react';
function Countdown() {
  const targetDate = new Date('2026-03-08T00:00:00');
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  const [highlight, setHighlight] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [phrase, setPhrase] = useState('');
  const phrases = [
    'Cada dia é um presente! 💝',
    'Você é inspiração para todos nós!',
    'Família é o maior tesouro.',
    'Sorria, o grande dia está chegando!',
    'A vida é feita de momentos especiais.',
    'Gratidão por cada história vivida.',
    'Seu amor nos une sempre!',
    'Hoje é um novo capítulo de alegria!'
  ];
  // Avatar SVG simples
  const avatar = (
    <svg width="60" height="60" viewBox="0 0 60 60" className="avatar-animado">
      <circle cx="30" cy="30" r="28" fill="#f7e9ff" stroke="#a97ff7" strokeWidth="2" />
      <ellipse cx="30" cy="32" rx="14" ry="16" fill="#ffe0b2" />
      <ellipse cx="30" cy="38" rx="10" ry="7" fill="#fff" />
      <ellipse cx="24" cy="30" rx="2.5" ry="3" fill="#7a3a8a" />
      <ellipse cx="36" cy="30" rx="2.5" ry="3" fill="#7a3a8a" />
      <path d="M25 42 Q30 46 35 42" stroke="#a97ff7" strokeWidth="2" fill="none" />
    </svg>
  );

  // Mensagem personalizada
  function getCustomMessage() {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      return 'Hoje é o grande dia! Parabéns Júlia Maria!';
    } else if (timeLeft.days === 0 && timeLeft.hours < 24) {
      return 'É amanhã! Prepare o coração!';
    } else if (timeLeft.days <= 3) {
      return 'Faltam poucos dias para celebrar!';
    } else {
      return `Faltam apenas ${timeLeft.days} dias para o aniversário de Júlia Maria!`;
    }
  }

  // Efeito partículas químicas (bolhas animadas)
  function ParticulasQuimicas() {
    return (
      <div className="particulas-quimicas">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`bolha bolha${i+1}`}></span>
        ))}
      </div>
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({days, hours, minutes, seconds});
      } else {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
      }
    }, 1000);
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setHighlight(true);
    const timeout = setTimeout(() => setHighlight(false), 800);
    // Frase motivacional do dia
    const dia = new Date().getDate() % phrases.length;
    setPhrase(phrases[dia]);
    // Confete e fogos no dia do aniversário
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      setShowFireworks(true);
      setShowConfetti(true);
    } else {
      setShowFireworks(false);
      setShowConfetti(false);
    }
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return (
    <div className={`countdown-container destaque ${highlight ? 'pulse' : ''}`}
      style={{position:'relative', overflow:'visible'}}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={400} />} 
      {showFireworks && <Fireworks options={{rocketsPoint: {min: 0, max: 100}}} style={{top:0, left:0, width:'100vw', height:'100vh', position:'fixed', zIndex:1000}} />} 
      <ParticulasQuimicas />
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1em'}}>
        {avatar}
        <span className="countdown-emoji">🎉</span>
      </div>
      <span className="countdown-title">{getCustomMessage()}</span>
      <div className="countdown-numbers">
        <span>{timeLeft.days.toString().padStart(2, '0')}</span> : <span>{timeLeft.hours.toString().padStart(2, '0')}</span> : <span>{timeLeft.minutes.toString().padStart(2, '0')}</span> : <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
      <div className="countdown-labels">
        <span>Dias</span> <span>Horas</span> <span>Min</span> <span>Seg</span>
      </div>
      <div className="frase-motivacional">{phrase}</div>
      <button className="btn-compartilhar" onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: 'Homenagem à Júlia Maria',
            text: 'Veja esta homenagem especial para Júlia Maria!',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copiado! Agora é só colar e compartilhar.');
        }
      }}>Compartilhar contagem</button>
    </div>
  );
}

const fotos = [
  { src: '/fotos/foto1.jpg', alt: 'Júlia Maria e filhos', legenda: 'Júlia Maria e seus filhos reunidos' },
  { src: '/fotos/foto2.jpg', alt: 'Família reunida', legenda: 'Família reunida em um momento especial' },
  { src: '/fotos/foto3.jpg', alt: 'Júlia Maria e filhos', legenda: 'Mais um momento de união familiar' },
  { src: '/fotos/foto4.jpg', alt: 'Júlia Maria', legenda: 'Júlia Maria, a homenageada' },
  { src: '/fotos/foto5.jpg', alt: 'Júlia Maria', legenda: 'Júlia Maria em um momento especial' },
];

function ElementoQuimico({ simbolo, nome, descricao }) {
  return (
    <div className="elemento-quimico">
      <div className="simbolo">{simbolo}</div>
      <div className="nome">{nome}</div>
      <div className="descricao">{descricao}</div>
    </div>
  );
}

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [showYoutube, setShowYoutube] = useState(false);
  return (
    <div className="homenagem-container">
      <Countdown />
      <div className="player-musica">
        <button className="btn-musica" onClick={() => setShowYoutube(!showYoutube)}>
          {showYoutube ? 'Pausar Louvor' : 'Tocar Louvor'}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao">(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família. Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos. Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>


      <section className="versos-homenagem">
        <h2>Mulher Guerreira, Esteio da Família Vieira</h2>
        <div className="versos">
          <p>No dia da mulher nasceu uma estrela,<br/>
          Júlia Maria, guerreira, força tão bela.<br/>
          Em cada ruga, uma história de amor,<br/>
          Em cada olhar, esperança e calor.</p>
          <p>Esteio da família Vieira, raiz e flor,<br/>
          Com mãos de ternura, construiu o lar,<br/>
          Com coragem e fé, ensinou a lutar,<br/>
          E com seu abraço, nos faz sempre sonhar.</p>
          <p>Mulher de fibra, exemplo e luz,<br/>
          Que a vida inteira carrega a cruz,<br/>
          Mas nunca perde o brilho no olhar,<br/>
          E faz da simplicidade seu jeito de amar.</p>
          <p>Hoje celebramos seus 84 anos de vida,<br/>
          Com gratidão, alegria e emoção sentida.<br/>
          Júlia Maria, orgulho e inspiração,<br/>
          Nosso alicerce, nossa maior razão.</p>
        </div>
      </section>

      <section className="elementos-quimicos">
        <h2>Elementos da Vida de Júlia</h2>
        <div className="elementos-lista">
          <ElementoQuimico simbolo="Am" nome="Amor" descricao="Amor incondicional que une toda a família." />
          <ElementoQuimico simbolo="Sa" nome="Sabedoria" descricao="Conselhos e histórias que inspiram gerações." />
          <ElementoQuimico simbolo="Fo" nome="Força" descricao="Resiliência diante dos desafios da vida." />
          <ElementoQuimico simbolo="Al" nome="Alegria" descricao="Sorrisos e momentos felizes compartilhados." />
        </div>
      </section>

      <section className="galeria-fotos">
        <h2>Momentos em Família</h2>
        <div className="fotos-lista">
          {fotos.map((foto, idx) => (
            <div className="foto-item" key={idx}>
              <img src={foto.src} alt={foto.alt} />
              <div className="legenda">{foto.legenda}</div>
            </div>
          ))}
        </div>
      </section>

        <section className="depoimentos fade-in">
          <h2>Depoimentos dos Filhos</h2>
          <div className="depoimentos-lista">
            <div className="depoimento-item">
              <p>“Mãe, você é nossa inspiração diária. Obrigado por tudo!”</p>
              <span>— Com carinho, seus filhos</span>
            </div>
            {/* Adicione mais depoimentos aqui se desejar */}
          </div>
        </section>

        <div className="compartilhar fade-in">
          <button onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Homenagem à Júlia Maria',
                text: 'Veja esta homenagem especial para Júlia Maria!',
                url: window.location.href
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copiado! Agora é só colar e compartilhar.');
            }
          }}>
            Compartilhar com a família
          </button>
        </div>

      <footer>
        <p>Com todo amor dos seus filhos e família 💖</p>
      </footer>
    </div>
  );
}

export default App;
