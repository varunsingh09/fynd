import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table, Space, Tag } from 'antd';
import { getMovies, deleteMovie } from "./../../redux/actions/moviesAction"
import { Link } from "react-router-dom"
import { permission } from "./../../router/utils"
const ViewMovies = () => {
	const dispatch = useDispatch();
	const { delete_movie, pending_movie, pending_delete_movie, movies } = useSelector(state => state.movies);

	useEffect(() => {
		dispatch(getMovies());
	}, [])

	const handleDelete = (record) => {
		const { _id } = record
		dispatch(deleteMovie(_id));
	}

	useEffect(() => {
		if (delete_movie) {
			dispatch(getMovies());
		}
	}, [delete_movie])

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: 140,
			ellipsis: true,
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: 'Director',
			dataIndex: 'director',
			key: 'director',
			width: 140,
			ellipsis: true,
			sorter: (a, b) => a.director.length - b.director.length,
		},
		{
			title: '99 Popularity',
			dataIndex: 'popularity',
			key: 'popularity',
			width: 130,
			ellipsis: true,
			sorter: (a, b) => a.popularity.length - b.popularity.length,
		},
		{
			title: 'Genre',
			dataIndex: 'genre',
			key: 'genre',
			render: (record) => (
				<>
					{record?.map(tag => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Imdb Score',
			dataIndex: 'imdb_score',
			key: 'imdb_score',
			width: 120
		},
		{
			title: 'Action',
			key: 'operation',
			fixed: 'right',
			width: 140,
			render: (record) => <Space size="middle">
				{permission().write === "1" ? <Link to={`/movies/create/${record._id}`}>Edit</Link> : <><br /><Tag color='red'>N/A</Tag></>}
				{permission().delete === "1" ? <Link to="!#" onClick={(e) => { e.preventDefault(); handleDelete(record) }}>Delete</Link> : <Tag color='red'>N/A</Tag>}
			</Space>,
		},
	];
	return (
		<>
			{permission().write === "1" &&
				<Space>
					<h3><Link to={`/movies/create/`}>Add Movie</Link></h3>
				</Space>
			}
			<Table
				loading={pending_movie || pending_delete_movie}
				rowKey={record => record._id}
				dataSource={movies?.movieInfo || []}
				columns={columns}
			/>
		</>
	)
}

export default ViewMovies