import React from "react";
import "./_support.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quae, quos deleniti vitae modi distinctio iste fugiat dolorem ipsum aliquam laboriosam, laborum tempore inventore unde assumenda dolore doloremque et nulla est voluptatibus omnis in esse! Quasi amet tempore cupiditate maiores, delectus doloribus odit accusantium modi, itaque culpa ratione fuga. Quas!

`;

function Support() {
	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div id="Support">
			<div className="container">
				<h1>CÂU HỎI THƯỜNG GẶP</h1>

				<Collapse
					defaultActiveKey={["1"]}
					onChange={onChange}
					style={{ fontSize: 16 }}
				>
					<Panel header="Tôi phải đặt vé như thế nào ?" key="1">
						<p>{text}</p>
					</Panel>
					<Panel header="Làm sao để lấy mã khuyến mãi ?" key="2">
						<p>{text}</p>
					</Panel>
					<Panel
						header="Sau khi đặt vé xong thì thanh toán như thế nào ? Ai là người chịu trách nhiệm nếu có vấn đề xảy ra ?"
						key="3"
					>
						<p>{text}</p>
					</Panel>

					<Panel header="Xem danh sách rạp ở đâu ?" key="4">
						<p>{text}</p>
					</Panel>

					<Panel header="Giá vé mỗi rạp có khác gì nhau không  ?" key="5">
						<p>{text}</p>
					</Panel>
				</Collapse>
			</div>
		</div>
	);
}

export default Support;
