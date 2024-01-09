import { View, Text, Image, Button, Linking } from 'react-native';
import Like from './Like';

const MH='https://www.figma.com/file/Tl3lkWE2vOii7PWQHz7eOl/MEDICAL-HEALTH?type=design&node-id=0-1&mode=design&t=KZOlp67W1vASoelm-0';
const Ayamku='https://github.com/DevinRizky';

const Project = () => {
  return(
    <View style={{backgroundColor:'#FFFFFF', padding:'100', alignItems:'center'}}>
      <Text style={{marginTop : 20, fontWeight:'bold', fontSize:20,textAlign:'center', color:'black'}}>My Project</Text>
        <Image style={{marginTop:10,width:300, height:200, borderRadius:10}} source={require('../assets/Group758530599.png')}/>

        <View style={{marginTop:10,marginLeft:-185,}}>
        <Text style={{fontWeight:'Bold', fontSize:'500',textAlign:'Left', color:'black'}}>Medical Health</Text>
        <Like />
        </View>
        
        <View 
        style={{
          marginTop:-55, 
          marginLeft:160,
          }}>
      <Button title="Check this out!" color="black" onPress={()=> Linking .openURL(MH)}
      />
           </View>
  
        <Image style={{width:300, height:200, borderRadius:10, marginTop:10}} source={require('../assets/admindsbrd.png')}/>
        <View style={{marginTop:10,marginLeft:-170,}}>
        <Text style={{fontWeight:'Bold', fontSize:'500',textAlign:'left', color:'black'}}>Ayamku</Text>
        <Like />
        </View>

        <View 
        style={{
          marginTop:-55, 
          marginLeft:160,
          }}>
      <Button title="Check this out!" color="black" onPress={()=> Linking .openURL(Ayamku)}
      />
           </View>
    </View>

  )
}
export default Project;