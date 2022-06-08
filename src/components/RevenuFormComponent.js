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

const AjoutRevenus = () => {
  const [category, setcategory] = useState('')
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const [date, setDate] = useState(new Date())
  return (

    <Formik
      initialValues={{
        user: '',
        amount: '',
        date: '',
        category: '',
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
           <Text style={{fontSize:30, textAlign: 'center', marginBottom:15}}>Ajout Revenu</Text>
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
              <Picker.Item label="category" value="" enabled={false}/>
              <Picker.Item label="Salaire et assimilé" value="Salaire et assimilé" />
              <Picker.Item label="Revenu financier" value="Revenu financier" />
              <Picker.Item label="Rente" value=" Rente" />
              <Picker.Item label="Pension alimentaire" value=" Pension alimentaire" />
              <Picker.Item label="Allocation chômage" value="Allocation chômage" />
              <Picker.Item label="Prestations sociales" value="Prestations sociales" />
              <Picker.Item label="Revenu foncier" value="Revenu foncier" />
              <Picker.Item label="Revenu exceptionnel" value="Revenu exceptionnel" />
              <Picker.Item label="Autre revenu" value="Autre revenu" />

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
        </View>
      )}
    </Formik>
  );
}




export default AjoutRevenus

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 40
  }
});