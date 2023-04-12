import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";

const getUserId = () => {
  axios
    .get("https://localhost:3000/userId")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then();
};

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("./assets/images/logo.png")}
        ></Image>
        <View style={styles.likeSend}>
          <Image
            style={styles.like}
            source={require("./assets/images/like.png")}
          ></Image>
          <Image
            style={styles.send}
            source={require("./assets/images/send.png")}
          ></Image>
        </View>
      </View>
      {/* user id */}
      <View style={styles.userIdContainer}>
        <Text>User.id</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image></Image>
      </View>
      <View style={styles.reactionBar}>
        <Image
          style={styles.likes}
          source={require("./assets/images/like.png")}
        ></Image>
        <Image
          style={styles.commentImg}
          source={require("./assets/images/chat.png")}
        ></Image>
        <Image
          style={styles.sendImg}
          source={require("./assets/images/send.png")}
        ></Image>
        <Image
          style={styles.shareImg}
          source={require("./assets/images/saved.png")}
        ></Image>
      </View>
      <View>
        <Text>외 여러 명이 좋아합니다.</Text>
        <Text></Text>
      </View>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>More!</Text>
    </View>
  );
}

function MediaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Media!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={require("./assets/images/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={require("./assets/images/search.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={require("./assets/images/more.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarIcon: (focused, tintColor) => (
            <Image
              style={{ width: 25, height: 25 }}
              source={require("./assets/images/video.png")}
            />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 60,
    flex: 0.1,
    flexDirection: "row",
  },
  logo: {
    flex: 1,
    height: 40,
    resizeMode: "contain",
  },
  likeSend: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    resizeMode: "contain",
  },
  like: {
    flex: 1,
    height: 30,
    marginLeft: 70,
    resizeMode: "contain",
  },
  send: {
    flex: 1,
    height: 30,
    marginLeft: -30,
    resizeMode: "contain",
  },
  userIdContainer: {
    flex: 0.1,
  },
  imageContainer: {
    flex: 0.3,
  },
  reactionBar: {
    flex: 0.08,
    flexDirection: "row",
  },
  likes: {
    flex: 1,
    height: 30,
    left: -15,
    resizeMode: "contain",
  },
  commentImg: {
    flex: 1,
    height: 26,
    left: -70,
    bottom: -2,
    resizeMode: "contain",
  },
  sendImg: {
    flex: 1,
    height: 30,
    left: -122,
    resizeMode: "contain",
  },
  shareImg: {
    flex: 1,
    height: 28,
    left: 10,
    resizeMode: "contain",
  },
});
