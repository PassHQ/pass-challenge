import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Wrapper from '../components/Wrapper';

type UserDetailsScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'UserDetails'
>;
type UserDetailsScreenRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;

type Props = {
  navigation: UserDetailsScreenNavigationProp;
  route: UserDetailsScreenRouteProp;
};

const UserDetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {userId, name, displayName} = route.params;
  const handleSendToken = () => navigation.navigate('SendToken');

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>User Details</Text>
        <Text style={styles.detail}>User ID: {userId}</Text>
        <Text style={styles.detail}>Name: {name}</Text>
        <Text style={styles.detail}>Display Name: {displayName}</Text>
        <Button title="Send Tokens" onPress={handleSendToken} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default UserDetailsScreen;
