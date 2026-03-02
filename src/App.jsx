import React from 'react';
import MainPage from './MainPage';

export default function App() {
  return <MainPage />;
}
function Countdown() {
  // Data do aniversário: 8 de março de 2026, 00:00:00
  const targetDate = new Date(2026, 2, 8, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container" style={{textAlign:'center', margin:'32px 0'}}>
      <div className="countdown-titulo" style={{fontSize:'1.3rem', fontWeight:'bold', marginBottom:8}}>
        {timeLeft.days > 0
          ? `Faltam apenas ${timeLeft.days} dia${timeLeft.days === 1 ? '' : 's'} para o aniversário de Júlia Maria!`
          : timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0
            ? 'Hoje é o grande dia!'
            : 'Parabéns, Júlia Maria!'}
      </div>
      {(timeLeft.days > 0 || timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0) && (
        <div className="countdown-numeros" style={{fontSize:'2.2rem', letterSpacing:'2px', fontFamily:'monospace', marginBottom:4}}>
          <span>{String(timeLeft.days).padStart(2, '0')}</span> :
          <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      )}
      <div className="countdown-labels" style={{fontSize:'0.9rem', color:'#888'}}>Dias Horas Min Seg</div>
    </div>
  );
}

function App() {
  const [showYoutube, setShowYoutube] = useState(false);
  return (
    <div className="homenagem-container" style={{maxWidth:600, margin:'0 auto', background:'#fff', borderRadius:16, boxShadow:'0 2px 16px #0002', padding:24}}>
      <FundoParticulasQuimicas />
      <Countdown />
      <header style={{textAlign:'center'}}>
        <div className="foto-capa-container" style={{marginBottom:16}}>
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" style={{width:180, borderRadius:'50%', border:'4px solid #a97ff7', boxShadow:'0 2px 8px #0003'}} />
        </div>
        <h1 style={{fontFamily:'serif', color:'#7a3a8a'}}>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem" style={{fontSize:'1.1rem', color:'#444', margin:'16px 0 0 0'}}>
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família.<br/>
          Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos.<br/>
          Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>
      <div className="player-musica" style={{textAlign:'center', margin:'24px 0'}}>
        <button className="btn-musica" style={{padding:'10px 24px', borderRadius:8, background:'#a97ff7', color:'#fff', border:'none', fontWeight:'bold', fontSize:'1rem', cursor:'pointer', marginBottom:8}} onClick={() => setShowYoutube(!showYoutube)}>
          {showYoutube ? 'Pausar Louvor' : 'Tocar Louvor'}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao" style={{fontSize:'0.9rem', color:'#888'}}>(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>
      <section className="versos-homenagem" style={{margin:'32px 0'}}>
        <h2 style={{color:'#a97ff7', fontWeight:'bold'}}>Mulher Guerreira, Esteio da Família Vieira</h2>
        <div className="versos" style={{fontSize:'1.05rem', color:'#333', marginTop:12}}>
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
      {/* Adicione aqui galeria, depoimentos, botão de compartilhar, etc. */}
    </div>
  );
}

export default App;

