import { Text, TextInput, View, TouchableOpacity  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  function handleAddParticipant() {
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

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Pedro Dias" />
      <Participant name="Diego" />
      <Participant name="Mayk" />
      <Participant name="Rodrigo" />
    </View>
  );
}