import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const App: React.FC = () => {
  const [adjective, setAdjective] = useState("");
  const [animal, setAnimal] = useState("");
  const [verb, setVerb] = useState("");
  const [adverb, setAdverb] = useState("");
  const [adjective2, setAdjective2] = useState("");
  const [place, setPlace] = useState("");
  const [food, setFood] = useState("");
  const [animal2, setAnimal2] = useState("");
  const [emotion, setEmotion] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🐾 Funny Zoo Fill-In Game 🐾</Text>

      
      <Image
        source={require("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnt6P1oBpJw0pqgPdiRqex45sx-HOgNVItLA&s")} 
        style={styles.image}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter an adjective"
        value={adjective}
        onChangeText={setAdjective}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an animal"
        value={animal}
        onChangeText={setAnimal}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a verb"
        value={verb}
        onChangeText={setVerb}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an adverb"
        value={adverb}
        onChangeText={setAdverb}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter another adjective"
        value={adjective2}
        onChangeText={setAdjective2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a place"
        value={place}
        onChangeText={setPlace}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a food"
        value={food}
        onChangeText={setFood}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter another animal"
        value={animal2}
        onChangeText={setAnimal2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an emotion"
        value={emotion}
        onChangeText={setEmotion}
      />

      
      <View style={styles.buttonContainer}>
        <Button title="Create My Story!" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5733",
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FFB347",
  },
  input: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#FFB347",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 10,
  },
});