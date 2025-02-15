import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const categoryInformation = route.params.categoryInformation;
  const donationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('categoryInformation', donationInformation);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{uri: donationInformation.image}} style={style.image} />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationInformation.name} />
        <Text style={style.description}>
          {donationInformation.description}
          {donationInformation.description}
          {donationInformation.description}
          {donationInformation.description}
          {donationInformation.description}
          {donationInformation.description}
          {donationInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
