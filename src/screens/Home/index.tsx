import { Text, TextInput, View, TouchableOpacity, ScrollView  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [ 'Pedro', 'Rodrigo', 'Diego', 'Mayk', 'John', 'Jack', 'Rafaela', 'João', 'Ana']

  function handleAddParticipant() {
    console.log('fds')
  }

  function handleRemoveParticipant(name: string) {
    console.log('particpant removed' + name)
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

      <ScrollView> 
        {
          participants.map(participant => (
            <Participant 
              key={participant} 
              name={participant} 
              onRemove={() => handleRemoveParticipant(participant)} 
            />
          ))
        }
      </ScrollView>
    </View>
  );
}