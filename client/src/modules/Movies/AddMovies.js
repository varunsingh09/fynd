import { useEffect } from "react"
import {
	Button,
	Form,
	Input,
	Select,
	Row,
	Col,
	Space,
	InputNumber
} from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createMovie, updateMovie, getMovieById } from "./../../redux/actions/moviesAction"
import {formItemLayout,tailFormItemLayout} from "./../../utils"

const AddMovies = () => {

	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();
	const { Id } = params;

	const { pending_add_movie, get_movie_by_id, pending_get_movie_by_id } = useSelector(state => state.movies);

	const { Option } = Select;

	const [form] = Form.useForm();

	const onFinish = (values) => {
		if (Id) {
			dispatch(updateMovie(Id, values, history))
		} else {
			dispatch(createMovie(values, history))
		}
	};
	const genere = ['Action',
		'Adventure',
		'Fantasy',
		'Sci-Fi',
		'Drama',
		'War',
		'Mystery',
		'Romance',
		'Musical',
		'Family',
		'Animation',
		'Horror',
		'Thriller']

	useEffect(() => {
		if (Id) {
			dispatch(getMovieById(Id));
		}
	}, [Id])

	useEffect(() => {
		if (get_movie_by_id) {
			form.setFieldsValue({
				[`name`]: get_movie_by_id?.movieInfo?.name,
				[`director`]: get_movie_by_id?.movieInfo?.director,
				[`popularity`]: get_movie_by_id?.movieInfo?.popularity,
				[`imdb_score`]: get_movie_by_id?.movieInfo?.imdb_score,
				[`genre`]: get_movie_by_id?.movieInfo?.genre,
			})
		}
	}, [get_movie_by_id])

	useEffect(() => {
		form.resetFields();
	}, [])

	return (
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
						name="name"
						label="Name"
						rules={[
							{
								required: true,
								message: 'Please input movie name!',
							},
						]}
					>
						<Input readOnly={Id ? true : false} />
					</Form.Item >
					<Form.Item
						name="director"
						label="Director name"
						rules={[
							{
								required: true,
								message: 'Please input director name!',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="popularity"
						label="Popularity"
						rules={[
							{
								required: true,
								message: 'Please input popularity!',
							},
						]}
					>
						<InputNumber min={1} max={10} />
					</Form.Item>
					<Form.Item
						name="imdb_score"
						label="IMDB score"
						rules={[
							{
								required: true,
								message: 'Please input imdb score!',
							},
						]}
					>
						<InputNumber min={1} max={10}
							step=".1" />
					</Form.Item>
					
					<Form.Item
						name="genre"
						label="Genre"
						rules={[
							{
								required: true,
								message: 'Please select genre!',
							},
						]}
					>
						<Select placeholder="select movie genre" mode="multiple" showSearch allowClear>
							{genere.map((list, v) => <Option value={list} key={list}>{list}</Option>)}
						</Select>
					</Form.Item>

					<Form.Item {...tailFormItemLayout}>
						{Id ?
							<Button type="primary" htmlType="submit" loading={pending_get_movie_by_id}>
								Update
							</Button> :

							<Button type="primary" htmlType="submit" loading={pending_add_movie}>
								Save
							</Button>
						}
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default AddMovies