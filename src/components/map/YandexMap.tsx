import { YMaps, Map, Placemark } from 'react-yandex-maps';
import logo from '@/assets/logo-ico.png'

const YandexMap = () => {
  return (
    <div className='w-full h-[50vh] max-w-full'>
      <YMaps query={{ apikey: import.meta.env.VITE_API_YA_KEY }}>
        <Map
          defaultState={{ center: [47.258663, 39.798403], zoom: 17 }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={[47.258663, 39.798403]}
            modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
            properties={{
              iconCaption: 'iPool',               
              hintContent: 'г. Ростов-на-Дону, ул. Зеленая 8а',  
              balloonContent: '<b>iPool</b><br/>Время работы:<br/>09:00 - 18:00', 
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: logo, 
              iconImageSize: [40, 40],                        
              iconImageOffset: [-20, -20],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;