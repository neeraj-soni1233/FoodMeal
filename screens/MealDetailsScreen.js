import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const MealDetailsScreen = props => {
    return(
        <View>
            <Text> I am in MealDetailsScreen Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        screen:{
            flex:1,
            justifyContent :'center',
            alignItems :'center'

    }
}
);
export default MealDetailsScreen