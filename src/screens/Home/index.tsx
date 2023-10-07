import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]) 
  const [participantName, setParticipantName] = useState('') 

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }
    
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Gostaria de remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log("particpant removed" + name)
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
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleRemoveParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}