import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View ,Button,  ActivityIndicator,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

class App extends React.Component{

  ocr_api_endpoint = `https://ocr-ypkwsijlva-de.a.run.app/ocr`;

  constructor(props) {
    super(props);
    this.state = {
        imageFile: null,
        result: '',
        image: null,
        loading: false
    }
  }

  componentDidMount() {
    this.getCameraRollPermissionAsync();
    this.getCameraPermissionAsync();
  }
      getCameraRollPermissionAsync = async () => {
      if (Constants.platform.ios)  {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };

      getCameraPermissionAsync = async () => {
        if (Constants.platform.ios)  {
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        };

    handleSubmitFile = async() => {
      if (this.state.image !== null){
      
        this.setState({loading: true});
        const img = document.getElementById('id')
        
      fetch(img.src)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'dot.png', blob)
        console.log(file)

        let formData = new FormData();
          formData.append('file',file );
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
              loading: false
            })
          })
          .catch(err => {
            this.setState({
              result: "Unexpected Error, please try with other photo",
              loading: false
            })
          })
      })
      }
      
  }

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  pickImageFromCamera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64 : true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
    
    
    render() { 
      let { image,result,loading} = this.state;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>OCR Demo Application</Text>
          <StatusBar style="auto" /> 
          <Button title="Pick an image from Camera roll" onPress={this.pickImage}  />
          <Button title="Pick an image from Camera" onPress={this.pickImageFromCamera} />
          {image && 
          <React.Fragment>
            <Button title="Convert" onPress={() => this.handleSubmitFile()} />
            <img id="id" src={image.uri} style={{ width: 200, height: 200 }}/>
          </React.Fragment>
          }
          <ActivityIndicator
            animating={loading} />
          <View>
            {
              result !== ''?
              <Text> {result}</Text>
                :null
            }
          </View>
        </View>
      );
    }
}

export default App;