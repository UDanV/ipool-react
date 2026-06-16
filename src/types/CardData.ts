import saltRoom from '@/assets/salt-room-temp.jpg'
import pool from '@/assets/pool-img-temp.jpg'
import sauna from '@/assets/sauna-img-temp.jpg'

export interface CardData {
  id: number
  title: string
  subtitle: string
  image: string
}

export const cards: CardData[] = [
    { id: 1, title: 'Соляная комната', subtitle: 'Будда', image: saltRoom },
    { id: 2, title: 'Сауна', subtitle: 'Крутая', image: sauna },
    { id: 3, title: 'Бассейн', subtitle: 'Зелёный', image: pool },
    { id: 4, title: 'Соляная комната', subtitle: 'Смелый', image: saltRoom },
    { id: 5, title: 'Бассейн', subtitle: 'Морской', image: pool },
    { id: 6, title: 'Бассейн', subtitle: 'Japan-city', image: pool },
    { id: 7, title: 'Бассейн', subtitle: 'Два круга', image: pool },
];