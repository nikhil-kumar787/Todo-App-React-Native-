import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Ionicons} from '@expo/vector-icons'

 class AddTodo extends Component {
   state= {
       text:''
   }

   addTodo= (text) => {
       //redux store
       this.props.dispatch(addTodo(text))
       this.setState({text:''})

   }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
            <TextInput
            onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placehodler="Ex. Create New Todo"
                style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
            />
            <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                <View style={{ height: 50, backgroundColor: '#eaeaea' ,alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name='md-add' size={30} style={{color:'#de9595', padding:10}}/>
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


