<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import type { Idefault } from "~/types/default";
export default defineComponent({
  name: "OrganismsModal",
  props: {
    typeTag: {
      type: String,
      default: "filter",
    },
  },
  setup() {
    const isVisible = ref(false);

    const showModal = () => {
      isVisible.value = !isVisible.value;
    };

    const itemValues = ref<Idefault>({
      email: "devpedrohr@gmail.com",
      age: "17",
      obs: "Dev",
    });

    const items = computed(() => [
      {
        type: "text",
        text: "Email",
        value: itemValues.value.email,
      },
      {
        type: "number",
        text: "Age",
        value: itemValues.value.age,
      },
      {
        type: "text",
        text: "Obs",
        value: itemValues.value.obs,
      },
    ]);

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
      if (!selectedTags.value.includes(selectedTag)) {
        selectedTags.value.push(selectedTag);
      }
      return [];
    };

    const removeTag = (tag: string) => {
      selectedTags.value = selectedTags.value.filter((t: string) => t !== tag);
    };

    const validate = () => {
      return Object.values(itemValues.value).every((value) => value);
    };
    const save = () => {
      if (validate() && selectedTags.value.length > 0) {
        console.log("respostas:", itemValues.value, selectedTags.value);
      } else {
        alert("Todos os campos devem ser preenchidos.");
      }
    };

    const clearTag = () => {
      selectedTags.value = [];
    };

    const updateItemValue = (index: number, value: string) => {
      const keys = Object.keys(itemValues.value) as (keyof Idefault)[];
      itemValues.value[keys[index]] = value;
    };

    return {
      isVisible,
      showModal,
      items,
      multipleTags,
      selectedTags,
      addTag,
      removeTag,
      save,
      clearTag,
      updateItemValue,
    };
  },
});
</script>
<template>
  <div class="section">
    <div v-if="!isVisible" class="icon-active">
      <AtomsIconSVG name="rocket-lunch" @click="showModal" />
    </div>
    <aside v-if="isVisible" class="modal-content">
      <div class="modal-content__title">
        <div class="icon">
          <AtomsIconSVG name="rocket-lunch" @click="showModal" />
        </div>
        <AtomsParagraphTitle
          size="medium"
          text="Profile modal"
          types="primary"
        />
      </div>
      <section class="modal-content__section">
        <AtomsInput
          v-for="(item, index) in items"
          class="input"
          :key="index"
          :type="item.type"
          :placeholder="item.text"
          :value="item.value"
          @onInput="updateItemValue(index, $event.target.value)"
        />
      </section>
      <div class="modal-content__select">
        <select class="select-tag" @click="addTag">
          <option class="select-options" value="" disabled selected>
            <AtomsParagraphTitle
              size="medium"
              types="primary"
              text="Select a tag"
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
      <article class="modal-content__button">
        <moleculesButton size="primary" text="Save" @Onclick="save" />
        <moleculesButton
          size="small"
          type="cancel"
          text="Cancel"
          @Onclick="clearTag"
        />
      </article>
    </aside>
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
