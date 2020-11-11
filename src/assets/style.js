import {StyleSheet, Dimensions} from 'react-native';
//373546
const styles = {
  components: {
    todoListItem: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 5,
        marginBottom: 30,
        backgroundColor: '#373546',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
      },
      text: {
        color: 'white',
      },
      timeDeclaration: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
      },
    }),
  },
  pages: {
    home: StyleSheet.create({
      safeAreaView: {
        flex: 1,
        backgroundColor: '#373546',
      },
      bottom: {
        flex: 0.3,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
      },
      bottomText: {color: '#fff', fontSize: 15},
    }),
    login: StyleSheet.create({
      safeAreaView: {
        flex: 1,
        backgroundColor: '#373546',
      },
      container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      styleContainer: {
        width: Dimensions.get('window').width / 1.1,
        justifyContent: 'space-between',
      },
      inputs: {
        backgroundColor: 'white',
        margin: 10,

        borderRadius: 10,
      },
      buttonStyle: {
        padding: 15,
        margin: 10,
        width: Dimensions.get('window').width / 3,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
      },
      btnTextStyle: {
        textAlign: 'center',
      },
    }),
    signUp: StyleSheet.create({
      safeAreaView: {
        flex: 1,
        backgroundColor: '#373546',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
      },
      lottieContainer: {
        flex: 1,
      },
      row: {
        width: Dimensions.get('window').width / 1.2,

        justifyContent: 'center',
        alignSelf: 'center',
      },
      inputs: {
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 5,
      },
      buttonStyle: {
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 5,
        height: 40,
        width: Dimensions.get('window').width / 3.4,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      buttonText: {
        textAlignVertical: 'center',
        textAlign: 'center',
      },
      bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      bottomText: {
        color: 'white',
      },
    }),
    dashboard: StyleSheet.create({
      safeAreaView: {
        flex: 1,
        backgroundColor: '#373546',
      },
      container: {
        flex: 1,
        //backgroundColor: 'black',
        justifyContent: 'center',
        //alignItems: 'center',
      },
      addButtonContainer: {
        position: 'absolute',
        flex: 1,
        right: 20,
        bottom: 20,
      },
    }),
    add: StyleSheet.create({
      safeAreaView: {
        flex: 1,
        backgroundColor: '#373546',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputs: {
        backgroundColor: 'white',
        height: 150,
      },
      timeDoneContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      addTodoButton: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
};

export default styles;
