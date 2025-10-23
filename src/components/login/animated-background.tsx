"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradiente animado de fondo */}
      <div className="animated-gradient absolute inset-0" />

      {/* Partículas flotantes que representan conocimiento */}
      <div className="particles-container absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Páginas de libros flotando */}
      <div className="pages-container absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`page-${i}`}
            className="floating-page"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="knowledge-circles absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="knowledge-circle"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="books-container absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`book-${i}`}
            className="floating-book"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="pencils-container absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`pencil-${i}`}
            className="floating-pencil"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Estrellas de logros */}
      <div className="stars-container absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="achievement-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay con patrón de cuadrícula sutil */}
      <div className="grid-overlay absolute inset-0" />
    </div>
  )
}
