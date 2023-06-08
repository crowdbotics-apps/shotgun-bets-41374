import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Pressable><Text style={styles.pnVDkbOL}>{"Jesse"}</Text></Pressable></View>
          <View style={styles.column2}></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1,
    borderRadius: 40
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  pnVDkbOL: {
    width: 84,
    height: 37,
    lineHeight: 14,
    fontSize: 32,
    borderRadius: 0,
    fontFamily: "Playfair Display",
    textAlign: "left",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 123,
    top: 76
  }
});
export default Untitled4;