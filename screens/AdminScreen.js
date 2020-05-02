import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function AdminScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('AdminTecnicos')} >
          <Text style={styles.optionText}>Cadastrar técnicos</Text>
        </TouchableOpacity>   
        <View style={styles.separator}/>
        <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('AdminServicos')} >
          <Text style={styles.optionText}>Cadastrar tipos de serviço</Text>
        </TouchableOpacity>    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth:2,
    borderColor:'blueviolet',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:80,
    backgroundColor:'lightblue',
    borderRadius:20,
  },
  separator: {
    margin: 10, 
    height: 2, 
    width:"100%", 
    backgroundColor:"rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 10,
    marginTop: 10,
  },
  contentContainer: {
    alignItems:'center',
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 1,
  },
});
