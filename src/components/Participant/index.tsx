import { Text, TouchableOpacity, View  } from 'react-native';

import { styles } from './styles';

type ParticipantProps = {
  name: string 
}

export function Participant({ name }: ParticipantProps){
  function handleRemoveParticipant() {
    console.log('particpant removed')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}