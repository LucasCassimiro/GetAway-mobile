import React from 'react';
// import { foodIcons } from '../../utils/Icons';	//utilizando ícones personalizados
// import MarkerIcon from '../MarkerIcon';	//utilizando ícones personalizados
import {Marker} from 'react-native-maps';	

export default function MarkerImpl({
  onPress,	//parâmetro que nos permite passar uma função que será chamada sempre que o marcador for pressionado
  mark,		//parâmetro que recebe as informações do marcador
}) {
  return (
    <Marker
      onPress={onPress}
      tracksViewChanges={false}	//propriedade que melhora muito a performance do nosso aplicativo, mantendo os marcadores fixados no mapa e eliminando a renderização continua.
      key={mark._id}	//como temos vários marcadores, devemos adicionar um id para cada
      coordinate={{	//aqui nós inserimos a localização do marcador no mapa
        latitude: mark.latitude,
        longitude: mark.longitude
      }}
      title={`Marker_${mark.title}`}	//título do marcador
    >
      {/* <MarkerIcon emoji={foodIcons[3].data} />	//personalizando o ícone no centro do marcador */}

    </Marker>
  );
}