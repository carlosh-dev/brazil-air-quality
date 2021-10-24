

import React, { useState } from 'react';
import { Image } from 'react-native';
import { Icon01d, Icon01n, Icon02d, Icon02n, Icon03d, Icon04d, Icon09d, Icon10d, Icon11d, Icon13d, Icon50d } from '../../images'


interface Props {
    iconType: string,
    style?: any
}

export default function WeatherIcon({iconType, style}:Props) {    

    var icon;

    switch(iconType) {
        case '01d':
            icon = Icon01d
            break;
        case '01n':
            icon = Icon01n
            break;
        case '02d':
            icon = Icon02d
            break;
        case '02n':
            icon = Icon02n
            break;
        case '03d':
            icon = Icon03d
            break;
        case '04d':
            icon =Icon04d
            break;
        case '09d':
            icon =Icon09d
            break;
        case '10d':
            icon = Icon10d
            break;
        case '11d':
            icon = Icon11d
            break;
        case '13d':
            icon = Icon13d
            break;
        case '50d':
            icon = Icon50d
            break;
    }
  
    return(
        <Image 
            source={icon}
            style={style}
        />
    )
}  