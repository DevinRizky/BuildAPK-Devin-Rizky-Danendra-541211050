import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Like() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'black', 
          marginBottom: 20
        }}
        onPress={handleLike}
      >
        <AntDesign name="like2" size={20} color="white" />
        <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          marginLeft: 6,
          borderWidth: 2,
          borderColor: 'black', 
          marginBottom: 20
        }}
        onPress={handleDislike}
      >
        <AntDesign name="dislike2" size={20} color="white" />
        <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>{dislikes}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Like;