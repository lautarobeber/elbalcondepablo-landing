function unsplash(id, w, h) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`
}
import localDentro from "../assets/GENTE.jpg"
import localFuera1 from "../assets/afuera1.jpg"
import elLocal from '../assets/elbalcon.jpg'
import plato1 from '../assets/plato1.jpg'
import gpt from '../assets/gpt.png'
import mesacopas from '../assets/mesacopas.jpg'
import elbalcon from "../assets/elbalcon.jpg"
import marco from "../assets/marco.jpg"
export const articles = [
  {
    id: 1,
    label: 'Interview',
    title: 'De architect die Eindhoven opnieuw tekent',
    excerpt:
      'Een gesprek over geometrische gevels, herbestemde fabrieksvloeren en de spanning tussen erfgoed en vooruitgang in een stad die nooit stilstaat.',
    image: unsplash('1487958449943-2429e8be8625', 900, 1125),
  },
  {
    id: 2,
    label: 'Interview',
    title: 'Maken in de marge: het atelier als werkplaats',
    excerpt:
      'In een voormalige Philips-hal werken drie ontwerpers aan objecten die weigeren decoratief te zijn — functie eerst, esthetiek als gevolg.',
    image: unsplash('1503387762-592deb58ef4e', 900, 1125),
  },
  {
    id: 3,
    label: 'Interview',
    title: 'Licht, staal en het geheugen van een fabriekshal',
    excerpt:
      'Hoe een team van restauratoren en lichtontwerpers een industrieel monument teruggaf aan de stad, zonder de littekens te verbergen.',
    image: unsplash('1497366754035-f200968a6e72', 900, 1125),
  },
]

export const heroPhotos = [
  {
    id: 'a',
    src: gpt,
    className: 'w-[300px] lg:w-[260px] top-[10px] left-[62%] lg:top-[10px] lg:left-[64%]',
  },
  {
    id: 'b',
    src: localDentro,
    className: 'lg:w-[300px] top-[430px] left-[25%] lg:top-[460px] lg:left-[3%]',
  },
  
]
