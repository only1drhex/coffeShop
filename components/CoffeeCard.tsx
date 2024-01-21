import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function CoffeeCard({item}) {
  const navigation = useNavigation();
  return (
      <View 
        style={{
          borderRadius: 40, 
          backgroundColor: themeColors.bgDark, 
          height: ios? height*0.4 : height*0.50, 
          width: width*0.65,
          marginTop: 40
        }} 
        >
        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: {width: 0, height: 40},
          shadowOpacity: 0.8,
          marginTop: ios? -(height*0.08): -20,
        }}
        >
          <Image 
            source={item.image} 
            style={{height: 160, width: 160, marginTop:  -20}} 
          />
        </View>
          <View style={{paddingHorizontal: 20, flex: 1, justifyContent: 'space-between', marginTop: ios? 20: 0}}>
            <View style={{marginTop: 12}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: '600', paddingBottom:6}}>
                {item.name}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',gap:4, borderRadius: 15, padding: 5, marginBottom:8, paddingHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.2)', width: 64}}>
                <StarIcon size="15" color="white" />
                <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>{item.stars}</Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 24}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: '600', opacity: 0.6}}>
                  Volume 
                </Text>
                <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}> {item.volume}</Text>
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
              backgroundColor: ios? themeColors.bgDark: 'transparent',
              shadowColor: themeColors.bgDark,
              shadowRadius: 25,
              shadowOffset: {width: 0, height: 40},
              shadowOpacity: 0.8,
            }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>$ {item.price}</Text>
              <TouchableOpacity 
              onPress={()=> navigation.navigate('Product', {...item})}
              style={{
                shadowColor: 'black',
                shadowRadius: 40,
                shadowOffset: {width: -20, height: -10},
                shadowOpacity: 1,
                padding: 16,
                backgroundColor: 'white',
                borderRadius: 50,
              }}>
                <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}
