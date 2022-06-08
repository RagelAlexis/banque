import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Data from '../datas/data.json'
import { Picker } from '@react-native-picker/picker'
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';


const userId = (id) => {
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
    <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Picker style={styles.title}
                    selectedValue={id}
                    onValueChange={(item) => {
                        setId(item)
                        setUser(userId(item).user)
                        setIncomes(userId(item).incomes)
                        setExpenses(userId(item).expenses)
                        setDate(userId(item).date)
                        setAmount(userId(item).amount)
                        setCategory(userId(item).category)
                        setComments(userId(item).comments)
                        set_id_income(userId(item)._id_income)
                    }}>
                    {Data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
                </Picker>
            </Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>              
            <Card style={styles.card}>
                <Card.Title title="Revenus" />
                <List.Section>
                    {incomes.map((item, index) => {
                        return (
                            <List.Item
                                key={index}
                                title={item.category}
                                description={`${item.amount.substring(1).replace(',', '')} €              Date : ${item.date.substring(0, 10)}`}          
                            />
                        )
                    }
                    )}
                </List.Section>
            </Card>
        </View>  
        <View style={{flex: 1}}>
            <Card style={styles.card}>
                <Card.Title title="Dépense" />
                <List.Section>
                    {expenses.map((item, index) => {
                        return (
                            <List.Item
                                key={index}
                                title={item.category}
                                description={`${item.amount.substring(1).replace(',', '')} €              Date : ${item.date.substring(0, 10)}`}              
                            />
                        )
                    }
                    )}
                </List.Section>
            </Card>
        </View>
        </View>
        <Card style={styles.card}> 
            <Card.Title title="Solde du compte" style={styles.solde}/>
            <List.Item title={`${total} €`}/>
        </Card>
    </ScrollView>
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
        padding: 20,
        backgroundColor: 'beige',
      },
      paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
      },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    solde: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    card : {
        borderWidth:  1,  
        borderStyle:  'dashed',
        marginBottom: 20,
    }
})
