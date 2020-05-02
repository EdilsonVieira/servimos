import * as React from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Alert, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TabBarIcon from '../components/TabBarIcon';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import * as SQLite from 'expo-sqlite';

// Open local db
const db = SQLite.openDatabase("db.db");

function MyTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable      
      autoCapitalize={'sentences'}
    />
  );
}

export default function HomeScreen({navigation}) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [tipoServico, setTipoServico] = useState('');
  const [strDate, setStrDate] = useState('');
  const [strDatePlaceHolder, setStrDatePlaceHolder] = useState((strDate.length === 0) ? 'Data desejada para realização do serviço' : '');
  const [contato, setContato] = useState('');
  const [telefone, setTelefone] = useState('');
  const [desc, setDesc] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    selectedDate = currentDate;
    setStrDate(format(selectedDate, "dd/MM/yyyy"));
  };
  
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };

  const criarServico = () => {

    db.transaction(
      tx => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [tipoServico]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      null
    );
    Alert.alert('Um novo serviço foi solicitado!');
    setTipoServico('');
    setStrDate('');
    setContato('');
    setTelefone('');
    setDesc('');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <MyTextInput returnKeyType={'next'} style={styles.textInput} onChange = {(text) => {setTipoServico(text)}}
            value={tipoServico} placeholder = "Tipo do serviço desejado"/>
          <MyTextInput returnKeyType={'next'} style={styles.textInput} value={strDate}
            placeholder = {strDatePlaceHolder} onFocus={showDatepicker} blurOnSubmit={false} showSoftInputOnFocus={false} />
          <MyTextInput returnKeyType={'next'} style={styles.textInput} onChange = {(text) => {setContato(text)}}
            value={contato} placeholder = "Nome do contato"/>
          <MyTextInput returnKeyType={'next'} style={styles.textInput} onChange = {(text) => {setTelefone(text)}}
            value={telefone} placeholder = "Telefone do contato"/>
          <MyTextInput multiline numberOfLines={4} maxLength={200} style={styles.myMultiLineTextInput} onChange = {(text) => {setDesc(text)}}
            value={desc} placeholder = "Descrição detalhada do serviço"/>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress = {() => criarServico()} >
            <TabBarIcon focused={true} name="ios-add-circle-outline" />
          </TouchableOpacity>          
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}        
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  myMultiLineTextInput: { 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textInput: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 4,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row-reverse', 
    width: 200,
    padding: 5,
    marginTop: 10,
  },
  button: {
    borderWidth:2,
    borderColor:'blueviolet',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'lightblue',
    borderRadius:40,
  },
  inputContainer: {
    flex: 1,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  }
});
