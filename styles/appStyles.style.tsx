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
    color: 'red',
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
  },
  mainBlock: {
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 20,
    padding: 20
  },
  checkoutSection: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  lastSection: {
    flexDirection: 'row',
  },
  checkoutLabel: {
    width: 100,
    fontSize: 16
  },
  content: {
    flex: 1
  },
  contentEmail: {
    fontWeight: 'bold',
  },
  contentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentShipping: {
    fontSize: 16,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  confirmationPaymentSection: {
    paddingVertical: 20
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  totalSection: {
    borderTopColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalSectionConfirmation: {
    paddingTop: 20,
  },
  totalLabel: {
    fontSize: 20
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  totalCurrency: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#999',
    marginRight: 10
  },
  goPremiumContainer: {
    backgroundColor: '#FFF',
    flex: 1
  },
  goPremiumHeader: {
    backgroundColor: '#DDD',
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goPremiumHeading: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  goPremiumButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  goPremiumButtonText: {
    color: '#FFF'
  },
  authActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  authActionButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000',
    width: '48%'
  },
  authActionButtonText: {
    color: '#FFF'
  }
});

export default appStyles;