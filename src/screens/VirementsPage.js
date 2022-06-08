import React, { Component, useState } from 'react';
import { Picker } from '@react-native-picker/picker'
import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'


const category = () => {
  const [category, setcategory] = useState('')
}


export default class FormComponenet extends Component {
  render() {
    
    const customCss = {
      borderWidth: 1,
      padding: 10,
      marginBottom: 12,
      borderColor: '#cccccc',
    };

    return (



      <Formik
        initialValues={{ 
          user: '',
          income: '', 
          date: '',
          category: '' ,
          comment: ''
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          user: yup
            .string()
            .required('user is required.'),
            income: yup
            .number()
            .required('income is required.'),
            date: yup
            .date()
            .required(),            
            category: yup
            .string()
            .required('category is required.'),
            comment: yup
            .string()
            .required('comment is required.'),
        })}
       >
         
        {({ values, errors, setFieldTouched, touched, handleChange, isValid, handleSubmit }) => (
          <View style={styles.mainWrapper}>
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
              value={values.income}
              style={customCss}
              onBlur={() => setFieldTouched('income')}
              onChangeText={handleChange('income')}
              placeholder="income"
            />
            {touched.income && errors.income &&
              <Text style={{ fontSize: 11, color: 'red' }}>{errors.income}</Text>
            }
            <TextInput
              value={values.date}
              style={customCss}
              placeholder="date"
              onBlur={() => setFieldTouched('date')}
              onChangeText={handleChange('date')}
            />
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
                     <Picker.Item label="category" value="" />
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

}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 40 
  }
});