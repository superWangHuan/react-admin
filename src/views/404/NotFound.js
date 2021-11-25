import React from "react";
import { Result, Button } from "antd";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

function useErrorPage(props) {
	const {
		openMenus,
		history,
		filterOpenKeyFn,
		status = "404",
		errTitle = "404",
		subTitle = "Sorry, the page you visited does not exist.",
	} = props;

	const back = async () => {
		const url =
			history.location.pathname +
			(history.location.hash || history.location.search);
		// 从顶部打开的路径，再去跳转
		const menuList = openMenus.filter((i) => i.path !== url);
		filterOpenKeyFn(url);
		const next = menuList[menuList.length - 1];
		history.replace(next.path);
	};
	return { status, errTitle, subTitle, back };
}

function ErrorPage(props) {
	const { status, errTitle, subTitle} = useErrorPage(props);
	return (
		<Result
			status={status}
			title={errTitle}
			subTitle={subTitle}
			extra={
				<Button type="primary" >
					Go Back
				</Button>
			}
		/>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
