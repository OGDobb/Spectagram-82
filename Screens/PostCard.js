import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component {
    render() {
      return (
          <View style={styles.container}>
              <View style={styles.cardContainer}>
                  <View style={styles.authorImageContainer}>
                      <Image
                      source={rwquire("../assets/profile_img.png")}
                      style={styles.profileImage}
                      ></Image>
                  </View>
                  <View styles={styles.authorNameContainer}>
                      <Text style={styles.authorNameText}>{this.props.posy.author}</Text>
                  </View>
              </View>
              <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
              <View style={styles.captionContainer}>
                  <Text style={styles.captionText}>
                      {this.props.post.caption}
                  </Text>
              </View>
              <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                      <Ionicons name={"heart"} size={RFValue(30)} color="white" />
                      <Text style={styles.likeText}>12k</Text>
                  </View>
              </View>
          </View>
      )  
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    authorImageContainer: {
        flex: 1
    },
    authorNameContainer: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(18),
        color: "white"
    },
    authorNameText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 15
    },
    postImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    captionContainer: {
        marginTop: RFValue(5)
    },
    captionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(13),
        color: "white"
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
    }
})