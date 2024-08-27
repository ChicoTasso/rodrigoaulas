import * as React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000000"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Default')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      color: '#000000',
      marginBottom: 40,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: '#000000',
      marginBottom: 20,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#1ed760',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });