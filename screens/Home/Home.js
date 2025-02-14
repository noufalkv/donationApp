import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import style from './style';
import Search from '../../components/Search/Search';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log('user', user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello</Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName + '. 👋'} />
            </View>
          </View>
          <Image
            source={{
              uri: user.profileImage,
            }}
            resizeMode="contain"
            style={style.profileImage}
            onError={e =>
              console.log('Image loading error:', e.nativeEvent.error)
            }
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
