import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import database from '../config';
import firebase from 'firebase';

export default class WriteStory extends React.Component {
  state = {
    title: '',
    author: '',
    story: ''
  };
  submitStory = () => {
    database
      .collection('stories')
      .add({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      });
    this.setState({
      title: '',
      author: '',
      story: ''
    });
  };
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Story Hub', style: { color: '#fff'  }  }}
        />
        <TextInput
          style={styles.titleInput}
          placeholder='Enter your story title'
          value={this.state.title}
          onChangeText={(text) => {
            this.setState({
              title: text
            });
          }}
        />
        <TextInput
          style={styles.authorInput}
          placeholder='Enter the author name'
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({
              author: text
            });
          }}
        />
        <TextInput
          style={styles.storyInput}
          placeholder='Write your story here'
          multiline
          value={this.state.story}
          onChangeText={(text) => {
            this.setState({
              story: text
            });
          }}
        />
        <TouchableOpacity style={styles.submitButton} onPress={this.submitStory} >
          <Text>Submit Story</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleInput: {
    height: 50,
    marginHorizontal: 25,
    marginVertical: 20,
    marginTop: 60,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
  authorInput: {
    height: 50,
    marginHorizontal: 25,
    marginVertical: 40,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
  storyInput: {
    height: 340,
    marginHorizontal: 25,
    marginVertical: 20,
    paddingLeft: 7,
    borderWidth: 1.2,
    borderRadius: 6
  },
  submitButton: {
    backgroundColor: '#2089dc',
    paddingVertical: 12,
    marginHorizontal: 130,
    marginTop: 25,
    alignItems: 'center'
  }
});
