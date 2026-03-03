import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaGift,
  FaHeart,
  FaPlay,
  FaPause,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaBirthdayCake,
  FaStar,
} from "react-icons/fa";

function Confetti() {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    animationDuration: 3 + Math.random() * 2,
  }));

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            backgroundColor: [
              "#ff6b9d",
              "#c44569",
              "#f7b731",
              "#5f27cd",
              "#00d2d3",
              "#ff9ff3",
            ][piece.id % 6],
          }}
        />
      ))}
    </div>
  );
}

function Countdown() {
  const targetDate = new Date(2026, 2, 8, 0, 0, 0); // mês 2 = março (0-index)
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isComplete: false };
  });

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, isComplete: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isComplete) {
    return (
      <>
        <Confetti />
        <div className="birthday-celebration">
          <div className="celebration-icon bounce">
            <FaGift />
          </div>
          <h1 className="celebration-title">Parabéns, vovó Júlia Maria!</h1>
          <p className="celebration-message">
            Hoje é o seu dia especial!{" "}
            <FaBirthdayCake className="inline-icon" />{" "}
            <FaStar className="inline-icon" />
          </p>
          <p className="celebration-subtitle">
            Que este novo ano de vida seja repleto de alegrias, saúde e amor!{" "}
            <FaHeart className="inline-icon heart-icon" />
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="countdown-container destaque pulse">
      <div className="countdown-icon">
        <FaGift />
      </div>
      <span className="countdown-title">
        Faltam apenas{" "}
        <span className="countdown-days">
          {timeLeft.days} dia{timeLeft.days === 1 ? "" : "s"}
        </span>{" "}
        para o aniversário de Júlia Maria!
      </span>
      <div className="countdown-numbers">
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="label">Dias</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="label">Horas</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="label">Min</span>
        </div>
        <span className="separator">:</span>
        <div className="countdown-item">
          <span className="number">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="label">Seg</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showYoutube, setShowYoutube] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const fotos = [
    {
      src: "/fotos/foto1.jpg",
      alt: "Júlia Maria e filhos",
      legenda: "Júlia Maria e seus filhos reunidos",
    },
    {
      src: "/fotos/foto2.jpg",
      alt: "Família reunida",
      legenda: "Família reunida em um momento especial",
    },
    {
      src: "/fotos/foto3.jpg",
      alt: "Júlia Maria e filhos",
      legenda: "Mais um momento de união familiar",
    },
    {
      src: "/fotos/foto6op.png",
      alt: "Júlia Maria",
      legenda: "Júlia Maria, a homenageada",
    },
    {
      src: "/fotos/foto8op.png",
      alt: "Júlia Maria",
      legenda: "Júlia Maria em um momento especial",
    },
  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % fotos.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="homenagem-container">
      <Countdown />
      <div className="player-musica">
        <button
          className="btn-musica"
          onClick={() => setShowYoutube(!showYoutube)}
        >
          {showYoutube ? (
            <>
              <FaPause /> Pausar Louvor
            </>
          ) : (
            <>
              <FaPlay /> Tocar Louvor
            </>
          )}
        </button>
        {showYoutube && (
          <div className="youtube-audio-player">
            <iframe
              width="1"
              height="1"
              style={{ minWidth: "1px", minHeight: "1px", opacity: 0.01 }}
              src="https://www.youtube.com/embed/rxN3q1iFVAY?autoplay=1"
              title="Louvor"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <header>
        <div className="foto-capa-container">
          <img src="/fotos/foto4.jpg" alt="Júlia Maria" className="foto-capa" />
        </div>
        <h1>Feliz 84 anos, Júlia Maria!</h1>
        <p className="mensagem">
          Hoje celebramos a vida de uma mulher extraordinária, que é o
          verdadeiro elemento essencial da nossa família. Júlia Maria, sua
          força, carinho e sabedoria são a base de tudo que somos. Que este dia
          seja repleto de amor, alegria e gratidão por tudo que você representa!
        </p>
      </header>
      <section className="versos-homenagem">
        <h2>Mulher Guerreira, Esteio da Família Vieira</h2>
        <div className="versos">
          <p>
            No dia da mulher nasceu uma estrela,
            <br />
            Júlia Maria, guerreira, força tão bela.
            <br />
            Em cada ruga, uma história de amor,
            <br />
            Em cada olhar, esperança e calor.
          </p>
          <p>
            Esteio da família Vieira, raiz e flor,
            <br />
            Com mãos de ternura, construiu o lar,
            <br />
            Com coragem e fé, ensinou a lutar,
            <br />E com seu abraço, nos faz sempre sonhar.
          </p>
          <p>
            Mulher de fibra, exemplo e luz,
            <br />
            Que a vida inteira carrega a cruz,
            <br />
            Mas nunca perde o brilho no olhar,
            <br />E faz da simplicidade seu jeito de amar.
          </p>
          <p>
            Hoje celebramos seus 84 anos de vida,
            <br />
            Com gratidão, alegria e emoção sentida.
            <br />
            Júlia Maria, orgulho e inspiração,
            <br />
            Nosso alicerce, nossa maior razão.
          </p>
        </div>
      </section>
      <section className="elementos-quimicos">
        <h2>Elementos da Vida de Júlia</h2>
        <div className="elementos-lista">
          <div className="elemento-quimico">
            <div className="simbolo">Amor</div>
            <br />
            <div className="descricao">
              Amor incondicional que une toda a família.
            </div>
          </div>
          <div className="elemento-quimico">
            <div className="simbolo">Sabedoria</div>
            <br />
            <div className="descricao">
              Conselhos e histórias que inspiram gerações.
            </div>
          </div>
          <div className="elemento-quimico">
            <div className="simbolo">Força</div>
            <br />
            <div className="descricao">
              Resiliência diante dos desafios da vida.
            </div>
          </div>
          <div className="elemento-quimico">
            <div className="simbolo">Alegria</div>
            <br />
            <div className="descricao">
              Sorrisos e momentos felizes compartilhados.
            </div>
          </div>
        </div>
      </section>
      <section className="galeria-fotos">
        <h2>Momentos em Família</h2>
        <div className="fotos-lista">
          {fotos.map((foto, index) => (
            <div
              className="foto-item"
              key={index}
              onClick={() => openLightbox(index)}
            >
              <img src={foto.src} alt={foto.alt} />
              <div className="legenda">{foto.legenda}</div>
            </div>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FaChevronLeft />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedImageIndex}
              src={fotos[selectedImageIndex].src}
              alt={fotos[selectedImageIndex].alt}
            />
            <div className="lightbox-legenda">
              {fotos[selectedImageIndex].legenda}
            </div>
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {fotos.length}
            </div>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      <section className="depoimentos fade-in">
        <h2>Depoimentos dos Filhos</h2>
        <div className="depoimentos-lista">
          <div className="depoimento-item">
            <p>"Mãe, você é nossa inspiração diária. Obrigado por tudo!"</p>
            <span>— Com carinho, seus filhos</span>
          </div>
        </div>
      </section>
      <div className="compartilhar fade-in">
        <button>
          <FaShareAlt /> Compartilhar com a família
        </button>
      </div>
      <footer>
        <p>
          Com todo amor dos seus filhos e família{" "}
          <FaHeart className="heart-icon" />
        </p>
      </footer>
    </div>
  );
}

export default App;
