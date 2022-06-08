import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Data from '../datas/data.json'
import { Picker } from '@react-native-picker/picker'

const selectUser = (id) => {
    return Data.find(item => item._id === id)
}

const UserComponent = () => {
    
    const [id, setId] = useState(Data[0]._id)
    const [user, setUser] = useState(Data[0].user)
    const [incomes, setIncomes] = useState(Data[0].incomes)
    const [expenses, setExpenses] = useState(Data[0].expenses)
    const [date, setDate] = useState(Data[0].date)
    const [amount, setAmount] = useState(Data[0].amount)
    const [category, setCategory] = useState(Data[0].category)
    const [comments, setComments] = useState(Data[0].comments)
    const [_id_income, set_id_income] = useState(Data[0]._id_income)

    const totalIncome = incomes.map(item => item.amount.substring(1).replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const totalExpenses = expenses.map(item => item.amount.substring(1).replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const total = (parseFloat(totalIncome) - parseFloat(totalExpenses)).toFixed(2)

    return (
      <View style={styles.container}>
       
            <Picker
                selectedValue={id}
                style={{ height: 50, width: 200 }}
                onValueChange={(item) => {
                    setId(item)
                    setUser(selectUser(item).user)
                    setIncomes(selectUser(item).incomes)
                    setExpenses(selectUser(item).expenses)
                    setDate(selectUser(item).date)
                    setAmount(selectUser(item).amount)
                    setCategory(selectUser(item).category)
                    setComments(selectUser(item).comments)
                    set_id_income(selectUser(item)._id_income)
                }}>
                {Data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
            </Picker>
            <View style={styles.container}>
                <Text style={styles.text}>Nom : {user}</Text>
                <Text style={styles.text}>Revenu : {totalIncome}€</Text>
                <Text style={styles.text}>Dépense : {totalExpenses}€</Text>
                <Text style={styles.text}>Solde du compte : {total}€</Text>
                <Text style={styles.text}>Détails Revenu : {incomes.map(item => item.amount.substring(1).replace(',', 'br'))}</Text>
                <Text style={styles.text}>Détails Dépense : {expenses.map(item => item.amount.substring(1).replace(',', ''))}</Text>
            </View>
        </View>
    )
}



export default UserComponent

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
})