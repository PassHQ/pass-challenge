import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Passkey} from 'react-native-passkey';
import {createPassKey} from '../utils/passkey';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Wrapper from '../components/Wrapper';

type RootStackParamList = {
  Home: undefined;
  UserDetails: {userId: string; name: string; displayName: string};
};

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type LandingScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: LandingScreenNavigationProp;
  route: LandingScreenRouteProp;
};

const LandingScreen: React.FC<Props> = ({navigation}) => {
  const [isSupported, setIsSupported] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(true);

  useEffect(() => {
    const checkSupport = async () => {
      const supported = await Passkey.isSupported();
      setIsSupported(supported);
    };
    checkSupport();
  }, []);

  const handlePassKeyAuthorization = useCallback(async () => {
    try {
      navigation.navigate('UserDetails', {
        userId: 'Pass QA Tester',
        name: 'Pass QA Tester name',
        displayName: 'QA Tester name',
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Authorization Error', JSON.stringify(error));
    }
  }, [navigation]);

  useEffect(() => {
    const checkRegistration = async () => {
      const registered = await AsyncStorage.getItem('registered');
      if (registered) {
        handlePassKeyAuthorization();
      }
    };
    checkRegistration();
  }, [handlePassKeyAuthorization]);

  const handleContinue = async () => {
    if (!displayName) {
      setIsDisplayNameValid(false);
      Alert.alert('Validation Error', 'Display name is required.');
      return;
    }
    try {
      await createPassKey({
        userId: 'Pass QA Tester',
        name: 'Pass QA Tester name',
        displayName: displayName,
      });
      await AsyncStorage.setItem('registered', 'true');
      navigation.navigate('UserDetails', {
        userId: 'Pass QA Tester',
        name: 'Pass QA Tester name',
        displayName: displayName,
      });
    } catch (error) {
      console.log('error', error);
      Alert.alert('Some error', JSON.stringify(error));
    }
  };

  const handleTextChange = (text: string) => {
    setDisplayName(text);
    if (!isDisplayNameValid) {
      setIsDisplayNameValid(true);
    }
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Pass HQ Test App</Text>
        <Text style={styles.description}>
          Are you ready to prove your skills? This app is designed to test your
          capabilities for a QA position. Show us what you can do.
        </Text>
        <Text style={styles.note}>
          Click the "Continue to App" button to create a passkey for your
          session.
        </Text>
        <Text style={[styles.support, isSupported && styles.isSupported]}>
          Passkey is {isSupported ? 'supported' : 'not supported'} on this
          device.
        </Text>
        <TextInput
          style={[styles.input, !isDisplayNameValid && styles.inputError]}
          placeholder="Enter your display name"
          value={displayName}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Create passkey</Text>
        </TouchableOpacity>
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
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  note: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  support: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'red',
  },
  isSupported: {
    color: 'green',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LandingScreen;
