import React, {Component} from 'react';
import {connect} from 'dva';
import ReactPlayer from 'react-player';
import mp4MV from '../static/video/01-1000.mp4';
import {Form, Icon, Input, Button} from 'antd';
import './index.less';
/* eslint-disable */
@connect(state => ({login: state.login}))
@Form.create()
class Login extends Component {
	constructor(props) {
		super(props);
	}
	handleSubmit = e => {
		e.preventDefault();
		const {dispatch} = this.props;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				dispatch({
					type: 'login/goHome',
					payload: values
				})
			}
		});
	};
	// 媒体错误
	playerVideoError = () => {
		const videoPlayer = document.querySelector('#videoPlayer');
		videoPlayer.style.backgroundImage = 'url(/img/bigbg.png)';
		videoPlayer.style.backgroundPosition = 'center center';
		videoPlayer.style.backgroundSize = '100% 100%';
		videoPlayer.style.width = '100%';
		videoPlayer.style.height = '100%';
	};

	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<div className="login">
				<ReactPlayer
					url={mp4MV}
					id="videoPlayer"
					muted
					autoPlay
					loop
					playing={true}
					className="background-video"
					onError={this.playerVideoError}
					width="auto"
					height="auto"
				/>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{required: true, message: '请填写用户名'}]
						})(
							<Input
								style={{width: 200}}
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
								placeholder="admin"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{required: true, message: '请填写密码'}]
						})(
							<Input
								style={{width: 200}}
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
								type="password"
								placeholder="123"
							/>,
						)}
					</Form.Item>
					<Button style={{width: 200}} type="primary" htmlType="submit" className="login-form-button">
						Log In
					</Button>
				</Form>
			</div>
		);
	}
}

export default Login;
