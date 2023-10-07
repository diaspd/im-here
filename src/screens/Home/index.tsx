import { Text, TextInput, View, TouchableOpacity  } from 'react-native';

import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('fds')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento  
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Outubro de 2023.
      </Text>

      <View style={styles.form}>      
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}