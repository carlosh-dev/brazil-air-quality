import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./styles";
import CityCard from "../../components/CityCard";
import { Load } from "../Load";
import { api } from "../../services/api";

interface CityProps {
  city:string,
  rank: number,
  hu: number,
  aqius: number,
  tp: number,
  ws: number,
  ic: string,
}

export default function RankList() {

  const [load, setLoad] = useState(true);
  const [rankCities, setRankCities] = useState<CityProps[]>([]);

  useEffect(() => {
    async function fetchCities() {
      const data:any = await api.get('city');
      setRankCities(data.data);  
      setLoad(true);
    }

    fetchCities();

  }, [])


  const testeJSON = [
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
    { city: "São Paulo", rank: 1, hu: 60, aqius: 102, tp: 19, ws: 3, ic: "02d" },
    { city: "Rio de Janeiro", rank: 2, hu: 35, aqius: 45, tp: 37, ws: 5, ic: "01d" },
  ];

  useEffect(()=> {
    setTimeout(()=>{
      setLoad(false);
    }, 2000)
  })
  

  if(load) 
    return <Load/>

  return(

    <View style={styles.container}>
      <FlatList
        data={rankCities}
        renderItem={({ item }) => (
          <CityCard
            city={item.city}
            rank={item.rank}
            humidity={item.hu}
            qualityAir={item.aqius}
            temperature={item.tp}
            windSpeed={item.ws}
            iconType={item.ic}
          />
        )}
          keyExtractor={(item: CityProps, index: number) => index.toString()}
          showsVerticalScrollIndicator={false}
      />
    </View>    
  );
}
