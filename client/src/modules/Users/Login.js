import react from "react"
import {
	Button,
	Form,
	Input,
	Row,
	Col,
	Space,
	Layout
} from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "./../../redux/actions/usersAction"
import { formItemLayout, tailFormItemLayout } from "./../../utils"
const { Header, Content } = Layout;

const Login = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const onFinish = (values) => {
		dispatch(userLogin(values))
	};
	return (
		<Layout style={{ height: "100vh" }}>
			<Header>Header</Header>
			<Content>	
				<Row center="xs" top="xs" style={{ marginTop: 15 }}>
				<Space />
				<Col xl={18} >
					<Form
						{...formItemLayout}
						form={form}
						name="register"
						onFinish={onFinish}

						scrollToFirstError
					>
						<Form.Item
							name="email"
							label="Username"
							rules={[
								{
									required: true,
									message: 'Please input user name!',
								},
							]}
						>
							<Input />
						</Form.Item >
						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>

							<Button type="primary" htmlType="submit">
								Login
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row></Content>
		</Layout>
	)
}

export default Login