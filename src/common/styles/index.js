import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  button_login:{
    backgroundColor:'#FF5B74', padding: 15, marginTop:20, alignSelf:'center', width:'80%', borderRadius:70
  },  
  button_text_login:{
    color:'white', alignSelf: 'center'
  },  

  button_new_log:{
    backgroundColor:'#FF5B74', padding: 15, marginBottom:20, alignSelf:'center', width:'70%', borderRadius:70
  },  


  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
  },
  textInputContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  textInput: {
    alignSelf: "stretch",
    fontFamily: "HelveticaNeue",
    fontSize: 15,
    height: 44,
    color: "#030303",
    borderColor: "#0000001E",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    padding: 6,
    margin: 6,
  },
  textLabel: {
    marginHorizontal: 8,
    fontWeight: "bold",
  },
  button: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26CBD2",
    height: 40,
    minHeight: 40,
    borderColor: "#26CBD2",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
  centerContainer: {
    alignSelf: "center",
  },
});
