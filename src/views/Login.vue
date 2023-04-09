<template>
  <div class="login">
    <h2>登录</h2>
    <el-form ref="formRef" :model="form" label-width="80px" class="form">
      <el-form-item
        label="账号"
        prop="username"
        :rules="[
          {
            required: true,
            message: 'Please input username'
          }
        ]"
      >
        <el-input v-model="form.username" placeholder="请输入账号" type="text"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[{ required: true, message: 'password is required' }]"
      >
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">登陆</el-button>
        <el-button @click="resetForm(formRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import requests from '../utils/request'
import { useRouter } from 'vue-router'
// 获取form表单数据
const form = ref({ username: '', password: '' })
// 绑定form的dom实例
const formRef = ref()
const router = useRouter()
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    console.log('valid', valid)
    if (valid) {
      const { data } = await requests.post('/login', form.value)
      let token = data.token
      console.log('token', token)
      localStorage.setItem('myWife-token', token)
      // requests.defaults.headers.common['Authorization'] = `Bearer ${token}`
      router.push({ path: '/' })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style>
.login {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
}
.form {
  max-width: 500px;
  margin: 0 auto;
}
.captcha {
  vertical-align: middle;
  margin-left: 10px;
  cursor: pointer;
}
</style>
