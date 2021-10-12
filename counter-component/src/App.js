import plus from './components/CounterPlus.js';
import minus from './components/CounterMinus.js';
import view from './components/CounterView.js';

export default class App {
    constructor($app) {
        this.state = {
            count: 0,
        };
        new plus($app, () => {
            this.setState({ count: this.state.count + 1 });
        });
        this.views = new view($app, this.state.count);
        new minus($app, () => {
            this.setState({ count: this.state.count - 1 });
        });
    }

    setState(nextState) {
        this.state = { ...this.state, ...nextState };
        this.views.setState(this.state);
    }
}
