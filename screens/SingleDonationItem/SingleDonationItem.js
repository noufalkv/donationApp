import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {CardForm, StripeProvider} from '@stripe/stripe-react-native';

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
        <Text style={style.description}>{donationInformation.description}</Text>
      </ScrollView>
      <View>
        <StripeProvider
          publishableKey={
            'pk_test_51QvXRoCB2glA0dzwR06fac4LcRls97uTaiKOMNqP6pLoOCeijXjCW782msWcygtGCmpZBDmiEayeczMIVbAjw0g500nFRnsS0N'
          }>
          <CardForm style={style.cardForm} />
        </StripeProvider>
      </View>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => navigation.navigate(Routes.Payment)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
