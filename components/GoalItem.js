import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const GoalItems = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color : '#210644'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}> {props.text} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    color: 'white',
  },
  goalText: {
    padding :8,
    color: 'white',
  },
});

export default GoalItems;
