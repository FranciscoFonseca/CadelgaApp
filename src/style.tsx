import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '100%',
  },
  text: {
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#0068B3',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    backgroundColor: '#000000',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
});
