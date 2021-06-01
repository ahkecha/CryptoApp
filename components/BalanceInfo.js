import React from 'react'
import { 
    View,
    Text,
    Image
 } from 'react-native';

 import {SIZES, COLORS, FONTS, icon} from "../constants";

 const BalanceInfo = ({title, displayAmount, ChangPct, containerStyle}) => {
    return(
        <View style={{...containerStyle}}>
            {/* Title */}

            <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{title}</Text>

            {/* Figures */}

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}
            >
                <Text style = {{...FONTS.h3, color: COLORS.lightGray3}}>

                </Text>
                <Text style = {{marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white}}>{displayAmount.toLocaleString()}
                </Text>
                <Text style = {{color: COLORS.lightGray3, ...FONTS.h3}}>USD</Text>

            </View>
            {/* Change Percentage */}

            

        </View>
    )
 }

 export default BalanceInfo;
