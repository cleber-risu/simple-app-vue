app.component("cart-display", {
  props: ["cart"],
  setup() {
    return {};
  },
  template: `
    <div class="cart">Cart: {{ cart }}</div>
  `,
});
