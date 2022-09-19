import React, { useEffect } from "react";
import {
	FileTextOutlined,
	LockOutlined,
	MailOutlined,
	PhoneOutlined,
	ToolOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import instance from "api/instance";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { signUpAction, updateProfileAction } from "../utils/authAction";

const schema = yup.object({
	taiKhoan: yup.string().required("*Bạn chưa sửa trường này !"),
	matKhau: yup
		.string()
		.required("*Bạn chưa sửa trường này !")
		.min(6, "*Mật khẩu phải từ 6 đến 14 kí tự"),
	hoTen: yup
		.string()
		.required("*Bạn chưa sửa trường này !")
		.matches(/^[A-Za-z ]+$/g, "*Họ tên không đúng"),
	email: yup
		.string()
		.required("*Bạn chưa sửa trường này !")
		.email("*Email không đúng định dạng"),
});

function Profile() {
	const dispatch = useDispatch();

	// Get info profile from Store (to fill <input>)
	const selectedUser = useSelector((state) => state.auth.profile);
	// Validation Form
	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
			hoTen: "",
			email: "",
			soDt: "",
		},
		onSubmit: (user) => {
			console.log(user);
		},

		validationSchema: schema,
	});

	const updateProfile = (user) => {
		dispatch(updateProfileAction(user));
	};

	///////
	if (!selectedUser) {
		return "Loadding";
	}

	return (
		<div className="Profile">
			{console.log(selectedUser)}
			<div className="container">
				<div className="content-info">
					<form onSubmit={formik.handleSubmit} className="form">
						<Input
							name="taiKhoan"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="input"
							type="text"
							placeholder="Username"
							prefix={<UserOutlined style={{ marginRight: 8 }} />}
							value={selectedUser.taiKhoan}
						/>
						{formik.touched.taiKhoan && formik.errors.taiKhoan && (
							<p className="errorText">
								{formik.errors.taiKhoan}
							</p>
						)}
						<Input
							name="matKhau"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="input"
							type="text"
							placeholder="Password"
							prefix={<LockOutlined style={{ marginRight: 8 }} />}
							value={selectedUser.matKhau}
						/>
						{formik.touched.matKhau && formik.errors.matKhau && (
							<p className="errorText">{formik.errors.matKhau}</p>
						)}

						<Input
							name="hoTen"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="input"
							type="text"
							placeholder="FullName"
							prefix={
								<FileTextOutlined style={{ marginRight: 8 }} />
							}
							value={selectedUser.hoTen}
						/>
						{formik.touched.hoTen && formik.errors.hoTen && (
							<p className="errorText">{formik.errors.hoTen}</p>
						)}
						<Input
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="input"
							type="text"
							placeholder="Email"
							prefix={<MailOutlined style={{ marginRight: 8 }} />}
							value={selectedUser.email}
						/>
						{formik.touched.email && formik.errors.email && (
							<p className="errorText">{formik.errors.email}</p>
						)}
						<Input
							name="soDt"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="input"
							type="text"
							placeholder="Phone"
							prefix={
								<PhoneOutlined style={{ marginRight: 8 }} />
							}
							value={selectedUser.soDt}
						/>
						{formik.touched.soDt && formik.errors.soDt && (
							<p className="errorText">{formik.errors.soDt}</p>
						)}

						<Button
							htmlType="submit"
							type="primary"
							className="btn-submit"
						>
							Cập nhật
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Profile;
