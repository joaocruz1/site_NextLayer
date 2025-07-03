"use client"

import { useState, useEffect, useRef } from "react" // Importe useRef
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Music } from "lucide-react"

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showMessage, setShowMessage] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [cats, setCats] = useState<Array<{ id: number; x: number; direction: number }>>([])
  const [pawPrints, setPawPrints] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [backgroundElements, setBackgroundElements] = useState<
    Array<{ id: number; x: number; y: number; type: string; color: string; delay: number; duration: number }>
  >([])
  const [isClient, setIsClient] = useState(false)

  // Referência para o elemento de áudio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsClient(true)
    setTimeout(() => setShowMessage(true), 600)

    // Gerar elementos de fundo apenas no cliente
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.random() > 0.5 ? "paw" : "dot",
      color: [
        "#fed7aa", // laranja claro
        "#fde68a", // amarelo
        "#fecaca", // rosa
        "#e9d5ff", // roxo claro
        "#d1d5db", // cinza (cor de gato)
        "#fef3c7", // creme
      ][Math.floor(Math.random() * 6)],
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
    setBackgroundElements(elements)

    // Gatos caminhando ocasionalmente
    const catInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createWalkingCat()
      }
    }, 5000)

    return () => clearInterval(catInterval)
  }, [])

  // Função para alternar a reprodução da música
  const toggleMusicPlayback = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Erro ao tentar tocar a música:", error);
          // Explicação: Navegadores modernos podem bloquear a reprodução automática
          // A reprodução deve ser iniciada por uma interação do usuário.
          // O catch aqui ajuda a identificar se o bloqueio ocorreu.
          alert("Por favor, clique novamente para tocar a música (o navegador pode ter bloqueado a reprodução automática).");
        });
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const createWalkingCat = () => {
    const newCat = {
      id: Date.now(),
      x: -10,
      direction: 1,
    }
    setCats((prev) => [...prev, newCat])

    setTimeout(() => {
      setCats((prev) => prev.filter((cat) => cat.id !== newCat.id))
    }, 8000)
  }

  const createHearts = () => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: 0,
    }))
    setHearts((prev) => [...prev, ...newHearts])

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => !newHearts.includes(heart)))
    }, 4000)
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    createPawPrints()
    setTimeout(() => setShowConfetti(false), 3500)
  }

  const createPawPrints = () => {
    const newPaws = Array.from({ length: 25 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setPawPrints((prev) => [...prev, ...newPaws])

    setTimeout(() => {
      setPawPrints((prev) => prev.filter((paw) => !newPaws.includes(paw)))
    }, 4000)
  }

  // Não renderizar elementos aleatórios até que o cliente esteja carregado
  if (!isClient) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50  via-rose-50 to-purple-50">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
          <div className="animate-pulse text-center">
            <div className="text-4xl mb-4">🎂</div>
            <p className="text-gray-500">Preparando a festa...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
      {/* Elementos de fundo com tema de gatos */}
      <div className="absolute inset-0 opacity-30">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.type === "paw" ? (
              <div className="text-2xl opacity-40 transform rotate-12">🐾</div>
            ) : (
              <div className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: element.color }} />
            )}
          </div>
        ))}
      </div>

      {/* Gatos caminhando */}
      {cats.map((cat) => (
        <div
          key={cat.id}
          className="absolute bottom-20 text-4xl z-30"
          style={{
            left: `${cat.x}%`,
            animation: "cat-walk 8s linear forwards",
          }}
        >
          🐱
        </div>
      ))}

      {/* Pegadas de gato */}
      {pawPrints.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-2xl opacity-70 pointer-events-none"
          style={{
            left: `${paw.x}%`,
            top: `${paw.y}%`,
            animation: "paw-fade 4s ease-out forwards",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          🐾
        </div>
      ))}

      {/* Confetes com tema de gatos */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-lg opacity-90"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fall-confetti ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 1}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["🐱", "🐾", "🎀", "🧶", "🐟", "🥛"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Corações flutuantes */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none opacity-80"
          style={{
            left: `${heart.x}%`,
            bottom: `${heart.y}%`,
            animation: "float-hearts 4s ease-out forwards",
            zIndex: 20,
          }}
        >
          <Heart className="w-6 h-6 text-pink-500 fill-current animate-pulse" />
        </div>
      ))}

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Seção da imagem fixa */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${showMessage ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="relative">
            {/* Gatinhos decorativos ao redor da foto */}
            <div className="absolute -top-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: "0s" }}>
              😸
            </div>
            <div className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: "0.5s" }}>
              😻
            </div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: "1s" }}>
              🙀
            </div>
            <div className="absolute -bottom-4 -right-4 text-3xl animate-bounce" style={{ animationDelay: "1.5s" }}>
              😽
            </div>

            <div className="relative">
              <img
                src="/niver.png?height=192&width=320"
                alt="Pessoa especial"
                className="w-64 h-40 md:w-80 md:h-48 rounded-2xl object-cover shadow-xl border-4 border-orange-200"
              />
            </div>
          </div>
        </div>

        {/* Título com tema felino */}
        <div
          className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${showMessage ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent mb-4 tracking-wide">
            Feliz Aniversário
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="text-2xl mr-2">🐾</div>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-300 via-amber-300 to-rose-300 rounded-full" />
            <div className="text-2xl ml-2">🐾</div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-light">Para uma pessoa muito especial! 💕</p>
        </div>

        {/* Card principal */}
        <Card
          className={`max-w-2xl mx-auto mb-8 bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl transform transition-all duration-1000 delay-400 ${showMessage ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 rounded-full mb-4 shadow-lg">
                <div className="text-4xl">🎁</div>
              </div>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="animate-fade-in text-lg" style={{ animationDelay: "1s" }}>
                Hoje celebramos você e tudo o que torna sua presença tão especial em nossas vidas. Sua bondade, alegria
                e autenticidade iluminam os dias de todos ao seu redor de uma forma única e especial.
              </p>

              <p className="animate-fade-in text-lg" style={{ animationDelay: "1.3s" }}>
                Que este novo ano seja repleto de momentos significativos, conquistas que tragam satisfação genuína e
                experiências que enriqueçam ainda mais sua jornada de vida.
              </p>

              <p className="animate-fade-in text-lg" style={{ animationDelay: "1.6s" }}>
                Continue sendo essa pessoa incrível que inspira e toca corações. Você merece toda a felicidade, todo o
                amor e todas as realizações que a vida pode oferecer.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              <span className="text-sm font-medium text-gray-500">Com muito carinho e admiração</span>
            </div>
          </CardContent>
        </Card>

        {/* Botões temáticos */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={triggerConfetti}
            className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white px-8 py-3 font-medium transform hover:scale-110 transition-all duration-300 shadow-lg border-0 rounded-full"
          >
            <div className="text-lg mr-2">🎉</div>

          </Button>

          <Button
            onClick={createHearts}
            className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white px-8 py-3 font-medium transform hover:scale-110 transition-all duration-300 shadow-lg border-0 rounded-full"
          >
            <div className="text-lg mr-2">🐱</div>

          </Button>

          <Button
            onClick={toggleMusicPlayback} // Chama a nova função para MP3
            className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white px-8 py-3 font-medium transform hover:scale-110 transition-all duration-300 shadow-lg border-0 rounded-full"
          >
            <Music className={`w-5 h-5 mr-2 ${musicPlaying ? "animate-bounce" : ""}`} />
            {musicPlaying ? "⏸️" : "▶️"}
          </Button>

          <Button
            onClick={createWalkingCat}
            className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-3 font-medium transform hover:scale-110 transition-all duration-300 shadow-lg border-0 rounded-full"
          >
            <div className="text-lg mr-2">🐾</div>

          </Button>
        </div>

        {/* Mensagem final */}
        <div className="mt-12 text-center">
          <p className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent text-lg font-medium tracking-wide animate-pulse">
            Um dia especial para uma pessoa especial! ✨
          </p>
          <div className="mt-2 text-2xl animate-bounce">🎉💕🎂</div>
        </div>
      </div>

      {/* Adicione o elemento de áudio (oculto) */}
      <audio ref={audioRef} src="/musica_aniversario.mp3" loop onEnded={() => setMusicPlaying(false)} />

      {/* Estilos CSS */}
      <style jsx>{`
        @keyframes cat-walk {
          0% {
            left: -10%;
            transform: scaleX(1);
          }
          50% {
            left: 50%;
            transform: scaleX(1);
          }
          100% {
            left: 110%;
            transform: scaleX(1);
          }
        }

        @keyframes paw-fade {
          0% {
            opacity: 0.8;
            transform: scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(360deg);
          }
        }

        @keyframes fall-confetti {
          0% {
            transform: translateY(-20px) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(120vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes float-hearts {
          0% {
            transform: translateY(0) scale(0.5) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-30vh) scale(1) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-60vh) scale(1.2) rotate(180deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-90vh) scale(1) rotate(270deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-120vh) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}