import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <View>
        <Text>Home</Text>
      </View>
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
    </SafeAreaView>
  );
};
export default Home;
