
import dva from 'dva';
import {createBrowserHistory} from 'history';
import qhistory from 'qhistory';
import {stringify, parse} from 'qs';
// 1. Initialize
const app = dva({
	history: qhistory(createBrowserHistory({
		// URL base path
		basename: '/'
	}),
	stringify,
	parse
	)
});
// app.use();
// 2. Model
/* eslint-disable no-undef */
app.model(require('./login/model').default);
app.model(require('./home/model').default);
// 3. Router
app.router(require('./router').default);
// 4. Start
app.start('#root');
