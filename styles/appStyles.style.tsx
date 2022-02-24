import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 30
  },
  section: {
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: '#999'
  },
  textLink: {
    color: 'red'
  },
  inputSection: {
    marginTop: 20
  },
  splitSection: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  splitChild: {
    display: 'flex',
    width: '48%',
  }, 
  label: {
    marginBottom: 5
  },
  input: {
    borderColor: '#CCC',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  goBack: {
    textTransform: 'uppercase',
    color: '#777',
    textAlign: 'center',
    padding: 20
  }
});

export default appStyles;