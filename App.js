import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    let word1 = "Bebé... ";
    let word2 = "Te amo <3";

    let origen = "SM 15";
    let destino = "SM 50";

    const words = word1 + '      ' + word2;

    const wordsComilla = `${word1} más palabras ${word2}`;

    console.log(words);
    console.log(wordsComilla);

    console.log(`El costo del viaje de ${origen} a la ${destino} es de $50 pesos`);

    console.log('El costo del viaje de ' + origen + ' a la ' + destino + ' es de $50 pesos');

    console.log("SEA HA LLAMADO AL CONTRUCTOR");

    this.add(4, 5, 7, 8, 12)

    this.state = { text: '' };

  }

  componentDidMount() {

    console.log("SEA HA LLAMADO AL componentDidMount()");

    this.add(4, 5, 7, 8, 12)
  }




  add(...nums) {

    console.log(nums);
  }

  mostrarTexto(text) {
    console.log(text);


    fetch('https://ximbal.azurewebsites.net/xmblAPI/oauth/region/findByNombre', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: text
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.log(error)
      });

    this.setState({ text }, () => {
      //console.log(this.state);
    });
    /// API //////

  }

  imprimirState() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.mostrarTexto(text)}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
