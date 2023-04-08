<template>
  <el-row>
    <el-col v-for="(o, index) in 2" :key="o" :span="7" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <el-image
          class="image"
          style="width: 16rem; height: 16rem"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          fit="scale-down"
          :preview-src-list="srcList"
        />
        <div style="padding: 1rem">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]
const currentDate = ref(new Date())
onMounted(() => {})
</script>

<style scoped>
.time {
  font-size: 0.8rem;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  margin: 0 auto;
  display: block;
}
</style>
