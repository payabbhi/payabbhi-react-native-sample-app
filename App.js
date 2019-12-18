/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import PayabbhiCheckout from 'react-native-payabbhi';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
    <TouchableHighlight onPress={() => {
      var options = {
        access_id: "<access_id>",
        order_id: "<order_id>",
        amount: <amount>,
        description: "Purchase of Kryptonite",
        prefill: {
          name: "Bruce Wayne",
          email: "bruce@wayneinc.com",
          contact: "999999999999"
        },
        notes: {
          merchant_order_id: "OrdRefNo45678"
        }
      };
      PayabbhiCheckout.open(options).then((data) => {
        alert(`Success: ${data.order_id} | ${data.payment_id}`);
      }).catch((error) => {
        alert(`Error: ${error.code} | ${error.message}`);
      });
    }}>
    <Text style = {styles.text}>PAY</Text>
    </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default App;
