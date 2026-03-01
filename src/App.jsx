

import './App.css';
import { useState, useRef } from 'react';

const fotos = [
  { src: '/fotos/foto1.jpg', alt: 'Júlia Maria e filhos', legenda: 'Júlia Maria e seus filhos reunidos' },
  { src: '/fotos/foto2.jpg', alt: 'Família reunida', legenda: 'Família reunida em um momento especial' },
  { src: '/fotos/foto3.jpg', alt: 'Júlia Maria e filhos', legenda: 'Mais um momento de união familiar' },
  { src: '/fotos/foto4.jpg', alt: 'Júlia Maria', legenda: 'Júlia Maria, a homenageada' },
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
