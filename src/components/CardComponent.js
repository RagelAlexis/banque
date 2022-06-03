import React from 'react'
import { Card } from 'react-native-paper'
import { Text, View } from 'react-native'

const CardComponent = (props) => {

    const {item, index} = props

    let incomes = item.incomes
    let expenses = item.expenses

  return (
    <Card key={index} mode="outlined" style={{ marginVertical: 10 }}>
        <Card.Title title={item.user} />
        <Card.Content
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
        >
 
            <View style={{flex: 1,}}>

                <View>
                    <Text style={{fontWeight: 'bold'}}>Revenus :</Text>
                    {incomes.map((item, index) => {
                    return (
                        <Text key={index} >{item.amount}</Text>
                    )
                    })}
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Dépenses :</Text>
                    {expenses.map((item, index) => {
                    return (
                        <Text key={index} >{item.amount}</Text>
                    )
                    })}
                </View>

            </View>
        </Card.Content>
    </Card>
  )
}

export default CardComponent