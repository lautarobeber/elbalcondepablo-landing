import leafSvg from '../assets/svg-hero.svg'

// Tamaño responsivo: chico en mobile, crece con el viewport hasta el máximo
// pensado para desktop. Evita hojas gigantes en pantallas chicas.
function responsiveSize(maxPx) {
  const minPx = Math.round(maxPx * 0.42)
  const vw = Math.round((maxPx / 16) * 10) / 10
  return `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`
}

function Leaf({ top, left, right, bottom, size, rotate = 0, flip = false, opacity = 0.05, hideOnMobile = false }) {
  return (
    <img
      src={leafSvg}
      alt=""
      draggable={false}
      className={`absolute select-none ${hideOnMobile ? 'hidden sm:block' : ''}`}
      style={{
        top,
        left,
        right,
        bottom,
        width: responsiveSize(size),
        height: 'auto',
        opacity,
        transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
      }}
    />
  )
}

// Se usa -z-10 (en vez de z-0) para que el fondo quede siempre detrás del
// contenido en flujo normal (no posicionado) de la sección; combinado con
// `isolate` en el contenedor de la sección, evita que la hoja se filtre
// sobre o detrás de otras secciones.
//
// Importante: las posiciones se mantienen dentro de 0%-100% (sin offsets
// negativos) para que ninguna hoja quede a mitad de camino sobre el borde
// de la sección — con overflow-hidden eso se ve como una hoja "cortada"
// justo en el corte entre secciones.
export default function LeafBackground({ leaves, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </div>
  )
}

export const heroLeaves = [
  { top: '4%', left: '3%', size: 300, rotate: -18, opacity: 0.12 },
  { top: '58%', right: '4%', size: 380, rotate: 35, opacity: 0.11, flip: true },
  { top: '10%', left: '46%', size: 160, rotate: 70, opacity: 0.09, hideOnMobile: true },
  { bottom: '6%', left: '20%', size: 220, rotate: -50, opacity: 0.09, hideOnMobile: true },
  { top: '32%', left: '9%', size: 140, rotate: 100, opacity: 0.08 },
  { top: '32%', left: '18%', size: 600, rotate: 100, opacity: 0.08 },
  { bottom: '10%', right: '20%', size: 180, rotate: -60, opacity: 0.09, flip: true, hideOnMobile: true },
  { top: '4%', right: '30%', size: 110, rotate: 15, opacity: 0.08, hideOnMobile: true },
  { bottom: '4%', left: '55%', size: 260, rotate: 8, opacity: 0.09, flip: true },
]

export const introLeaves = [
  { top: '4%', right: '3%', size: 260, rotate: 20, opacity: 0.16 },
  { bottom: '4%', left: '3%', size: 300, rotate: -35, opacity: 0.16, flip: true },
  { top: '42%', right: '2%', size: 170, rotate: 80, opacity: 0.13, hideOnMobile: true },
  { top: '8%', left: '4%', size: 150, rotate: -25, opacity: 0.12 },
  { bottom: '18%', right: '10%', size: 190, rotate: 55, opacity: 0.12, flip: true, hideOnMobile: true },
  { top: '65%', left: '10%', size: 130, rotate: -80, opacity: 0.11, hideOnMobile: true },
]

export const galleryLeaves = [
  { top: '6%', left: '3%', size: 220, rotate: -10, opacity: 0.13, flip: true },
  { bottom: '5%', right: '4%', size: 260, rotate: 40, opacity: 0.13 },
  { top: '45%', left: '55%', size: 140, rotate: -70, opacity: 0.1, hideOnMobile: true },
  { top: '15%', right: '10%', size: 120, rotate: 25, opacity: 0.1, hideOnMobile: true },
  { bottom: '20%', left: '25%', size: 160, rotate: 90, opacity: 0.1, flip: true, hideOnMobile: true },
]

export const footerLeaves = [
  { top: '4%', left: '5%', size: 240, rotate: 15, opacity: 0.14 },
  { bottom: '4%', right: '3%', size: 300, rotate: -25, opacity: 0.14, flip: true },
  { top: '30%', right: '15%', size: 130, rotate: 60, opacity: 0.11, hideOnMobile: true },
  { top: '10%', left: '35%', size: 110, rotate: -45, opacity: 0.1, hideOnMobile: true },
  { bottom: '12%', left: '20%', size: 170, rotate: 100, opacity: 0.11, flip: true, hideOnMobile: true },
]

export const navbarLeaves = [
  { top: '15%', right: '3%', size: 90, rotate: 25, opacity: 0.1, hideOnMobile: true },
  { top: '20%', left: '2%', size: 70, rotate: -20, opacity: 0.09, hideOnMobile: true },
]
