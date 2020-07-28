import React from 'react'

import { View } from '@tarojs/components'

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
    </View>
  )
}

export default Index
