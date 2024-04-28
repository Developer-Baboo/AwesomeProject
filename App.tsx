import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import CustomText from './components/CustomText';
import Loading from './components/Loading';
import TextInputExample from './components/TextForm';
import SimpleList from './components/SimpleList';
import { useState } from 'react';

function App(){

  const [loading, setLoading] = useState(false);
  const [form, setform] = useState(false);
  const [list, setlist] = useState(false);

  function showComponents(title:string){
    if(title=='loading'){
      setform(false)
      setlist(false)
      setLoading(true);
    }else if(title == 'form'){
      setLoading(false)
      setlist(false)
      setform(true);
    }else if(title=='list'){
      setform(false)
      setlist(false)
      setlist(true);
    }else{
      setLoading(true);
      setform(true);
      setlist(true);
    }
  }

  return (
    <>
      <View>
        <Text style={styles.textStyle}>Demo of Components</Text>
      </View>
      <View>
      <Button 
          style={[styles.buttons, {backgroundColor: 'red'}]} 
          textColor='white'
          labelStyle={{fontSize:20}}
          onPress={()=>showComponents('loading')}
          >
          Show loading
      </Button>
      <Button 
          style={[styles.buttons, {backgroundColor: 'blue'}]} 
          textColor='white'
          labelStyle={{fontSize:20}}
          onPress={()=>showComponents('form')}
          >
          Show Form
      </Button>
      <Button 
          style={[styles.buttons, {backgroundColor: 'green'}]} 
          textColor='white'
          labelStyle={{fontSize:20}}
          onPress={()=>showComponents('list')}
          >
          Show Flatlist
      </Button>
      <Button 
          style={[styles.buttons, {backgroundColor: 'black'}]} 
          textColor='white'
          labelStyle={{fontSize:20}}
          onPress={()=>showComponents('')}
          >
          Show All
      </Button>
      </View>
      <View>
        {loading ? <Loading /> : ''}
        {form ? <TextInputExample /> : ''}
        {list ? <SimpleList /> : ''}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:30,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    borderRadius: 3,
    marginBottom:10
  }
});

export default App;