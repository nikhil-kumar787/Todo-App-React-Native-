import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default function TodoApp() {
    return (
        <View style={styles.container}>
            <AddTodo />
            <View >
                <VisibleTodos />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
});
