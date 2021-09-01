<template>
  <div class="title">
    <span class="text">
      Sorting Training System
    </span>
    <span>
      <button class="start-button" @click="toggleModal">
        Start sorting!
      </button>
    </span>
  </div>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr class="table-header">
          <th class="border-right counter-label pr-6" colspan="5">
            20 people in the list
          </th>
        </tr>
        <tr class="table-header">
          <th class="border-right ml-1">Email</th>
          <th>Potatoes</th>
          <th>Tags</th>
          <th>Full name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody v-for="item of emails" :key="item.email">
        <sorting-list-cell :email="item.email"></sorting-list-cell>
      </tbody>
      <tfoot class="foot">
        <tr>
          <th colspan="5"></th>
        </tr>
      </tfoot>
    </table>
  </div>
  <teleport to="body">
    <sorting-list-modal
      @toggleShowModal="toggleModal"
      :isModalActive="isModalOpen"
      @startSort="startSort"
    ></sorting-list-modal>
  </teleport>
</template>

<script>
import emailsData from '@/data/emails.json';
import SortingListCell from '@/components/SortingListCell.vue';
import SortingListModal from '@/components/SortingListModal.vue';

export default {
  name: 'SortingList',
  components: { SortingListCell, SortingListModal },
  data() {
    return {
      emails: emailsData,
      isModalOpen: false
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    startSort(numberOfPeople) {
      console.log('startSort', numberOfPeople);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.title {
  padding: 3rem 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  max-width: 71.125rem;
  margin: auto;
  .start-button {
    background-color: $orange-color;
    color: #ffffff;
    font-size: 0.938rem;
    font-weight: 700;
    padding: 0.938rem;
    border-radius: 5px;
    border: none;
    width: 10.063rem;
    height: 3.125rem;
    cursor: pointer;
  }
  .start-button:hover {
    background-color: #f36614;
    transition: ease-out 0.6s;
    color: #f3dec4;
  }
  .text {
    color: $table-cell-heading-color;
    font-weight: 700;
    font-size: 2rem;
  }
}
.table-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.table {
  border: 1px solid $border-color;
  border-collapse: separate;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.101972);
  max-width: 71.125rem;
  width: 100%;
  font-size: 0.875rem;
  border-radius: 5px;
  .border-right {
    border-right: 1px solid $border-color;
  }
  th {
    height: 3rem;
    vertical-align: middle;
  }
  .counter-label {
    text-align: right;
    color: $table-cell-heading-color;
    height: 4.438rem;
    font-weight: 700;
  }
  .foot {
    height: 81px;
  }
}
</style>
