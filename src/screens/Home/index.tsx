import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './styles'
import {LOGO} from '../../images'
import CityCard from '../../components/CityCard';
import RankList from '../../components/RankList';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={LOGO}
        style={styles.image}
      />

      <View style={styles.header}>
        <Text style={ styles.title }>MONITORAMENTO DE QUALIDADE DO AR DOS ESTADOS BRASILEIROS</Text>
        <Text style={ styles.subtitle }>Aqui listamos o rank de estados com pior índice de qualidade no ar atualmente.</Text>
      </View>
      
      <RankList/>
      
    </View>
  );
}
