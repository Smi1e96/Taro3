import React from 'react'

import { View, Text } from '@tarojs/components'

import './index.less'


const Index = () => {

  const hanldClick = () => {
    console.log('1')
  }

  return (
    <View className='index'>
      <van-button
        onClick={hanldClick}
        block
        plain
        color='#656D7F'
      >
        密码/短信登录
      </van-button>
      <van-cell title='单元格'>
        <slot name='icon'>
          {/* <van-icon name='search' class='custom-icon' /> */}
          <Text>1111</Text>
        </slot>
      </van-cell>
    </View>
  )
}

export default Index
