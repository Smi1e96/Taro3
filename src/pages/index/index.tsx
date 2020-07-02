import React from 'react'

import { View, Text } from '@tarojs/components'

import { useRequest } from 'ahooks'

import './index.less'

function getUsername(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('测试');
    }, 3000);
  });
}

const Index = () => {
  const { data, error, loading } = useRequest(getUsername);

  console.log(data, error, loading)

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

export default Index
