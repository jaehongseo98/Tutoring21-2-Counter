import CounterMinus from "./components/CounterMinus.js";
import CounterPlus from "./components/CounterPlus.js";
import CounterView from "./components/CounterView.js";

export default class App {
  constructor(props) {
    this.props = props;
  }

  async setup() {
    const { el } = this.props;
    this.$app = document.querySelector(el);

    // 컴포넌트 생성
    this.counterMinus = new CounterMinus(this.$app);
    this.counterView = new CounterView(this.$app);
    this.counterPlus = new CounterPlus(this.$app);

    // 이벤트 바인딩
    this.bindEvents();
  }

  bindEvents() {
    this.counterMinus.on("minus", () => {
      this.counterView.minus();
    });

    this.counterPlus.on("plus", () => {
      this.counterView.plus();
    });
  }
}
