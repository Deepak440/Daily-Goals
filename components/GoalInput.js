import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal, Image} from 'react-native';

const GoalInputs = props => {
  const [enteredGoalText, setenteredText] = useState('');

  const goalInputHandler = enteredText => {
    setenteredText(enteredText);
  };

  const addgoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setenteredText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addgoalHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancle}  color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color : '#120438',
    borderRadius : 6,
    width: '100%',
    padding: 15,
  },

  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 10,
  },

  image: {
    width: 100,
    height: 100,
  },
});

export default GoalInputs;
