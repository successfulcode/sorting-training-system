<template>
  <div
    :class="['modal', isModalActive && 'is-active']"
    @toggleShowModal="toggleModal"
  >
    <div class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">How many people?</p>
        <span @click="toggleModal">
          <font-awesome-icon :icon="['fa', 'times']" class="times" />
        </span>
      </header>
      <section class="modal-card-body">
        <div class="body-text">
          Enter a number of how many people you want to add to the list.
        </div>
        <input
          :class="[
            'input',
            numberOfPeople < 20 && 'is-danger',
            numberOfPeople > 100 && 'is-danger'
          ]"
          type="number"
          placeholder=""
          v-model="numberOfPeople"
        />
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-cancel-btn"
          aria-label="close"
          @click="toggleModal"
        >
          Cancel
        </button>
        <button
          class="button is-start"
          aria-label="start"
          @click="startSortHandler"
          :disabled="
            (numberOfPeople < 20 && 'is-danger') ||
              (numberOfPeople > 100 && 'is-danger')
          "
        >
          Start
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingListModal',
  props: ['isModalActive'],
  emits: ['toggleShowModal', 'startSort'],
  data() {
    return {
      numberOfPeople: 20
    };
  },
  methods: {
    toggleModal() {
      this.$emit('toggleShowModal');
    },
    startSortHandler() {
      this.$emit('startSort', this.numberOfPeople);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.modal-background {
  cursor: pointer;
}
.times {
  font-size: 1.063rem;
  color: #999999;
  cursor: pointer;
}
.body-text {
  margin-bottom: 1rem;
}
.modal-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: $table-cell-heading-color;
}
.modal-card {
  height: 17.625rem;
  padding: 0.2rem;
}
.modal-card-body {
  color: $table-head-cell-color;
  font-size: 0.813rem;
}
.modal-card-foot {
  display: flex;
  justify-content: flex-end;
}
.is-cancel-btn {
  background-color: #eeeeee;
  color: $table-head-cell-color;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.938rem;
  border-radius: 5px;
  border: none;
  width: 4.875rem;
  height: 2.5rem;
  cursor: pointer;
}
.is-cancel-btn:hover {
  background-color: #0000004f;
  transition: ease-out 0.6s;
  color: #ffffff;
}
.is-start {
  background-color: $orange-color;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.938rem;
  border-radius: 5px;
  border: none;
  width: 4.875rem;
  height: 2.5rem;
  cursor: pointer;
}
.is-start:hover {
  background-color: #f36614;
  transition: ease-out 0.6s;
  color: #f3dec4;
}
.is-start:disabled {
  background-color: #f38a4d;
}
</style>
