import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import WeatherIcon from '../WeatherIcon';
import styles from './styles'

interface Props {
  city: string,
  rank: number,
  humidity: number,
  qualityAir: number,
  temperature: number,
  windSpeed: number,
  iconType: string,
}

export default function CityCard({
  city,
  rank,
  humidity,
  qualityAir,
  temperature,
  windSpeed,
  iconType,
}: Props) {


  var qualityAirString = "Carregando..."
  var qualityAirColor = theme.qualityColors.q1;

  if(qualityAir > 0 && qualityAir <= 50){
    qualityAirString = "Bom";
    qualityAirColor = theme.qualityColors.q1;
  }else if(qualityAir > 50 && qualityAir <= 100){
    qualityAirString = "Moderado";
    qualityAirColor = theme.qualityColors.q2;
  }else if(qualityAir > 100 && qualityAir <= 150){
    qualityAirString = "Ruim";
    qualityAirColor = theme.qualityColors.q3;
  }else if(qualityAir > 150 && qualityAir <= 200){
    qualityAirString = "Muito ruim";
    qualityAirColor = theme.qualityColors.q4;
  }else if(qualityAir > 200 && qualityAir <= 300){
    qualityAirString = "Crítico";
    qualityAirColor = theme.qualityColors.q5;
  }else if(qualityAir > 300){
    qualityAirString = "Perigoso";
    qualityAirColor = theme.qualityColors.q5;
  }

  return (
    <View style={styles.container}>

      <View style={styles.infoContainer}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.label} >Cidade</Text>
          <Text style={styles.cityName}>{city}</Text>
        </View>

        <View>
          <WeatherIcon iconType={iconType} style={styles.icon}/>
        </View>
        
      </View>        
        

        <View style={styles.cityInfosContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.label} >Umidade</Text>
            <Text style={styles.humidity}>{humidity}%</Text>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label} >Velc. vento</Text>
            <Text style={styles.humidity}>{windSpeed}m/s</Text>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.label} >Temperatura</Text>
            <Text style={styles.humidity}>{temperature}°C</Text>
          </View>
        </View>        
      </View>


      <View style={styles.airQuality}>
        <Text style={styles.cityRank} > Rank #{rank}</Text>
        <Text style={styles.labelQualityAir} > Índice de{'\n'}Qualidade do Ar</Text>
        <Text style={styles.aqius}>{qualityAir}</Text>
        <View style={[
          styles.qualityAirLabel, 
          { backgroundColor: qualityAirColor }]}
        >
          <Text style={styles.qualityAirString}>{qualityAirString}</Text>
        </View>
        
      </View>  
      
    </View>
  );
}
