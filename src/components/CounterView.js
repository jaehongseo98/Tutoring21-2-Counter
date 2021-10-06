export default class CounterView {
  constructor($app) {
    this.count = 1;
    this.$target = document.createElement("input");
    this.$target.type = "number";
    this.$target.className = "count";
    this.$target.name = "qty";
    this.$target.value = this.count;

    $app.appendChild(this.$target);
  }

  on(eventName, callback) {
    this.events = this.events ? this.events : {};
    this.events[eventName] = callback;
  }

  emit(eventName, payload) {
    this.events[eventName] && this.events[eventName](payload);
  }

  plus() {
    this.count++;
    this.render();
  }

  minus() {
    this.count--;
    this.render();
  }

  render() {
    this.$target.value = this.count;
  }
}
