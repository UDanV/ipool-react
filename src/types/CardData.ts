import saltRoom from '@/assets/salt-room-temp.jpg'
import pool from '@/assets/pool-img-temp.jpg'
import sauna from '@/assets/sauna-img-temp.jpg'

export interface CardData {
  title: string
  subtitle: string
  image: string
}

export const cards: CardData[] = [
    { title: 'Соляная комната', subtitle: 'Будда', image: saltRoom },
    { title: 'Сауна', subtitle: 'Крутая', image: sauna },
    { title: 'Бассейн', subtitle: 'Зелёный', image: pool },
    { title: 'Соляная комната', subtitle: 'Смелый', image: saltRoom },
    { title: 'Бассейн', subtitle: 'Морской', image: pool },
    { title: 'Бассейн', subtitle: 'Japan-city', image: pool },
    { title: 'Бассейн', subtitle: 'Два круга', image: pool },
    { title: 'Бассейн', subtitle: 'Japan-city', image: pool },
    { title: 'Бассейн', subtitle: 'Два круга', image: pool },
    { title: 'Бассейн', subtitle: 'Japan-city', image: pool },
]