import {Pressable, SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log('user', user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <Header title={user.firstName + ' ' + user.lastName} />

      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'OK'}))}>
        <Text> Press to update</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Home;
