/* eslint-disable react/react-in-jsx-scope */
import {
  FlatList,
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
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {useEffect, useState} from 'react';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';
import {resetToInitialState} from '../../redux/reducers/User';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const selectedDonationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('user', user);

  const dispatch = useDispatch();
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;
  const [donationItems, setDonationItems] = useState([]);

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  const donationPressed = donationItemId => {
    const categoryInformation = categories.categories.find(
      val => val.categoryId === categories.selectedCategoryId,
    );
    dispatch(updateSelectedDonationId({selectedDonationId: donationItemId}));
    navigation.navigate(Routes.SingleDonationItem, {categoryInformation});
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello</Text>
            <View style={style.username}>
              <Header title={user.displayName + '. 👋'} />
            </View>
          </View>
          <View>
            <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
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

              <Header color={'#156CF7'} type={3} title={'Logout'} />
            </Pressable>
          </View>
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

        <View style={style.categoryHeader}>
          <Header title="Categories" />
        </View>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              console.log(
                'User has reached the end and we are getting more data for page number ',
                categoryPage,
              );
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value =>
                    dispatch(
                      updateSelectedCategoryId({selectedCategoryId: value}),
                    )
                  }
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>

        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => {
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={donationPressed}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    badgeTitle={
                      categories.categories.filter(
                        val => val.categoryId === categories.selectedCategoryId,
                      )[0].name
                    }
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
