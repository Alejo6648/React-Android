import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'

const Invoice = () => {

  const [storedTotalSamsung, setStoredTotalSamsung] = useState('0')
  const [storedTotalHuawei, setStoredTotalHuawei] = useState('0')
  const [storedTotalMotorola, setStoredTotalMotorola] = useState('0')

  const [storedUniSamsung, setStoredUniSamsung] = useState('0')
  const [storedUniHuawei, setStoredUniHuawei] = useState('0')
  const [storedUniMotorola, setStoredUniMotorola] = useState('0')
  const [storedMasVendido, setStoredMasVnedido] = useState('0')

  const guardarFactura = async () => {
    try {
    
      const storedTotalSamsung = await SecureStore.getItemAsync('totalSamsung')
      const storedTotalHuawei = await SecureStore.getItemAsync('totalHuawei')
      const storedTotalMotorola = await SecureStore.getItemAsync('totalMotorola')

      const storedUniSamsung = await SecureStore.getItemAsync('unidadesSamsung')
      const storedUniHuawei = await SecureStore.getItemAsync('unidadesHuawei')
      const storedUniMotorola = await SecureStore.getItemAsync('unidadesMotorola')
      const storedMasVendido = await SecureStore.getItemAsync('masVendido')

      if(storedTotalSamsung !== null && storedTotalHuawei !== null && storedTotalMotorola !== null && storedUniSamsung !== null && storedUniHuawei !== null && storedUniMotorola !== null){
        
        setStoredTotalSamsung(storedTotalSamsung)
        setStoredTotalHuawei(storedTotalHuawei)
        setStoredTotalMotorola(storedTotalMotorola)
    
        setStoredUniSamsung(storedUniSamsung)
        setStoredUniHuawei(storedUniHuawei)
        setStoredUniMotorola(storedUniMotorola)

        setStoredMasVnedido(storedMasVendido)
        
      }

  } catch (error) {
    alert('Error de factura'+ error)
  }
}

  return (
    <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Cantidad vendida de la marca Samsung: { storedUniSamsung }</Text>
            <Text style={styles.title}>Total: { storedTotalSamsung } </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Cantidad vendida de la marca Huawei: { storedUniHuawei }</Text>
            <Text style={styles.title}>Total: { storedTotalHuawei } </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Cantidad vendida de la marca Motorola: { storedUniMotorola }</Text>
            <Text style={styles.title}>Total: { storedTotalMotorola } </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}> Teléfono mas vendido: {storedMasVendido} </Text>
          </View>
         
        <Pressable style={styles.button}  onPress={guardarFactura}>
          <Text style={styles.textoButton}>Generar factura</Text>
         </Pressable>
    </ScrollView>
  )}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#A569BD',
    margin: 20,
  },
  title: {
      fontSize: 20,
      marginLeft: 20,
      marginTop: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    padding:17,
    marginTop:15,
    backgroundColor: 'black'
},
textoButton:{
  color: "white",
  fontSize:19
}
})
export default Invoice