import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  Platform,
} from 'react-native';
import ListComponent from './component/ListComponent'



export default class App extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: CONTENT };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    );
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainHeading}>
        <Text style={styles.topHeading}>State Football Clubs</Text>
        </View>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ListComponent
              key={item.state}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'green',
    
  },

  mainHeading:{
    justifyContent:'center',
    alignItems:'center'
  },
  topHeading: {
    fontSize: 25,
    fontWeight:'800',
    fontFamily:'roboto',
    color:'white',
    margin:10
  },
  header: {
    padding: 16,
    margin:10,
    backgroundColor:'white',
    borderRadius:10
    
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    borderRadius:10,
    margin:2,
    width:'90%',
    padding:5,
    backgroundColor: '#fff',
  },
});


const CONTENT = [
  {
    isExpanded: false,
    state: 'Assam',
    subcategory: [{ val: 'FC Green Valley' }, {  val: 'Karbi Aglong Morning Star FC' },{ val: 'Guwahati F.C.' },{ val: 'Assam Dynamo Club' },{ val: 'Barekuri FC' },{ val: 'Golaghat Rhino FC' },{ val: 'Jorhat Town Club' },{ val: 'Moran Town Club' },{ val: 'Trinayanjyoti FC' },{ val: 'Global FC' }],
  },
  {
    isExpanded: false,
    state: 'Bihar',
    subcategory: [{ val: 'Shirsh Bihar United Football Club' }, {  val: 'Rainbow Football Club' },{ val: 'Sporting Football Club' },{ val: 'Friends Football Club' },{ val: 'Rajmik Football Club' },{ val: 'RK Steel' },{ val: 'Adivasi United' }],
  },
  {
    isExpanded: false,
    state: 'Delhi',
    subcategory: [{ val: 'Delhi' }, {  val: 'Delhi United' },{ val: 'Hindustan' },{ val: 'Sudeva Moonlight' },{ val: 'Garhwal Heroes' },{ val: 'Simla Youngs' },{ val: 'New Delhi Heroes FC' },{ val: 'Ahbab FC' }, {  val: 'Goodwill FC' },{val:'Tarun Sangha'}],
  },
  {
    isExpanded: false,
    state: 'Goa',
    subcategory: [{ val:'Vasco' }, {  val: 'Indian Arrows' },{ val: 'FC Goa' }],
  },
  {
    isExpanded: false,
    state: 'Gujarat',
    subcategory: [{ val: 'Gujarat' }, {  val: 'ARA' },{ val: "St. Joseph's FC"}],
  },
  {
    isExpanded: false,
    state: 'Haryana',
    subcategory: [{ val: 'Amity United Football Club' }, {  val: 'Canarinho Football Club' },{ val: 'Shahid Bhagat Singh Footbal Club' }],
  },
  {
    isExpanded: false,
    state: 'Jammu and Kashmir',
    subcategory: [{ val: 'Real Kashmir F.C.' }, {  val: 'Lonestar Kashmir F.C.' },{ val: 'FC Jammu' }],
  },
  {
    isExpanded: false,
    state: 'Jharkhand',
    subcategory: [{ val: 'Jamshedpur FC' }],
  },
  {
    isExpanded: false,
    state: 'Karnataka',
    subcategory: [{ val: 'Ozone FC' }, {  val: 'South United F.C.' },{ val: 'Bnagalore Dream United Football Club' },{ val: 'FC Bangalore' }, {  val: 'Bengaluru FC' },{val:'HAL'},{val:'KGF Academy'}],
  },
  {
    isExpanded: false,
    state: 'Kerala',
    subcategory: [{ val: 'SGokulam Kerala FC' },{val:'Quartz FC'},{val:'FC Kerala'},{val:'SBI Kerala'},{val:'FC Thrissur'}],
  },
  {
    isExpanded: false,
    state: 'Chattisgarh',
    subcategory: [{val: 'Rovers Club'},{val:'Sports Authority of India'}],
  },
  {
    isExpanded: false,
    state: 'Madhya Pradesh',
    subcategory: [{ val: 'Madhya Bharat' }, { val: 'Pride Sports' }],
  },
  {
    isExpanded: false,
    state: 'Maharastra',
    subcategory: [{ val: 'Indian Friends F.C.' }, {  val: 'Thane City'},{val:'Kenkre'},{val:'PIFA'},{val:'Air India'}],
  },
  {
    isExpanded: false,
    state: 'Manipur',
    subcategory: [{ val: 'NEROCA' }, { val: 'TRAU' },{val:'North Imphal Sporting Association'},{val:'F.C. Zalen'}],
  },
  {
    isExpanded: false,
    state: 'Meghalaya',
    subcategory: [{val: 'Shillong Lajong' }, { val: 'Langsning' },{val:'Royal Wahingdoh'},{val:'Malki Sports Club'},{val:'Rangdajied United F.C.'}],
  },
  {
    isExpanded: false,
    state: 'Mizoram',
    subcategory: [{ val: 'Aizawl' }, {val: 'Chanmari' },{val:'Bethlehem Vengthlang FC'},{val:'Chanmari West F.C.'},{val:'Chhinga Veng'}],
  },
  {
    isExpanded: false,
    state: 'Nagaland',
    subcategory: [{ val: 'Kohima Komets' }, { val: 'Naga Tornados' },{val:'Dimapur United'},{val:'Vanguard FC-Tseminyu'},{val:'D.C HILL C.F'}],
  },
  {
    isExpanded: false,
    state: 'Odisha',
    subcategory: [{ val: 'Odisha FC' }, {  val: 'Smaleswari' }],
  },
  {
    isExpanded: false,
    state: 'Punjab',
    subcategory: [{ val: 'Punjab FC' }, { val: 'JCT FC' },{val:'FC Punjab Police'},{val:'United Punjab FC'}],
  },
  {
    isExpanded: false,
    state: 'Rajastha',
    subcategory: [{ val: 'AU Rajasthan' }, { val: 'Jaipur City' }],
  },
  {
    isExpanded: false,
    state: 'Sikkim',
    subcategory: [{ val: 'Sikkim F.C.' }, { val: 'Gangtok Himalayan S.C.' },{val:'United Sikkim'},{val:'Denzong Boys FC'}],
  },
  {
    isExpanded: false,
    state: 'Tamil Nadu',
    subcategory: [{val: 'Chennai City F.C.' }, {  val: 'Indian Bank Sports & R.C.' },{val:'Viva Chennai F.C.'}],
  },
  {
    isExpanded: false,
    state: 'Telangana',
    subcategory: [{ val: 'Fateh Hyderabad A.F.C' }, {  val: 'Hyderabad FC' }],
  },
  {
    isExpanded: false,
    state: 'Uttar Pradesh',
    subcategory: [{val: 'Akarpur FC' }, { val: 'Lucknow City FC'},{val:'States United FC'}],
  },
  {
    isExpanded: false,
    state: 'West Bengal',
    subcategory: [{ val: 'ATK FC' }, {  val: 'East Bengal' },{val:'Mohammedan'},{val:'Bhawanipore F.C.'},{val:'Peerless'}],
  },
];