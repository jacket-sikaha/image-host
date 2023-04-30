<template>
  <div class="grid">
    <div v-for="(item, index) in fileList" :key="item.id" class="grid-item">
      <el-card :body-style="{ width: '16rem', height: '16rem' }">
        <el-image
          class="image"
          style="width: 8rem; height: 8rem"
          :src="item.url"
          fit="scale-down"
          :preview-src-list="[item.url]"
        />
        <div style="padding: 1rem 0; font: 1rem sans-serif">
          <span style="text-overflow: ellipsis">{{ item.originalname }}</span>
          <div class="bottom">
            <time class="time">文件大小：{{ item.formatSize }}</time>
            <el-button type="success" class="button" @click="() => copyUrl(item.url)"
              >COPY URL</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import requests from '../utils/request'
const apiUrl = import.meta.env.VITE_API_BASE_URL
const downloadURL = import.meta.env.VITE_API_DOWNLOAD_URL
const fileList = ref([])
const copyUrl = (url) => {
  const textarea = document.createElement('textarea')
  document.body.appendChild(textarea)
  textarea.setAttribute('readonly', 'readonly')
  textarea.value = url
  textarea.setSelectionRange(0, 9999)
  textarea.select()
  if (document.execCommand('copy')) {
    ElMessage.success('复制成功!')
  }
  document.body.removeChild(textarea)
}
onMounted(async () => {
  const { data } = await requests.post('allFiles')
  fileList.value = data.map((obj) => {
    obj.url = apiUrl + '/files/' + obj.filename
    // obj.url = downloadURL + '/files/' + obj.filename
    let originSize = obj.size
    obj.formatSize =
      originSize / 1024 > 1024
        ? (originSize / 1024 / 1024).toFixed(2) + 'MB'
        : (originSize / 1024).toFixed(2) + 'KB'
    return obj
  })
})
</script>

<style scoped>
.grid {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /*  自适应自填充 */
  /* 表示列宽至少 200px，如果还有空余则一起等分。 */
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  row-gap: 1rem;
  grid-auto-flow: row;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.time {
  font-size: 0.8rem;
  color: #999;
}

.bottom {
  margin-top: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  margin-top: 1rem;
  padding: 1rem;
  min-height: auto;
}

.image {
  width: 100%;
  margin: 0 auto;
  display: block;
}
</style>
