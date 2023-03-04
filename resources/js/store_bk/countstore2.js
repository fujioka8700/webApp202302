import { reactive } from "vue";

export const counter = reactive({
  count: 0,
  addCount() {
    this.count++;
  },
});
