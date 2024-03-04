import { Text, View } from 'react-native'
import React, { FC } from 'react'
import { ReactPropTypes } from 'react'
import style from './style'

interface Props {
  title: string,
  type: number
}

const Header: FC<Props> = ({ title, type = 1 }) => {

  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
        break;
      case 2:
        return style.title2;
        break;
      case 3:
        return style.title3
        break;
      default:
        break;
    }
  }

  return (
    <View>
      <Text style={styleToApply()}>{title}</Text>
    </View>
  )
}




export default Header

