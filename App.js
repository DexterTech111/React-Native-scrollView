import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, ScrollView   } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const onlineImages = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/160',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/160',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/160',
  // Add more image URLs here
  // ...
];

export default function App() {
  return (
    <View style={styles.container}>
      
       <ScrollView contentContainerStyle={styles.scrollView}>
      {onlineImages.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>

        
        <View style={{borderWidth: 0, marginBottom: 50}}>
          <TextInput
                  style={styles.textInput}
                  placeholder="Enter your text here"
                  // Additional props for TextInput can be added here
                />



          <View style={styles.btnd}>
              <Button  title="Submit"  onPress={() => alert('it worked!')}  />
          </View>
        </View>






        <View  style={{bottom: 0, position: 'absolute', alignItems: 'center'}}>
            <Text>lil baby !</Text>
            <Text >Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
              
    </View>
  );
}



// this is a style section 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE9E8',
    alignItems: 'center',
    paddingTop: 25,
    //justifyContent: '',
  },
  img1: {
     width: screenWidth, 
     height: 310
  }, 

  textInput: {
    width: screenWidth - 40, // Adjust padding or margins accordingly
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  btnd: {
    marginTop: 20,
    width: screenWidth - 40,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#841584', // Change the container color
    color: '#000',
    marginBottom: 10,
  },

  
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 160,
    height: 160, // Assuming square images
    padding: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

});
