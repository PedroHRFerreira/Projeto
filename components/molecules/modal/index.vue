<script lang="ts">
import { defineComponent, computed, ref } from "vue";
export default defineComponent({
  name: "MoleculesModal",
  props: {
    typeTag: {
      type: String,
      default: "filter",
    },
  },
  setup() {
    const items = computed(() => {
      return [
        {
          type: "text",
          text: "input text 1",
          value: null,
        },
        {
          type: "number",
          text: "input text 2",
          value: null,
        },
        {
          type: "text",
          text: "input text 3",
          value: null,
        },
      ];
    });

    const multipleTags = computed(() => {
      return [
        {
          textTag: "test_!1",
          typeTag: "filter",
        },
        {
          textTag: "test_!2",
          typeTag: "filter",
        },
        {
          textTag: "test_!3",
          typeTag: "filter",
        },
        {
          textTag: "test_!4",
          typeTag: "filter",
        },
        {
          textTag: "test_!5",
          typeTag: "filter",
        },
        {
          textTag: "test_!6",
          typeTag: "filter",
        },
      ];
    });

    const selectedTags: any = ref([]);

    const addTag = (event: any) => {
      const selectedTag = event.target.value;
      if (selectedTags.value.includes(selectedTag)) {
        return [];
      }
      selectedTags.value.push(selectedTag);
    };

    const removeTag = (tag: string) => {
      selectedTags.value = selectedTags.value.filter((t: string) => t !== tag);
    };

    return {
      items,
      multipleTags,
      selectedTags,
      addTag,
      removeTag,
    };
  },
});
</script>
<template>
  <aside class="modal-content">
    <div class="modal-content__title">
      <div class="icon">
        <AtomsIconSVG name="rocket-lunch" />
      </div>
      <AtomsParagraphTitle
        size="medium"
        text="Title in modal"
        types="primary"
      />
    </div>
    <section class="modal-content__section">
      <AtomsInput
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :placeholder="item.text"
        :value="item.value"
      />
    </section>
    <div class="modal-content__select">
      <select class="select-tag" @change="addTag">
        <option value="" disabled selected>
          <AtomsParagraphTitle
            size="medium"
            text="Select a tag"
            types="primary"
          />
        </option>
        <option
          v-for="(tag, index) in multipleTags"
          :key="index"
          :value="tag.textTag"
        >
          {{ tag.textTag }}
        </option>
      </select>
    </div>
    <div class="modal-content__tag">
      <AtomsTag
        v-for="(tag, index) in selectedTags"
        :key="index"
        :text="tag"
        :type="typeTag"
        class="tag-content"
        @onClose="removeTag"
      />
    </div>
    <article></article>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
