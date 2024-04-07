import React, {useContext} from 'react';
import './DataTable.css';
import Button from "../../Button/Button";
import { AdminContext } from "../../../pages/adminka/AdminMain";

const DataTable = ({data}) => {
	const { togglePopup } = useContext(AdminContext);

	if (data.length) {

	}

	return (
		<div className='table-block'>
			<div className="table-header">
				<Button className='OrangeBtn backBtn' onClick={() => togglePopup(true, {add: ''})}>
					Добавить запись
				</Button>
			</div>
			<table className='data-table' cellSpacing='0'>
				<thead className='t-head'>
				<tr>
					{
						data.length ?
							// data.forEach(item => delete item._id)
							Object.keys(data[0]).map((header, index) =>
								<td key={index}>
									{header}
								</td>
							)
							:
							<td>-</td>
					}
					<td>Операции</td>
				</tr>
				</thead>
				<tbody>
				{
					data.length ? data.map((row, index) =>
							<tr key={row._id} className='t-body'>
								{Object.values(row).map((item, index) =>
									<td key={index}>{item}</td>
								)}
								<td>
									<div className="operations">
										<Button className='OrangeBtn backBtn' onClick={() => togglePopup(true, {edit: row._id})}>
											<svg style={{margin: '0 auto'}} fill="#000000" height="15px" width="15px"
											     version="1.1" id="Layer_1"
											     xmlns="http://www.w3.org/2000/svg"
											     xmlnsXlink="http://www.w3.org/1999/xlink"
											     viewBox="0 0 512 512" enableBackground="new 0 0 512 512"
											     xmlSpace="preserve">
												<path d="M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6
										L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8
										C499.5,116.9,534.3,70.6,487.9,24.1z"/>
											</svg>
										</Button>
										<Button className='OrangeBtn backBtn' onClick={() => togglePopup(true, {delete: 'Вы уверены?'})}>
											<svg style={{margin: '0 auto'}} width="15px" height="15px" viewBox="0 0 25 25"
											     version="1.1"
											     xmlns="http://www.w3.org/2000/svg"
											     xmlnsXlink="http://www.w3.org/1999/xlink"
											     fill="#000000">
												<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
												<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
												<g id="SVGRepo_iconCarrier"><title>cross</title>
													<desc>Created with Sketch Beta.</desc>
													<defs></defs>
													<g id="Page-1" stroke="none" strokeWidth="1" fill="none"
													   fillRule="evenodd">
														<g id="Icon-Set-Filled"
														   transform="translate(-469.000000, -1041.000000)" fill="#000000">
															<path
																d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
																id="cross"></path>
														</g>
													</g>
												</g>
											</svg>
										</Button>
									</div>
								</td>
							</tr>
						)
						:
						<tr>
							<td>-</td>
						</tr>
				}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;