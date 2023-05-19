<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import {ref} from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">
    <img :class="['sidebar-arrow', {active_arrow: !isOpenMenu}]" src="@/assets/images/right.png" alt="">
    </div>
    <layout-header />
    <layout-sidebar :openSidebar="isOpenMenu"/>
    <div :class="['content', {content_full: !isOpenMenu}]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/global.scss";

.content {
  max-width: 1400px;
  margin-left: 270px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 20px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-arrow {
  transition: 0.2s;
  user-select: none;
}

.active_arrow {
  transform: rotate(180deg);
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
