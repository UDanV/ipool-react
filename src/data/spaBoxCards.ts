import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  poolPhoto,
  saunaPhoto,
  saltRoomPhoto,
} from '@/data/photoLibrary'

export type SpaBoxCard = {
  title: string
  subtitle: string
  to: string
  image: string
}

export const spaBoxCards: SpaBoxCard[] = [
  {
    title: 'Сауна Кроксен',
    subtitle: 'Финская сауна премиум-класса',
    to: '/spa-box/saunaCraxen',
    image: galleryImg1,
  },
  {
    title: 'Дорожка Кнейпа',
    subtitle: 'Контрастные водные процедуры',
    to: '/spa-box/kneipPath',
    image: galleryImg2,
  },
  {
    title: 'Массажный кабинет',
    subtitle: 'Пространство для релакса и терапии',
    to: '/spa-box/massageRoom',
    image: galleryImg3,
  },
  {
    title: 'Инфракрасная кабина',
    subtitle: 'Мягкий прогрев и восстановление',
    to: '/spa-box/infraredCabin',
    image: galleryImg4,
  },
  {
    title: 'Ледогенератор',
    subtitle: 'Ледяные процедуры для spa-зоны',
    to: '/spa-box/iceGenerator',
    image: galleryImg1,
  },
  {
    title: 'Хамам',
    subtitle: 'Турецкая баня с авторским дизайном',
    to: '/spa-box/hamam',
    image: galleryImg2,
  },
  {
    title: 'Травяная сауна',
    subtitle: 'Ароматерапия и мягкий пар',
    to: '/spa-box/herbalSauna',
    image: saunaPhoto,
  },
  {
    title: 'Душ впечатлений',
    subtitle: 'Мультисенсорные водные сценарии',
    to: '/spa-box/impressionShower',
    image: galleryImg3,
  },
  {
    title: 'Соляная комната',
    subtitle: 'Halotherapy для отдыха и здоровья',
    to: '/spa-box/saltRoom',
    image: saltRoomPhoto,
  },
  {
    title: 'Бассейны',
    subtitle: 'Блоки для водных зон spa-box',
    to: '/spa-box/pools',
    image: poolPhoto,
  },
  {
    title: 'Сауны',
    subtitle: 'Готовые sauna-модули под ключ',
    to: '/spa-box/saunas',
    image: saunaPhoto,
  },
]
