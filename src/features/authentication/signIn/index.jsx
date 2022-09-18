import { Button, Input } from "antd";
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
			history.push("/");
		},

		validationSchema: schema,
	});

	const signIn = (user) => {
		dispatch(signInAction(user));
	};

	return (
		<div className="SignIn">
			<div className="content-signin">
				<h2 className="title">Sign In</h2>
				<form onSubmit={formik.handleSubmit} className="form">
					<Input
						name="taiKhoan"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
						type="text"
						placeholder="Username"
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
					/>
					{formik.touched.matKhau && formik.errors.matKhau && (
						<p className="errorText">{formik.errors.matKhau}</p>
					)}
					<Button
						htmlType="submit"
						type="primary"
						loading={isLoading}
					>
						Submit
					</Button>
				</form>
			</div>
			<button onClick={goToSignUp}>Sign Up</button>
		</div>
	);
}

export default SignIn;
