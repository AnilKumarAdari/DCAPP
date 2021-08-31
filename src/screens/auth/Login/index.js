
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Input from '../../../components/Input';

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={styles.container}>
     <Image style={[styles.image,{width:90}]} 
     source={{uri:'https://pbs.twimg.com/profile_images/1278573210099838976/iJLFmB9P_400x400.jpg'}} 
     />
      <View style={{ alignItems: 'center', marginVertical: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#28589B' }}>Welcome!</Text>
        <Text style={{ color: 'grey' }}>Login to your existing Account</Text>
      </View>
      <StatusBar style="auto" />
      <Input 
      label="User name" 
      onChangeInput={(text) => setUsername(text)} 
      icon={() => <Icon name="user" size={20} color="grey" />} />
      <Input 
      label="Password" 
      onChangeInput={(text) => setPassword(text)} 
      icon={() => <Icon name="lock" size={20} color="grey" />} 
      secureTextEntry />
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setIsModal(true)}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setIsModal(true)}>
        <Text style={styles.forgot_button}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{marginTop:'30%',flexDirection:'row'}}>
      <Image 
      style={styles.image} 
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/IATAlogo.svg/1200px-IATAlogo.svg.png'}}
      resizeMode="contain" />
        <Image 
      style={styles.image} 
      source={{uri:'https://www.whereabouts.in/wp-content/uploads/2020/08/TAAI-LOGO.jpg-1.jpg'}}
      resizeMode="cover" />
       <Image 
      style={styles.image} 
      source={{uri:'https://diginomica.com/sites/default/files/images/2018-03/amadeuslogo.jpg'}}
      resizeMode="contain" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={() => {
          setIsModal(false)
        }}>
        <View
          style={{
            marginTop: 'auto',
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.boldText}>
                FORGOT PASSWORD
              </Text>
              <Icon name="close" size={25} color="#fff" onPress={() => setIsModal(false)} />
            </View>
            <View style={styles.modalSeclayer}>
              <Input label="Enter Email ID"
                onChangeInput={setEmail}
                icon={() => <Icon name="mail" size={20} color="grey" />}
                containerStyle={{ marginTop: 10 }} 
                keyboardType="email-address"/>
              <TouchableOpacity style={[styles.loginBtn, { height: 50 }]}>
                <Text style={styles.loginText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30
  },
  image: {
    marginBottom: 40,
    height:60,
    width:60
  },
  modalContainer: {
    backgroundColor: '#28589B',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 15,
  },
  boldText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 'bold'
  },
  modalSeclayer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 15
  },
  forgot_button: {
    height: 50,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28589B",
  },
  loginText: {
    color: "#fff",
    fontWeight: '700'
  },
});