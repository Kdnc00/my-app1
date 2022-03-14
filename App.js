import React,{useState} from "react";
import { Text,SafeAreaView, StyleSheet,Image,View,Button,TouchableOpacity}from "react-native";

function MyCustomButton(props){
  return(
    <TouchableOpacity 
      style={[styles.button,props.style]} onPress={props.onPress}>
    
     <Text style={styles.buttonText}>{props.title}</Text>
    
    
    </TouchableOpacity>
  );

}
//let count  = 0;
function App() { 
  const [count, setCount]= useState(0);

  const handleIncrement = () => {
    //count = count + 1;
   // alert(count);
    setCount(count +1);

  };
  const handleDecrement = () => {
   // count = count -1;
    //alert (count);
    setCount(count -1);
  };
  
  return(
   <SafeAreaView>
     <View style={styles.container}>
       <Image 
        source={{uri: "https:avatars.mds.yandex.net/i?id=881153f3488db266b962ce7c58b57554-5239342-images-thumbs&n=13"}} 
        style={styles.image} 
      />
      
       <Text style={styles.text} >
       Conter: {count}</Text>
       <Text style={styles.subtitle}>
       Click buttons to change the.
       </Text>
       {/*<View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
       </View>
         {/*<View style={styles.buttonContainer}>
           <Button title="Increment" />
           <Button title="Decrement" />
         </View>*/}
         <View style={styles.buttonContainer}>
          <MyCustomButton title="Increment + " onPress={handleIncrement}/>
          <MyCustomButton title="Decrement - "
            style={{backgroundColor:"darkblue", marginStart: 5 }}
            onPress={handleDecrement}
          />
         </View>
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
   container: {
     margin:6,
   },
   text: {
     fontSize:20,
     marginTop:25,
    },
   subtitle: {
     color:"black"
    },
   image: {
     width: 350,
     height:180,
     //marginHorizontal:16,
     borderRadius:15,
    },
    buttonContainer:{
      marginTop:16,
      flexDirection:"row",
    },
    button: {
      backgroundColor:"purple",
      padding:12,
      borderRadius:15,
      alignItems:"center",
      marginStart:6,
    },
    buttonText: {
     fontSize:25,
     color:"white",
    },
});

export default App;

