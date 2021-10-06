export default class CounterPlus {
  constructor($app) {
    this.$target = document.createElement("span");
    this.$target.className = "plus bg-dark";
    this.$target.innerText = "+";

    this.bindEvents();
    $app.appendChild(this.$target);
  }

  on(eventName, callback) {
    this.events = this.events ? this.events : {};
    this.events[eventName] = callback;
  }

  emit(eventName, payload) {
    this.events[eventName] && this.events[eventName](payload);
  }

  bindEvents() {
    this.$target.addEventListener("click", () => {
      this.emit("plus");
    });
  }
}
