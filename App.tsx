import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ 
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Nome do evento  
      </Text>

      <Text style={{ 
        color: '#fff',
        fontSize: 16,
      }}>
        Sexta, 4 de Outubro de 2023.
      </Text>
      <StatusBar style={'inverted'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
});
