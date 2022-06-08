import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../datas/data.json'
import { Picker } from '@react-native-picker/picker'

const selectUser = (id) => {
    return Data.find(item => item._id === id)
}

const UserComponent = () => {
    const [id, setId] = React.useState(Data[0]._id)
    const [user, setUser] = React.useState(Data[0].user)
    const [incomes, setIncomes] = React.useState(Data[0].incomes)
    const [expenses, setExpenses] = React.useState(Data[0].expenses)
    const [date, setDate] = React.useState(Data[0].date)
    const [amount, setAmount] = React.useState(Data[0].amount)
    const [category, setCategory] = React.useState(Data[0].category)
    const [comments, setComments] = React.useState(Data[0].comments)
    const [_id_income, set_id_income] = React.useState(Data[0]._id_income)

  
    const totalIncome = incomes.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const totalExpenses = expenses.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const totalBalance = (parseFloat(totalIncome) - parseFloat(totalExpenses)).toFixed(2)

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={id}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => {
                    setId(itemValue)
                    setUser(selectUser(itemValue).user)
                    setIncomes(selectUser(itemValue).incomes)
                    setExpenses(selectUser(itemValue).expenses)
                    setDate(selectUser(itemValue).date)
                    setAmount(selectUser(itemValue).amount)
                    setCategory(selectUser(itemValue).category)
                    setComments(selectUser(itemValue).comments)
                    set_id_income(selectUser(itemValue)._id_income)
                }}>
                {Data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
            </Picker>
            <View style={styles.container}>
                <Text style={styles.text}>{user}</Text>
                <Text style={styles.text}>Revenus : {totalIncome}</Text>
                <Text style={styles.text}>Dépenses : {totalExpenses}</Text>
                <Text style={styles.text}>Total : {totalBalance}</Text>
            </View>
        </View>
    )
}



export default UserComponent

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
})
