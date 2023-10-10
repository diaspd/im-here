import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert  } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

import { getActualDate } from '../../utils/get-actual-date'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]) 
  const [participantName, setParticipantName] = useState('') 
  const { day, month, weekDay, fullYear } = getActualDate()

  function handleAddParticipant() {
    if (participantName === '') {
      return
    }

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
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.eventName} 
        numberOfLines={1} 
        placeholderTextColor="#d3d3d3" 
        placeholder='Nome do evento'
        maxLength={28}
      />

      <Text style={styles.eventDate}>
        {weekDay}, {day} de {month} de {fullYear.toString()}.
      </Text>

      <View style={styles.form}>      
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={!participantName ? styles.buttonDisabled : styles.button} onPress={handleAddParticipant}>
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