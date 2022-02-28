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
  subheading: {
    fontSize: 20,
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
  scrollContainer: {
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
  },
  settingsSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  settingsSwitchText: {
    fontSize: 16
  },
  lastButtonContainer: {
    marginTop: 20
  },
  searchResultsFilters: {
    backgroundColor: '#111',
    flexDirection: 'row'
  },
  searchResultsFilterItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  searchResultsFilterText: {
    color: '#FFF',
    textTransform: 'uppercase',
  },
  searchResultsSummary: {
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  // LEAGUE 
  league_banner: {
    resizeMode: 'contain',
    width: '100%',
    height: 232
  },
  league_container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  league_title: {
    textAlign: 'center',
    marginBottom: 15
  },
  league_info: {
    textAlign: 'center',
    color: '#777',
    lineHeight: 20,
    paddingHorizontal: '10%',
    marginBottom: 20
  },
  league_button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  league_button__text: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5
  },
  league_button__become: {
    backgroundColor: '#000'
  },
  league_button__login: {
    backgroundColor: '#ED6850'
  },
  league_roundDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25
  },
  league_roundTime: {

  },
  league_roundTime__text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  league_bg_gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: '#FFF',
    borderRadius: 3
  },
  league_round: {
    marginBottom: 20
  },
  league_roundTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  league_headerText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  league_standing_row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  league_standing_rowActive: {
    backgroundColor: '#CA1917',
  },
  league_standing_rankColumn: {
    width: '20%',
    fontSize: 16
  },
  league_standing_userColumn: {
    width: '60%',
    fontSize: 16
  },
  league_standing_pointsColumn: {
    width: '20%',
    textAlign: 'right',
    fontSize: 16
  },
  league_standing_textActive: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  league_past_seasonsColumn: {
    width: '70%',
    fontSize: 16
  },
  league_past_dateColumn: {
    width: '30%',
    textAlign: 'right',
    fontSize: 16
  },
  league_season_rowEven: {
    backgroundColor: '#F3F3F3'
  }
});

export default appStyles;