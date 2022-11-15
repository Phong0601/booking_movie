import React from "react";
import imgLoading from "assets/img/backgrounds/animation.gif";
const Loading = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<img style={{width:'100%',height:'400px',objectFit:'cover'}} src={imgLoading} />
		</div>
	);
};

export default Loading;
