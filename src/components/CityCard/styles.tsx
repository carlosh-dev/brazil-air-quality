import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: "center",
      justifyContent: 'space-between',
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      padding: 0,
      margin: 5,
      width: '95%',
      height: 115,
      shadowColor: theme.colors.secondary,
      elevation: 10,
    },

    icon: {
      width: 50,
      height: 50,
    },

    infoContainer: {
      margin: 10,
    },

    detailsContainer: {
      marginBottom: 5,
      marginEnd: 10,
    },

    cityInfosContainer: {
      flexDirection: 'row',
    },

    label: {
      fontSize: 15,
      color: theme.colors.primary,
    },

    cityName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },

    humidity: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },

    airQuality: {
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopEndRadius: 10,
      borderBottomEndRadius: 10,
      height: '100%',
      padding: 5,
      backgroundColor: theme.colors.primary,
    },

    labelQualityAir: {
      fontSize: 10,
      color: "#fff",
      textAlign: 'center'
    },

    aqius: {
      fontSize: 25,
      color: '#fff',
      fontWeight: 'bold'
    },

    cityRank: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
    },

    qualityAirLabel: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 99,
      height: 20,
      width: 90,
    },

    qualityAirString: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fff',
    },

  });

  export default styles;
  