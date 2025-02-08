import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <View>
        <Text>Home</Text>

        <Header title={'Azzahri A.'} type={1} />
        <Header title={'Azzahri A.'} type={2} />
        <Header title={'Azzahri A.'} type={3} />

        <Button
          title={'Donate'}
          onPress={() => {
            console.log('You just pressed me!');
          }}
        />
        <Button title={'Donate'} isDisabled={true} />
        <Tab title={'Highlight'} />
        <Tab title={'Highlight'} isInactive={true} />
        <Badge title={'Environment'} />
        <FontAwesomeIcon icon={faSearch} />
        <Search
          onSearch={value => {
            console.log(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
