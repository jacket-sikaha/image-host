<template>
  <el-upload
    class="upload-demo"
    drag
    action="http://localhost:3001/upload"
    multiple
    :before-upload="beforeAvatarUpload"
    name="files"
    :on-success="uploadSuccess"
    :on-error="uploadError"
    ref="upload"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <template #tip>
      <div class="el-upload__tip">files with a size less than 20MB</div>
    </template>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
// 在 upload 组件中添加 ref 属性，用于获取组件实例。
const upload = ref()
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 20) {
    ElMessage.error('Avatar picture size can not exceed 20MB!')
    return false
  }
  return true
}
const uploadSuccess = (response, uploadFile, uploadFiles) => {
  // console.log(response, uploadFile, uploadFiles)
  // 上传成功后清空文件列表
  upload.value.clearFiles()
  ElMessage.success('上传成功!')
}
const uploadError = (error, uploadFile, uploadFiles) => {
  ElMessage.error(error.message)
}
</script>

<style scoped>
.upload-demo {
  width: 26rem;
  margin: 6rem auto;
}
</style>
