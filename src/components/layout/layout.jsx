import { createNamespace } from "@/utils/create";

const [bem, name] = createNamespace("layout");

export default {
  name,
  render() {
    return (
      <main class={bem()}>
        <nav class={bem("nav")}>{this.$slots.nav}</nav>
        <section class={bem("content")}>{this.$slots.default}</section>
      </main>
    );
  },
};
