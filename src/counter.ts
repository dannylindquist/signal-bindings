import { define, on, show, text, signal, computed, clickAway } from "./lib/bind";

define('x-counter', ({ refs, el }) => {
  const { counter, reset, doubled } = refs;
  let count = signal(1);
  let doubledCount = computed(() => count.value*2);
  
  return [
    clickAway(el, () => count.value = 0),

    // counter button
    on(counter, "click", () => count.value < 10 && count.value++),
    text(counter, () => `count is: ${count.value}`),

    // doubled
    text(doubled, () => `doubled is: ${doubledCount.value}`),

    // reset button
    show(reset!, () => count.value === 10),
    on(reset, 'click', () => count.value = 0),
  ]
})