function FundoParticulasQuimicas() {
  return (
    <div className="fundo-particulas">
      <svg className="atomo-svg atomo1" width="60" height="60" viewBox="0 0 60 60">
        <ellipse cx="30" cy="30" rx="24" ry="10" fill="none" stroke="#a97ff7" strokeWidth="2"/>
        <ellipse cx="30" cy="30" rx="10" ry="24" fill="none" stroke="#e67e22" strokeWidth="2"/>
        <circle cx="30" cy="30" r="6" fill="#ffe0b2" stroke="#7a3a8a" strokeWidth="2"/>
        <circle cx="54" cy="30" r="3" fill="#a97ff7" />
        <circle cx="30" cy="6" r="3" fill="#e67e22" />
        <circle cx="6" cy="30" r="3" fill="#7a3a8a" />
        <circle cx="30" cy="54" r="3" fill="#a97ff7" />
      </svg>
      <svg className="atomo-svg atomo2" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="20" cy="30" r="8" fill="#e67e22" opacity="0.7" />
        <circle cx="40" cy="30" r="8" fill="#a97ff7" opacity="0.7" />
        <circle cx="30" cy="45" r="6" fill="#7a3a8a" opacity="0.7" />
        <line x1="20" y1="30" x2="40" y2="30" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="20" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
        <line x1="40" y1="30" x2="30" y2="45" stroke="#ffe0b2" strokeWidth="3" />
      </svg>
    </div>
  );
}
function Countdown() {
  const targetDate = new Date(2026, 2, 8, 0, 0, 0); // mês 2 = março (0-index)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  function getTimeLeft() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="countdown-container">
      <div className="countdown-titulo">
        {timeLeft.days > 0
          ? `Faltam apenas ${timeLeft.days} dia${timeLeft.days === 1 ? '' : 's'} para o aniversário de Júlia Maria!`
          : timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0
            ? 'Hoje é o grande dia!'
            : 'Parabéns, Júlia Maria!'}
      </div>
      {timeLeft.days > 0 || timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <div className="countdown-numeros">
          <span>{String(timeLeft.days).padStart(2, '0')}</span> :
          <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      ) : null}
      <div className="countdown-labels">
        Dias Horas Min Seg
      </div>
    </div>
  );
}


function Countdown() {
  // Defina a data do aniversário (exemplo: 8 de março de 2026, 00:00:00)
  const targetDate = new Date(2026, 2, 8, 0, 0, 0); // mês 2 = março (0-index)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-titulo">
        {timeLeft.days > 0
          ? `Faltam apenas ${timeLeft.days} dia${timeLeft.days === 1 ? '' : 's'} para o aniversário de Júlia Maria!`
          : timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0
            ? 'Hoje é o grande dia!'
            : 'Parabéns, Júlia Maria!'}
      </div>
      {timeLeft.days > 0 || timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <div className="countdown-numeros">
          <span>{String(timeLeft.days).padStart(2, '0')}</span> :
          <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      ) : null}
      <div className="countdown-labels">
        Dias Horas Min Seg
      </div>
    </div>
  );
}

function App() {
  const [showYoutube, setShowYoutube] = useState(false);
  return (
    <div className="homenagem-container">
      <FundoParticulasQuimicas />
      <Countdown />
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o verdadeiro elemento essencial da nossa família. Júlia Maria, sua força, carinho e sabedoria são a base de tudo que somos. Que este dia seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>
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
      {/* Adicione aqui galeria, depoimentos, botão de compartilhar, etc. */}
    </div>
  );
}

export default App;
function Countdown() {
  const targetDate = new Date(2026, 2, 8, 0, 0, 0); // mês 2 = março (0-index)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  function getTimeLeft() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="countdown-container">
      <div className="countdown-titulo">
        {timeLeft.days > 0
          ? `Faltam apenas ${timeLeft.days} dia${timeLeft.days === 1 ? '' : 's'} para o aniversário de Júlia Maria!`
          : timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0
            ? 'Hoje é o grande dia!'
            : 'Parabéns, Júlia Maria!'}
      </div>
      {timeLeft.days > 0 || timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <div className="countdown-numeros">
          <span>{String(timeLeft.days).padStart(2, '0')}</span> :
          <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      ) : null}
      <div className="countdown-labels">
        Dias Horas Min Seg
      </div>
    </div>
  );
}

import React from 'react';
import MainPage from './MainPage';

export default function App() {
  return <MainPage />;
}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe width="1" height="1" style={{minWidth:'1px',minHeight:'1px',opacity:0.01}} src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1" title="Louvor" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="audio-instrucao">(O áudio será reproduzido. Para pausar, clique novamente no botão acima.)</div>
          </div>
        )}
      </div>
      {/* Adicione aqui as seções de versos, galeria, depoimentos, botão de compartilhar, etc. */}
    </div>
  );
}

export default App;

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


      <div className="compartilhar fade-in">
        {/* Botão de compartilhar ou conteúdo aqui */}
      </div>


    </div>
  );
}

export default App;
