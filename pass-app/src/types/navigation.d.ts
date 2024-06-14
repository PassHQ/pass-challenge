import {NavigationProp} from '@react-navigation/native';

declare global {
  type RootStackParamList = {
    Home: undefined;
    UserDetails: {userId: string; name: string; displayName: string};
    SendToken: undefined;
  };

  interface GlobalNavigationProp extends NavigationProp<RootStackParamList> {}
}

export {};
