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
    const itemValues = ref<Idefault>({
      email: "",
      age: 0,
      obs: "",
    });

    const items = computed(() => [
      {
        key: "email",
        type: "text",
        text: "Email",
        value: itemValues.value.email,
      },
      {
        key: "age",
        type: "number",
        text: "Age",
        value: itemValues.value.age,
      },
      {
        key: "obs",
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
      const { email, age, obs } = itemValues.value;
      return email.trim() !== "" && age > 0 && obs.trim() !== "";
    };

    const save = () => {
      if (validate()) {
        console.log("respostas:", itemValues.value, selectedTags.value);
      } else {
        alert("Todos os campos devem ser preenchidos.");
      }
    };

    const clearTag = () => {
      selectedTags.value = [];
    };

    const updateValue = (event: InputEvent, field: keyof Idefault) => {
      if (itemValues.value) {
        if (field === "age") {
          itemValues.value.age = Number(
            (event.target as HTMLInputElement).value,
          );
        } else {
          itemValues.value[field] = (event.target as HTMLInputElement).value;
        }
      }
    };

    return {
      items,
      multipleTags,
      selectedTags,
      addTag,
      removeTag,
      save,
      clearTag,
      updateValue,
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
      <AtomsParagraphTitle size="medium" text="Profile modal" types="primary" />
    </div>
    <section class="modal-content__section">
      <AtomsInput
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :placeholder="item.text"
        :value="item.value"
        @input="($event) => updateValue($event, item.key)"
      />
    </section>
    <div class="modal-content__select">
      <select class="select-tag" @click="addTag">
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
    <article class="modal-content__button">
      <moleculesButton
        size="primary"
        type="default"
        text="Save"
        @Onclick="save"
      />
      <moleculesButton size="small" text="Cancel" @Onclick="clearTag" />
    </article>
  </aside>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
