import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Send: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;
export type SendScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Send'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;
export type SendScreenRouteProp = RouteProp<RootStackParamList, 'Send'>;
