<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "AtomsSwitch",
  emits: ["onSwitch"],
  props: {
    backgroundOff: {
      type: String,
      default: "red",
    },
    backgroundOn: {
      type: String,
      default: "green",
    },
  },
  setup(props, { emit }) {
    const isOn = ref(false);

    const toggleSwitch = () => {
      isOn.value = !isOn.value;
      emit("onSwitch", isOn.value);
    };

    const cssVar = computed(() => {
      return {
        "--background-off": props.backgroundOff,
        "--background-on": props.backgroundOn,
      };
    });

    return {
      isOn,
      toggleSwitch,
      cssVar,
    };
  },
});
</script>
<template>
  <section>
    <div class="border-circle" :class="{ 'border-circle--on': isOn }">
      <div
        :style="cssVar"
        class="border-circle__before-after"
        :class="{ 'border-circle__on': isOn }"
        @click="toggleSwitch"
      ></div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
