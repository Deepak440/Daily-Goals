import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';

import GoalItems from './components/GoalItem';
import GoalInputs from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState([]);
  // modal is not visible in starting
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addgoalHandler = enteredGoalText => {
    setGoals(currentgoals => [
      ...currentgoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);

    setModalIsVisible(false);
  };

  const deleteGoalHandler = id => {
    setGoals(currentgoals => {
      return currentgoals.filter(goal => goal.id !== id);
    });
  };
  // OPen the Modal
  const startGoalHandler = () => {
    setModalIsVisible(true);
  };

  // Close the Modal
  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button  title="Add New Goal" color="#5e0acc" onPress={startGoalHandler} />
      <GoalInputs
        visible={modalIsVisible}
        onAddGoal={addgoalHandler}
        onCancle={endGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItems
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
    
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
