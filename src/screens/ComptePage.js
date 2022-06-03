import React from 'react'
import { ScrollView } from 'react-native'
import CardComponent from '../components/CardComponent'

const customData = require('../datas/data.json')

const ComptePage = () => {
  return (
    <ScrollView>
      {customData.map((item, index) => {
        return (
          <CardComponent item={item} key={index} />
        )
      })}
    </ScrollView>
  )
}

export default ComptePage