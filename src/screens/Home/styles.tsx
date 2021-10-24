import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 60,
    },

    header: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
    },

    image: {
      width: 100,
      height: 80,
      alignSelf: 'center',
    },

    title: {
        fontSize: 27,
        color: theme.colors.primary,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    subtitle: {
        fontSize: 18,
        marginTop: 10,
        color: theme.colors.texts,
        textAlign: 'center',
        fontWeight: '100',
    },

    
  });

  export default styles;
  