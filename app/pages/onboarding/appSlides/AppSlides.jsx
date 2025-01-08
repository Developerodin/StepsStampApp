import React,{useRef, useState , useEffect} from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions,Animated } from 'react-native';
import NextButton  from './NextButton';
import { StatusBar } from 'expo-status-bar';
import Slide1 from '../../../assets/images/slide1.png';
import Slide2 from '../../../assets/images/slide2.png';
import Slide3 from '../../../assets/images/slide3.png';


const slides = [
  {
    id: 1,
    title: 'Slide 1',
    description: 'This is the description for slide 1.',
    image: Slide1,
  },
  {
    id: 2,
    title: 'Slide 2',
    description: 'This is the description for slide 2.',
    image: Slide2,
  },
  {
    id: 3,
    title: 'Slide 3',
    description: 'This is the description for slide 3.',
    image: Slide3,
  },
];

const { width } = Dimensions.get('window');

export const AppSlides = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null)
  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

   const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

   const scrollTo = () => {

    if(currentIndex < slides.length - 1){
      slidesRef.current.scrollToIndex({index:currentIndex + 1});
    }else{
      console.log('Last slide');
    }
    };

    const fadeAnim = useRef(new Animated.Value(0)).current; 
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1, // Final opacity value of 1
        duration: 2000, // Duration of 2 seconds
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);


  const renderItem = ({ item }) => (
    <View style={[styles.slide,{width}]}>
      <Image source={item.image } style={[styles.image,{resizeMode:'contain'}]} />

      <View style={{flex:0.3}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      </View>
     
    </View>
  );

  const Paginator = ({data, scrollX} )=>{
    return (
      <View style={{flexDirection:'row',height:64 ,alignSelf:'center'}}>
         {
          data && data.map((_,i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];


            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange:[0.3, 1, 0.3],
              extrapolate: 'clamp',
            })
            return <Animated.View style = {[styles.dot,{width:dotWidth,opacity}]} key={i.toString()}/>
          })
         }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#181A20" style="light" />
      <View style={styles.topLeftGradient}>
        <Image
          source={require("../../../assets/images/GradientTopLeft.png")}
          style={styles.gradientImage}
        />
      </View>
      <View style={styles.bottomRightGradient}>
        <Image
          source={require('../../../assets/images/GradientCenter.png')}
          style={{width: 93, height: 93, resizeMode: 'contain', opacity: 0.4}}
        />
      </View>
      <Animated.View style={{ opacity: fadeAnim }}>
      <View style={{flex:3}}>
      <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
    />
      </View>
      <Paginator data={slides} scrollX={scrollX}/>
    <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
    </Animated.View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#181A20",
  },
  topLeftGradient: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomRightGradient: {
    position: "absolute",
    top: 150,
    right: -25,
    
  },
  gradientImage: {
    resizeMode: "contain",
    opacity: 0.2,
  },
  slide: {
    marginTop: 80,
    
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 320,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom:10,
    color:"#493d8a",
    textAlign:'center'
  },
  description: {
    fontWeight:'300',
    fontSize: 16,
    textAlign: 'center',

    paddingHorizontal:64
  },
  dot:{
    height:10,
    borderRadius:5,
    backgroundColor:"#493d8a",
    marginHorizontal:8,
    
  }
});
