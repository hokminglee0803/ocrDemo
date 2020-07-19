import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

class App extends Component{

  ocr_api_endpoint = `https://ocr-ypkwsijlva-de.a.run.app/ocr`;

  constructor(props) {
    super(props);
    this.state = {
        imageFile: null,
        imagePreview:'',
        result: '',
    }
  }

      // Image Preview Handler
      handleImagePreview = (e) => {
        let imageBase64 = URL.createObjectURL(e.target.files[0])
        let imageFiles = e.target.files[0];

        this.setState({
            imagePreview: imageBase64,
            imageFile: imageFiles,
        })
    }

    handleSubmitFile = () => {

      if (this.state.imageFile !== null){

          let formData = new FormData();
          formData.append('file', this.state.imageFile);
          axios.post(
              this.ocr_api_endpoint,
              formData,
              {
                  headers: {
                      "Content-type": "multipart/form-data",
                  },                    
              }
          )
          .then(res => {
            this.setState({
              result: res.data,
            })
          })
          .catch(err => {
              console.log(err);
          })
      }
  }
    
    
    render() { 
      return (
        <View style={styles.container}>
        <Text>OCR Demo Application</Text>
        <StatusBar style="auto" />
        <img src={this.state.imagePreview} alt="image preview"/>  
        <div>
          <input
              type="file"
              onChange={this.handleImagePreview}
          />
        </div>
        <div>
          <input type="submit" onClick={this.handleSubmitFile} value="Submit"/>
        </div>
        <div>
          {this.state.result}
        </div>
      </View>
      );
    }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
