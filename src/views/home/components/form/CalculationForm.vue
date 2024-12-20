<script setup lang="ts">
import { ref } from 'vue'
import type { FormData } from '../../types'

const formData = ref<FormData>({
  name1: '',
  gender1: 'male',
  name2: '',
  gender2: 'female',
})

const emit = defineEmits<{
  submit: [formData: FormData]
}>()

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<template>
  <div class="calculation-form">
    <div class="form-group">
      <div class="input-group">
        <input
          v-model="formData.name1"
          type="text"
          class="name-input"
          placeholder="输入第一个人的姓名"
        />
        <select v-model="formData.gender1" class="gender-select">
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </div>
      <div class="input-group">
        <input
          v-model="formData.name2"
          type="text"
          class="name-input"
          placeholder="输入第二个人的姓名"
        />
        <select v-model="formData.gender2" class="gender-select">
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </div>
    </div>
    <button class="submit-button" @click="handleSubmit">
      开始配对
      <span class="icon" aria-hidden="true">💘</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.calculation-form {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: var(--spacing-8);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
}

.input-group {
  display: flex;
  gap: var(--spacing-2);
}

.name-input {
  flex: 1;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  color: var(--text-primary);
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-base);
  transition: all var(--transition-fast) var(--ease-out);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
}

.gender-select {
  width: 80px;
  padding: var(--spacing-3) var(--spacing-2);
  font-size: var(--font-size-base);
  color: var(--text-primary);
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: all var(--transition-fast) var(--ease-out);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
  }
}

.submit-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: white;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: var(--radius-base);
  transition: all var(--transition-fast) var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  .icon {
    font-size: 1.2em;
  }
}

@media (max-width: 768px) {
  .calculation-form {
    padding: var(--spacing-4);
  }

  .name-input,
  .gender-select {
    padding: var(--spacing-2) var(--spacing-3);
    font-size: var(--font-size-sm);
  }

  .submit-button {
    padding: var(--spacing-3);
    font-size: var(--font-size-base);
  }
}
</style>
