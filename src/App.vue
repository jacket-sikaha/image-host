<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="14rem">
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
      <el-main><RouterView /></el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  margin: 0 auto;
  padding: 1rem;
  height: 100vh;
  width: 86vw;
}
.el-menu-vertical-demo span {
  font-size: 1rem;
}
.el-menu-vertical-demo a {
  text-decoration: none;
}
</style>
