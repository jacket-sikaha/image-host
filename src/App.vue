<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isShowLoginPage = ref(true)
// watch
// 第一个参数是侦听器的源。这个来源可以是以下几种：
// 一个函数，返回一个值
// 一个 ref
// 一个响应式对象
// 第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值
watch(
  () => route.name,
  (a, b) => (isShowLoginPage.value = a.includes('login') ? false : true)
)
</script>

<template>
  <div class="common-layout">
    <el-container v-if="isShowLoginPage">
      <el-aside width="10rem">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <RouterLink to="/upload">
            <el-menu-item index="1">
              <el-icon><icon-menu /></el-icon>
              <span>上传文件</span>
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/">
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon> <span>文件列表</span>
            </el-menu-item>
          </RouterLink>
        </el-menu>
      </el-aside>
      <el-main width="100%"><RouterView></RouterView></el-main>
    </el-container>
    <RouterView v-else></RouterView>
  </div>
</template>

<style scoped>
.common-layout {
  margin: 0 auto;
  height: 100vh;
  width: 98vw;
}
.el-menu-vertical-demo span {
  font-size: 1rem;
}
.el-menu-vertical-demo a {
  text-decoration: none;
}
</style>
