import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../widgets/container/Container';
import FooterForm from '../../../widgets/footer-form/FooterForm';
import TextInputCoustome from '../../../widgets/textinput-coustome/TextInputCoustome';
import { Box, Text } from '../../../widgets/theme';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CoustomeButton from '../../../widgets/coustome-button/CoustomeButton';


const ForgotSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Required'),
});

export default function ForgotPassword({ navigation }) {
    const {isFetched} = useSelector(state=>state);
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        initialValues: { email: "" },
        onSubmit: values =>(navigation.navigate('PasswordChanged')),
        validationSchema: ForgotSchema,
        enableReinitialize: true
    });

    return (
        <Container footer={
            <FooterForm
                title="Don't work?"
                action="Try another way"
                onPress={() => Linking.openURL("mailto: help@support.com")}
            />
        }>
            <Box padding='xl' justifyContent='center'>
                <Text variant='title1' textAlign='center' marginBottom='l'>Forgot password? </Text>
                <Text variant='body' textAlign='center' marginBottom='xl'>Enter the email address associated with your account</Text>
                <Box>
                    <Box marginBottom='l'>
                        <TextInputCoustome
                            icon='mail'
                            value={values.email}
                            placeholder='Enter your Email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            autoCompleteType='email'
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => handleSubmit}
                        />
                    </Box>
                    <Box alignItems='center' marginTop='m'>
                        <CoustomeButton variant='primary' onPress={()=>{ (!isFetched) && handleSubmit()}} label='Reset password' />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
};