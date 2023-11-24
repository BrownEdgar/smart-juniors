import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../../components';
import { addGroup } from '../../features/groups/groupsSlice';
import ROUTES from '../../routes/routes';
import './AddGroup.scss';

const validationSchema = object({
	name: string().required(),
	address: string().required(),
	phone: string().required(),
	email: string().email().required(),
});

export default function AddGroup() {
	const inputTypes = useSelector((state) => state.inputTypes);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const initialValues = {
		name: '',
		address: '',
		phone: '',
		email: '',
	};
	const handleSubmit = (values, { resetForm }) => {
		dispatch(
			addGroup({
				id: Date.now(),
				name: values.name,
				contact: {
					address: values.address,
					phone: values.phone,
					email: values.email,
				},
			})
		);
		resetForm();
		navigate({ pathname: `/${ROUTES.GROUPS}` });
	};

	return (
		<section className="AddGroup">
			<Formik
				initialValues={initialValues}
				validateOnBlur={true}
				validateOnChange={false}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					{inputTypes.map((elem, index) => {
						return (
							<InputField
								inputType={elem.type}
								inputName={elem.name}
								inputId={elem.id}
								inputPlaceholder={elem.placeholder}
								key={index}
							/>
						);
					})}

					<input type="submit" name="submit" id="submit" value="Add Group" />
				</Form>
			</Formik>
		</section>
	);
}
