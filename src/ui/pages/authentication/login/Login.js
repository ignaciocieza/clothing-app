import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '../../../widgets/checkbox/CheckBox';
import { useFormik } from 'formik';
import { Text, Box } from '../../../widgets/theme';
import TextInputCoustome from '../../../widgets/textinput-coustome/TextInputCoustome';
import Container from '../../../widgets/container/Container';
import CoustomeButton from '../../../widgets/coustome-button/CoustomeButton';
import * as Yup from 'yup';
import FooterForm from '../../../widgets/footer-form/FooterForm';
import { loginUser, setIsFetched, setIsFetching } from '../../../../api/actions/actions';
import { BorderlessButton } from 'react-native-gesture-handler';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Required'),
});


export default function Login({ navigation }) {
    const { buttonLogin } = useSelector(state => state);
    const { user } = useSelector(state => state);
    const { isFetched } = useSelector(state => state);
    const dispatch = useDispatch();
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched
    } = useFormik({
        initialValues: { email: buttonLogin.email, password: buttonLogin.pass, remember: true },
        onSubmit: values => {
            if (isFetched) {
                navigation.navigate('Home');
            } else {
                dispatch(setIsFetching(true));
                dispatch(loginUser(values));
            }
        },
        validationSchema: LoginSchema,
        enableReinitialize: true
    });

    const password = useRef(null);

    useEffect(() => {
        if (user) {
            dispatch(setIsFetching(false));
            navigation.navigate('Home');
        };
    }, [user])

    return (
        <Container footer={
            <FooterForm
                title="Don't have an account?"
                action="Sigun Up here"
                onPress={() => navigation.navigate('SignUp')}
            />
        }>
            <Box padding='xl'>
                <Text variant='title1' textAlign='center' marginBottom='l'>Welcome Back </Text>
                <Text variant='body' textAlign='center' marginBottom='l'>Use your credentials below and login to your account</Text>
                <Box>
                    <Box marginBottom='m'>
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
                            onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <TextInputCoustome
                        ref={password}
                        icon='lock'
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder='Enter your Password'
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType='password'
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box flexDirection='row' justifyContent='space-between' marginVertical='m'>
                        <CheckBox label='Remember me' checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
                        <BorderlessButton
                            onPress={() => {
                                navigation.navigate('ForgotPassword');
                            }}>
                            <Text color='primary' variant='button'>Forgot Password</Text>
                        </BorderlessButton>
                    </Box>
                    <Box alignItems='center' marginTop='m'>
                        <CoustomeButton variant='primary' onPress={handleSubmit} label='Log into your account' />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}