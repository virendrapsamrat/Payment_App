import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import R from "../R";
import { SliderBox } from "react-native-image-slider-box";
import scale, { verticalScale } from "../utils/Scale";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "UPI",
          image: R.images.UPI,
        },
        {
          name: "Scan Pay",
          image: R.images.ScanCode,
        },
        {
          name: "Upload Bill",
          image: R.images.UploadBill,
        },
        {
          name: "Sports Shoes",
          image: R.images.SportsShoes,
        },
        {
          name: "Shopping",
          image: R.images.Shopping,
        },
        {
          name: "Smart Parking",
          image: R.images.SmartParking,
        },
        {
          name: "BIBA",
          image: R.images.BIBAlogo,
        },
      ],

      Recharge: [
        {
          name: "Mobile Reacharge",
          image: R.images.Mobile,
        },
        {
          name: "UPI",
          image: R.images.UPI,
        },
        {
          name: "Scan Pay",
          image: R.images.ScanCode,
        },
        {
          name: "Electricity",
          image: R.images.UploadBill,
        },
        {
          name: "PostPaid",
          image: R.images.Mobile,
        },
        {
          name: "Car Loan Repayment",
          image: R.images.SmartParking,
        },
        {
          name: "Gas Book",
          image: R.images.gas,
        },
        {
          name: "View More",
          image: R.images.RightArrow,
        },
      ],
      User: [
        {
          name: "User 1",
        },
        {
          name: "User 2",
        },
        {
          name: "User 3",
        },
        {
          name: "User 4",
        },
        {
          name: "User 5",
        },
        {
          name: "user 6",
        },
        {
          name: "User 7",
        },
        {
          name: "User 8",
        },
        {
          name: "user 9",
        },
        {
          name: "User 10",
        },
        {
          name: "User 11",
        },
        {
          name: "User 12",
        },
        {
          name: "User 12",
        },
      ],
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ],
    };
    console.disableYellowBox = true;
  }

  componentDidMount() {
    this.setNavigationHeaderConfiguration();
  }
  showAlert = (item) => {
    return alert(item);
  };

  setNavigationHeaderConfiguration = () => {
    this.props.navigation.setOptions({
      headerStyle: {
        backgroundColor: R.colors.primaryRed,
        shadowColor: "transparent",
      },
      title: "MY PAYMENT",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.showAlert("You click on Notification")}
        >
          <Image
            source={R.images.NotificationBell_ON}
            style={{
              width: scale(30),
              height: scale(30),
              marginRight: scale(10),
            }}
          />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => this.showAlert("You click on Location")}
        >
          <Image
            source={R.images.Checkin}
            style={{
              width: scale(30),
              height: scale(30),
              marginLeft: scale(10),
            }}
          />
        </TouchableOpacity>
      ),
    });
  };

  _renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            marginTop: verticalScale(20),
            marginLeft: scale(30),
            width: scale(60),
          }}
          onPress={() => this.showAlert(item.name)}
        >
          <Image
            source={item.image}
            style={{
              width: scale(60),
              height: scale(60),
              resizeMode: "stretch",
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: verticalScale(10),
              alignItems: "center",
              textAlign: "center",
              color: R.colors.primaryRed,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderSliderView = () => {
    return (
      <View style={{ marginTop: verticalScale(5) }}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={100}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        />
      </View>
    );
  };

  _userName = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.showAlert(item.name)}>
        <View
          style={{
            width: scale(60),
            height: scale(60),
            borderRadius: 60,
            marginLeft: scale(25),
            backgroundColor: R.colors.primaryRed,
            marginTop: verticalScale(20),
          }}
        >
          <Image
            source={R.images.men}
            style={{
              width: scale(50),
              height: scale(50),
              resizeMode: "stretch",
              alignSelf: "center",
            }}
          />
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            marginLeft: scale(20),
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  _renderItemRecharge = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            marginTop: verticalScale(10),
            marginLeft: scale(25),
            marginBottom: verticalScale(25),
          }}
          onPress={() => this.showAlert(item.name)}
        >
          <View style={{ width: scale(60) }}>
            <Image
              source={item.image}
              style={{
                width: scale(50),
                height: scale(50),
                resizeMode: "stretch",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginTop: verticalScale(10),
                textAlign: "center",
                fontSize: scale(10),
                color: R.colors.primaryRed,
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderViewAll = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderSliderView()}
          <Text
            style={{
              marginTop: verticalScale(15),
              marginLeft: scale(20),
              fontSize: scale(18),
            }}
          >
            Quick Links
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.data}
            renderItem={this._renderItem}
          />
          <View
            style={{
              marginTop: 30,
              width: "95%",
              alignSelf: "center",
              backgroundColor: R.colors.primaryWhite,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
              borderRadius: 20,
            }}
          >
            <Text style={{ margin: scale(20), fontSize: scale(18) }}>
              Reacharge & Pay Bills
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={4}
              data={this.state.Recharge}
              renderItem={this._renderItemRecharge}
            />
          </View>

          <View
            style={{
              marginTop: verticalScale(30),
              width: "95%",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: scale(15),
              }}
            >
              <TouchableOpacity
                style={{ width: scale(80) }}
                onPress={() => this.showAlert("View All Orders")}
              >
                <View
                  style={{
                    width: scale(80),
                    height: scale(80),
                    borderRadius: 80,
                    backgroundColor: "pink",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      marginTop: verticalScale(20),
                      fontSize: scale(40),
                      color: R.colors.primaryWhite,
                    }}
                  >
                    %
                  </Text>
                </View>
                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: verticalScale(10),
                  }}
                >
                  View All Orders
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: scale(80) }}
                onPress={() => this.showAlert("View All Orders")}
              >
                <View
                  style={{
                    width: scale(80),
                    height: scale(80),
                    borderRadius: 80,
                    backgroundColor: "orange",
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(40),
                      alignSelf: "center",
                      marginTop: scale(15),
                    }}
                  >
                    🤖
                  </Text>
                </View>
                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: verticalScale(10),
                  }}
                >
                  View My Rewards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: scale(80) }}
                onPress={() => this.showAlert("View All Orders")}
              >
                <View
                  style={{
                    width: scale(80),
                    height: scale(80),
                    borderRadius: 80,
                    backgroundColor: "blue",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      marginTop: verticalScale(20),
                      fontSize: scale(40),
                      color: R.colors.primaryWhite,
                    }}
                  >
                    $
                  </Text>
                </View>
                <Text
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: verticalScale(10),
                  }}
                >
                  Refer & Earn $10
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "95%",
              backgroundColor: R.colors.primaryWhite,
              alignSelf: "center",
              marginTop: verticalScale(20),
            }}
          >
            <Text style={{ fontSize: scale(20), margin: scale(10) }}>
              Send Money
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={4}
              data={this.state.User}
              renderItem={this._userName}
            />
          </View>
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>{this.renderViewAll()}</SafeAreaView>
    );
  }
}
