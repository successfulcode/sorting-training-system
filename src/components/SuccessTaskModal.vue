<template>
  <div :class="['modal', isModalActive && 'is-active']">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content ">
      <div class="modal-card-body ">
        <div>Task completed successfully!</div>
        <div>
          Your time is
          <span class="result">{{ taskExecutionTime }}</span>
          minutes
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'SuccessTaskModal',
  props: ['taskExecutionTime', 'closeSuccessTaskModal', 'isModalActive'],
  methods: {
    close() {
      this.$emit('closeSuccessTaskModal');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.modal-content {
  border-radius: 5px;
}
.modal-card-body {
  font-size: 1.5rem;
  font-weight: 700;
  color: $table-cell-heading-color;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  .result {
    color: $orange-color;
    font-size: 3rem;
  }
}
</style>
