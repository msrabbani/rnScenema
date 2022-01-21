import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { data } from "../dataDummy";
import { COLORS, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const [dataAPI, setDataAPI] = useState([]);

  //   console.log(dataAPI, "wow");

  const getMoviesFromApi = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=fee487155dc2df66187623f9c54c0635&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );
      const json = await response.json();
      setDataAPI(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getMoviesFromApi();
    setDataAPI(data);
  }, []);

  const renderHeaderHome = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Icon
          name="movie"
          color={COLORS.primary}
          size={30}
          onPress={() => console.log("press button")}
        />
        <Icon
          name="movie"
          color={COLORS.primary}
          size={30}
          onPress={() => console.log("press button")}
        />
      </View>
    );
  };

  const newSeassonScrollX = React.useRef(new Animated.Value(0)).current;

  const renderCorousel = () => {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{ marginTop: SIZES.radius }}
        data={dataAPI}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeassonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("MovieDetail")}
            >
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Thumbnail */}
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    justifyContent: "flex-end",
                  }}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      height: 50,
                      //   backgroundColor: "pink",
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                      alignItems: "center",
                    }}
                  >
                    {/* Play Now */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: COLORS.transparentWhite,
                          borderRadius: 20,
                          width: 40,
                          height: 40,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onPress={() => console.log("press button")}
                      >
                        <Icon name="play" color={COLORS.white} size={30} />
                      </View>
                      <Text
                        style={{
                          marginLeft: SIZES.base,
                          color: COLORS.white,
                          fontSize: SIZES.h3,
                          fontWeight: "700",
                        }}
                      >
                        Play Now
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(newSeassonScrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {dataAPI.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightgray, COLORS.primary, COLORS.lightgray],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 10,
                marginHorizontal: 3,
                width: dotWidth,
                height: 7,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderPopulerMovie = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.padding,
            // backgroundColor: "pink",
          }}
        >
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              fontSize: SIZES.h2,
              fontWeight: "700",
            }}
          >
            Populer Movie
          </Text>
          <Icon
            name="chevron-right"
            color={COLORS.primary}
            size={35}
            onPress={() => console.log("press button")}
          />
        </View>

        <FlatList
          data={dataAPI}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback>
                <View
                  style={{
                    marginLeft: index === 0 ? SIZES.padding : 20,
                    marginRight:
                      index === dataAPI.length - 1 ? SIZES.padding : 0,
                  }}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    }}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 3,
                      height: SIZES.width / 3 + 60,
                      borderRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: "aqua",
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      fontSize: SIZES.h4,
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          horizontal
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Text>INI HOME</Text>
      {renderHeaderHome()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {renderCorousel()}
        {renderDots()}
        {renderPopulerMovie()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
});
