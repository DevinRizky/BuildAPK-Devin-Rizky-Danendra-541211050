import{ View, Text, Image, Button, Linking } from 'react-native';

const contactme ='https://www.instagram.com/devin.gentong/';

const About = () => {
  return(
    <View style={{backgroundColor:'#FFFFFF', padding:'100', alignItems:'center'}}>
        <Image 
        style={{width:200, height:200, borderRadius:200, margin:20}} 
        source={require('../assets/Devin.jpeg')}/>
        <Text style={{fontWeight:'bold', fontSize:20,textAlign:'center', color:'black'}}>Devin Rizky Danendra</Text>
        <Text style={{fontWeight:'medium', textAlign:'center', color:'black',marginTop:20, padding:20}}> Saya 
        <Text style={{fontWeight:'bold'}}> Devin Rizky Danendra.</Text> Seorang Siswa SMK Telkom Purwokerto dari Jurusan Rekayasa Perangkat Lunak. Passion saya, bergerak di bagian <Text style={{fontWeight:'bold'}}>Pemrograman Web</Text>.</Text>
        <Button title="Contact Me" color='black' onPress={() => Linking .openURL(contactme)}/>
        </View>
        )
}
export default About;