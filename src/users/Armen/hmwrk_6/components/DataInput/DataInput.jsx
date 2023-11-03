import { ErrorMessage, Field, Form, Formik } from 'formik';
import './DataInput.scss';
import PropTypes from 'prop-types';
import { object, string, number } from 'yup';
import { SET_POST_COUNT, ADD_DEV, TOGGLE_MODAL, ADD_ANIM } from '../../actionTypes';
import classNames from 'classnames';

const validationSchema = object({
	postCountInput: number()
		.required('Введите количество постов!')
		.positive('Число должно быть положительным')
		.integer('Введите целое число')
		.max(100, 'Вы превысили лимит, максимальное число: 100'),
	developerInput: string()
		.min(3, 'Имя должно содержать не менее 3 символов')
		.max(20, 'Имя должно содержать максимум 20 символов')
		.matches(/^[A-Z]/, 'Первая буква должна быть заглавной')
		.required('Введите имя разработчика!'),
});

export default function DataInput({ data, dispatch }) {
	const initialValues = {
		postCountInput: '',
		developerInput: '',
	};

	const handleSubmit = (values, { resetForm }) => {
		dispatch({ type: SET_POST_COUNT, payload: { postCount: values.postCountInput } });
		dispatch({ type: ADD_DEV, payload: { devName: values.developerInput } });
		dispatch({ type: ADD_ANIM });

		setTimeout(() => {
			dispatch({ type: TOGGLE_MODAL, payload: { value: false } });
		}, 1800);

		resetForm();
	};

	return (
		<div className="DataInput">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validateOnChange={false}
				validateOnBlur={true}
				validationSchema={validationSchema}
			>
				{(formik) => {
					return (
						<Form>
							<div className="countInput">
								<Field type="number" name="postCountInput" id="postCountInput" placeholder="Число постов" />
								<ErrorMessage name="postCountInput" component={'p'} />
							</div>
							<div className="devInput">
								<Field type="text" name="developerInput" id="developerInput" placeholder="Имя разработчика" />
								<ErrorMessage name="developerInput" component={'p'} />
							</div>
							<input
								className={classNames(null, { animClosing: data.submitted })}
								type="submit"
								id="addDev"
								value="Подтвердить"
							/>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

DataInput.propTypes = {
	data: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
};
