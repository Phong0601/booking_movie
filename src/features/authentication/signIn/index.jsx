import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { signInAction } from "../utils/authAction";

const schema = yup.object({
	taiKhoan: yup.string().required("*Trường này bắt buộc nhập ! "),
	matKhau: yup.string().required("*Trường này bắt buộc nhập ! "),
});

function SignIn() {
	const history = useHistory();
	const goToSignUp = () => {
		history.push("/signup");
	};

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
		},
		onSubmit: (values) => {
			signIn(values);
		},
		validationSchema: schema,
	});

	const signIn = async (user) => {
		const data = await dispatch(signInAction(user));
		if (!data.payload) {
			return alert("Sai tài khoản hoặc mật khẩu, vui lòng nhập lại !");
		} else {
			alert("Đăng nhập thành công !");
			history.push("/");
		}
	};

	return (
		<div
			className="SignIn"
			style={{ backgroundImage: "url(/bg/bgSignin.jpg)" }}
		>
			<div className="content-signin">
				<h2 className="title">Sign In</h2>
				<UserOutlined className="icon-user" />

				<form onSubmit={formik.handleSubmit} className="form">
					<Input
						name="taiKhoan"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
						type="text"
						placeholder="Username"
						prefix={<UserOutlined style={{ marginRight: 8 }} />}
					/>

					{formik.touched.taiKhoan && formik.errors.taiKhoan && (
						<p className="errorText">{formik.errors.taiKhoan}</p>
					)}

					<Input
						name="matKhau"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
						type="text"
						placeholder="Password"
						prefix={<LockOutlined style={{ marginRight: 8 }} />}
					/>
					{formik.touched.matKhau && formik.errors.matKhau && (
						<p className="errorText">{formik.errors.matKhau}</p>
					)}

					<div className="remember">
						<Checkbox>Remember me</Checkbox>
						<span className="forgot-password">
							Forgot password ?
						</span>
					</div>

					<Button
						className="btn-signin"
						htmlType="submit"
						type="primary"
						loading={isLoading}
					>
						Sign In
					</Button>
				</form>

				<div className="signup-tips">
					<p>Not a member ?</p>
					<div className="btn-signup" onClick={goToSignUp}>
						Create account
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
