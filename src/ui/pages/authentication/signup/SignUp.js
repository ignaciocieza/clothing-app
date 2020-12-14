import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { Text, Box } from '../../../widgets/theme';
import TextInputCoustome from '../../../widgets/textinput-coustome/TextInputCoustome';
import Container from '../../../widgets/container/Container';
import CoustomeButton from '../../../widgets/coustome-button/CoustomeButton';
import * as Yup from 'yup';
import FooterForm from '../../../widgets/footer-form/FooterForm';


const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Passwords don't match")
        .required('Required'),
    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Required'),
});


export default function SignUp({ navigation }) {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues: { email: "", password: "", passwordConfirmation: "", remember: true },
        onSubmit: values => (console.log(values)),
        validationSchema: LoginSchema,
    });

    const password = useRef(null);
    const passwordConfirmation = useRef(null);

    return (
        <Container footer={
            <FooterForm
                title="Already have an account? "
                action="Login Here"
                onPress={() => navigation.navigate('Login')}
            />
        }>
            <Box padding='xl'>
                <Text variant='title1' textAlign='center' marginBottom='l'>Create account</Text>
                <Text variant='body' textAlign='center' marginBottom='l'>Let's us know what your name, email and your password</Text>
                <Box>
                    <Box marginBottom='m'>
                        <TextInputCoustome
                            icon='mail'
                            placeholder='Enter your Email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            autoCompleteType='email'
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom='m'>
                        <TextInputCoustome
                            ref={password}
                            icon='lock'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            placeholder='Enter your Password'
                            error={errors.password}
                            touched={touched.password}
                            autoCompleteType='password'
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => passwordConfirmation.current?.focus()}
                            secureTextEntry
                        />
                    </Box>
                    <TextInputCoustome
                        ref={passwordConfirmation}
                        icon='lock'
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        placeholder='Confirm your Password'
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType='password'
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box alignItems='center' marginTop='xl'>
                        <CoustomeButton variant='primary' onPress={handleSubmit} label='Create you account' />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}