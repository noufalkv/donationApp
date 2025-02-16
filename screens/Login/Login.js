import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logedUser} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('111111@gmail.com');
  const [password, setPassword] = useState('11111111');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const login = async () => {
    let user = await loginUser(email, password);
    console.log('user', user);

    if (!user.status) {
      setError(user.error);
    } else {
      setError('');
      dispatch(logedUser(user));
      navigation.navigate(Routes.Home);
    }
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'********'}
            value={email}
            onChangeText={value => setPassword(value)}
          />
        </View>

        {error.length > 0 && <Text style={style.error}>{error}</Text>}

        <View style={globalStyle.marginBottom24}>
          <Button title={'Login'} onPress={login} />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Register)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
