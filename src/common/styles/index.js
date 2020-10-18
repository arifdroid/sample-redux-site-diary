import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  button_login: {
    backgroundColor: '#FF5B74', padding: 15, marginTop: 20, alignSelf: 'center', width: '80%', borderRadius: 70
  },
  button_text_login: {
    color: 'white', alignSelf: 'center'
  },
  codeFieldRoot: { marginTop: 30, width: '85%', alignSelf: 'center', },
  cell: {
    width: 40,
    height: 40,
    // lineHeight: 38,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'pink',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: 'gray',
  },

  button_new_log: {
    backgroundColor: '#FF5B74', padding: 15, marginTop: 40, alignSelf: 'center', width: '70%', borderRadius: 70, marginBottom:20
  },
  textStyles: {
    fontSize: 14,
    color: 'gray',
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    width: 200,
    // width:300,
    // flex:1,
    // alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    height: 35,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    elevation: 1,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
    marginTop: 10
  },
  dropdownBox: {
    marginTop: 20,
    width: '45%',
  },
  dropdownTextHighlightStyle: {
    backgroundColor: 'gray',
    // fontFamily: 'Lato-Bold',
    color: 'white',
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
