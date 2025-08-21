import React from 'react';

interface YandexPanoramaProps {
  width?: string;
  height?: string;
}

const YandexPanorama: React.FC<YandexPanoramaProps> = ({
  width = '100%',
  height = '400',
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=39.798403%2C47.258663&mode=whatshere&panorama%5Bdirection%5D=66.309862%2C-17.998250&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=39.797882%2C47.258743&panorama%5Bspan%5D=115.088307%2C60.000000&tab=panorama&utm_source=share&whatshere%5Bpoint%5D=39.798403%2C47.258663&whatshere%5Bzoom%5D=17&z=17"
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default YandexPanorama;