import { Formik, Field, Form, ErrorMessage, useField } from 'formik'; // library for forms
import * as Yup from 'yup'; // library for validation

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const CustomForm = () => {
    return (
        <div className='app'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    amount: 0,
                    currency: '',
                    text: '',
                    terms: false
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Минимум 2 символа для заполнения')
                        .required('Обязательное поле!'),
                    email: Yup.string()
                        .email('Неправильный email адрес')
                        .required('Обязательное поле!'),
                    amount: Yup.number()
                        .required('Сумма обязательна')
                        .min(5, 'Не менее 5'),
                    currency: Yup.string().required('Выберите валюту'),
                    text: Yup.string()
                        .min(10, 'Не менее 10 символов'),
                    terms: Yup.boolean()
                        .required('Необходимо согласие')
                        .oneOf([true], "Необходимо согласие")
                })}
                onSubmit={values => console.log(JSON.stringify(values, null, 2))}
            >
                <Form className="form">
                    <h2>Отправить пожертвование</h2>
                    <MyTextInput
                        label="Ваше имя"
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                    />
                    <MyTextInput
                        label="Ваша почта"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                    />
                    <label htmlFor="amount">Количество</label>
                    <Field
                        id="amount"
                        name="amount"
                        type="number"
                        autoComplete="off"
                    />
                    <ErrorMessage component="div" className="error" name="amount" />
                    <label htmlFor="currency">Валюта</label> <br />
                    <Field
                        id="currency"
                        name="currency"
                        as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                    </Field> <br />
                    <ErrorMessage component="div" className="error" name="currency" />
                    <label htmlFor="text">Ваше сообщение</label> <br />
                    <Field
                        id="text"
                        name="text"
                        as="textarea"
                    />
                    <ErrorMessage component="div" className="error" name="text" />
                    <MyCheckbox name="terms">
                        Соглашаетесь с политикой конфиденциальности?
                    </MyCheckbox> <br />
                    <button className='btn btn-primary' type="submit">Отправить</button>
                </Form>
            </Formik>
        </div>

    )
}

export default CustomForm;