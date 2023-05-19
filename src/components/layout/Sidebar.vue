<script setup>
import { ref } from "vue";
const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
]);

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<style lang="scss" scoped>

.sidebar {
  left: 20px;
  top: 62px;
  height: 100%;
  background: white;
  position: fixed;
  width: 250px;
  padding: 30px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-100%);

  &.sidebar_isopen {
    transform: translateX(0);
  }

  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--primary);
    &.active {
      color: var(--primary-hover);
      cursor: default;
    }
  }
}
</style>