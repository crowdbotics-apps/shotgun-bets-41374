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
        
          <View style={styles.column1}><Text style={styles.pnVDkbOL}>{"Jesse"}</Text><Pressable><Text style={styles.pZNasBCe}>{"Add Shotgun"}</Text></Pressable><Pressable><Text style={styles.lBsMxuwq}>{"Remove Shotgun"}</Text></Pressable></View>
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
    flex: 1,
    borderRadius: 40
  },
  column3: {
    flex: 1,
    borderRadius: 40
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
    left: 122,
    top: 14
  },
  pZNasBCe: {
    width: 100,
    height: 48,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "relative",
    top: 78.5
  },
  lBsMxuwq: {
    width: 118,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 78,
    left: 218
  }
});
export default Untitled4;