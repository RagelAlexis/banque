import React, { Component, useState } from 'react';
import { Picker, DateTimePicker } from '@react-native-picker/picker'
import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import dayjs from 'dayjs'



const customCss = {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderColor: '#cccccc',
};

const AjoutDepense = () => {
    const [category, setcategory] = useState('')
    const [dateTimeShow, setDateTimeShow] = useState(false)
    const [date, setDate] = useState(new Date())
    const categoryArray = ['Alimentaires', 'Factures', 'Transport', 'Logement', 'Santé', 'Divertissement', 'Vacances', 'Shopping', 'Autres']

    return (



        <Formik
            initialValues={{
                user: '',
                amount: '',
                date: '',
                
                comment: ''
            }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
            validationSchema={yup.object().shape({
                user: yup
                    .string()
                    .required('user is required.'),
                amount: yup
                    .number()
                    .required('amount is required.'),
                date: yup
                    .date(),
                category: yup
                    .string(),
                comment: yup
                    .string()
                    .required('comment is required.'),
            })}
        >

            {({ values, errors, setFieldTouched, touched, handleChange, isValid, handleSubmit }) => (
                <View style={styles.mainWrapper}>
                    <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 15 }}>Ajout Dépense</Text>
                    <TextInput
                        value={values.user}
                        style={customCss}
                        onBlur={() => setFieldTouched('user')}
                        onChangeText={handleChange('user')}
                        placeholder="user"
                    />
                    {touched.user && errors.user &&
                        <Text style={{ fontSize: 11, color: 'red' }}>{errors.user}</Text>
                    }
                    <TextInput
                        value={values.amount}
                        style={customCss}
                        onBlur={() => setFieldTouched('amount')}
                        onChangeText={handleChange('amount')}
                        placeholder="amount"
                    />
                    {touched.amount && errors.amount &&
                        <Text style={{ fontSize: 11, color: 'red' }}>{errors.amount}</Text>
                    }
                    <TextInput
                        style={styles.input}
                        label="Date du revenu"
                        value={dayjs(date).format('DD/MM/YYYY')}
                        onChangeText={() => { }}
                        onBlur={() => { }}
                        onFocus={() => {
                            setDateTimeShow(true)
                        }}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                    {dateTimeShow && (
                        <DateTimePicker
                            mode="date"
                            value={new Date()}
                            is24Hour={true}
                            onChange={(event, date) => {
                                setDateTimeShow(false)
                                setDate(date)
                            }}
                        />
                    )}
                    {touched.date && errors.date &&
                        <Text style={{ fontSize: 11, color: 'red' }}>{errors.date}</Text>
                    }
                  
                    <View style={styles.dropDownStyle}>
                        <Picker
                            selectedValue={category}
                            onValueChange={(itemValue, itemIndex) => {
                                setcategory(itemValue)
                            }}
                        >
                            <Picker.Item label="category" value="" enabled={false} />
                            <Picker.Item label="Alimentaires" value="Alimentaires" />
                            <Picker.Item label="Factures" value="Factures" />
                            <Picker.Item label="Transport" value="Transport" />
                            <Picker.Item label="Logement" value="Logement" />
                            <Picker.Item label="Santé" value="Santé" />
                            <Picker.Item label="Divertissement" value="Vacances" />
                            <Picker.Item label="Vacances" value="Revenu foncier" />
                            <Picker.Item label="Shopping" value="Shopping" />
                            <Picker.Item label="Autre" value="Autre" />

                        </Picker>
                    </View>
                    {touched.category && errors.category &&
                        <Text style={{ fontSize: 11, color: 'red' }}>{errors.category}</Text>
                    }
                    <TextInput
                        value={values.comment}
                        style={customCss}
                        placeholder="comment"
                        onBlur={() => setFieldTouched('comment')}
                        onChangeText={handleChange('comment')}
                    />
                    {touched.comment && errors.comment &&
                        <Text style={{ fontSize: 11, color: 'red' }}>{errors.comment}</Text>
                    }
                    <Button
                        color="blue"
                        title='Envoyer'
                        disabled={!isValid}
                        onPress={handleSubmit}
                    />
                      <Text>{category}</Text>
                </View>
            )}
        </Formik>
    );
}




export default AjoutDepense

const styles = StyleSheet.create({
    mainWrapper: {
        padding: 40
    }
});