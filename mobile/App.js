import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YelloBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}