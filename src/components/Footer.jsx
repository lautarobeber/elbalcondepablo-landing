import { Clock, MapPin, Phone } from 'lucide-react';

// Datos de la marca
const BRAND_NAME = "El Balcón de Pedro";
const INSTAGRAM_HANDLE = "@elbalcondepedro";
const INSTAGRAM_URL = "https://www.instagram.com/elbalcondepedro/";

// Dirección y Coordenadas exactas obtenidas del enlace de Google Maps
const ADDRESS = "Av. Costanera y el Río, Victoria, Entre Ríos 3153";
const LAT_LNG = "-32.6254654,-60.170593";

// Mapas usando las coordenadas exactas para evitar fallos de geocodificación por texto
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${LAT_LNG}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/place/El+Balc%C3%B3n+de+Pedro/@${LAT_LNG},17z/data=!3m1!4b1!4m6!3m5!1s0x95b6c2d9f4c257c9:0x35023790ea125f23!8m2!3d-32.6254654!4d-60.170593!16s%2Fg%2F11c5551xb3`;

const INFO_BLOCKS = [
  {
    icon: Clock,
    label: 'Horarios',
    lines: [
      'Viernes — 20:30 a 01:00',
      'Sábado — 12:00 a 16:00 y 20:30 a 00:00',
      'Domingo — 12:00 a 16:00'
    ],
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    lines: [ADDRESS],
    link: { href: MAP_DIRECTIONS_HREF, text: 'Cómo llegar' },
  },
  {
    icon: Phone,
    label: 'Contacto',
    lines: ['+54 9 3436 XX-XXXX', INSTAGRAM_HANDLE],
  },
];

// Ícono de Instagram inline
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="relative w-full bg-[#CED6D9] pt-16 sm:pt-20 lg:pt-24 pb-8 px-4 sm:px-8 overflow-hidden z-1">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* COLUMNA IZQUIERDA: marca + información */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="font-serif text-xl text-[#365A69] tracking-wide">{BRAND_NAME}</h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#617C87]">
                  Gastronomía de Río
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
              {INFO_BLOCKS.map(({ icon: Icon, label, lines, link }) => (
                <div key={label} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon size={15} strokeWidth={1.5} className="text-[#B29D80]" />
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#365A69]">
                      {label}
                    </h3>
                  </div>
                  <div className="text-[13px] text-[#617C87] leading-relaxed">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {link && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#B29D80] hover:text-[#365A69] transition-colors"
                    >
                      {link.text} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: mapa de Google con coordenadas fijas */}
          <div className="lg:col-span-7">
            <div className="w-full h-[280px] sm:h-[340px] lg:h-full min-h-[280px] rounded-2xl overflow-hidden border border-[#617C87]/25 shadow-lg">
              <iframe
                title={`Ubicación de ${BRAND_NAME} en Google Maps`}
                src={MAP_EMBED_SRC}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: copyright + Instagram */}
        <div className="mt-14 lg:mt-16 pt-6 border-t border-[#617C87]/25 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.15em] text-[#617C87]">
          <p>© 2026 {BRAND_NAME}. Todos los derechos reservados.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#365A69] transition-colors"
          >
            <InstagramIcon width={14} height={14} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  );
}