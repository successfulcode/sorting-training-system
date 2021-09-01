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
          <th class="border-right counter-label pr-6" colspan="6">
            {{ elementsForSorting.length }} people in the list
          </th>
        </tr>
        <tr class="table-header">
          <th class="border-right ml-1">Email</th>
          <th>Potatoes</th>
          <th>Tags</th>
          <th>Full name</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <draggable
          v-model="elementsForSorting"
          tag="transition-group"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="email"
        >
          <template #item="element">
            <sorting-list-cell :person="element"></sorting-list-cell>
          </template>
        </draggable>
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
import SortingListCell from '@/components/SortingListCell.vue';
import SortingListModal from '@/components/SortingListModal.vue';
import draggable from 'vuedraggable';
import faker from 'faker';
import moment from 'moment';

const MAX_NUMBER_OF_POTATOES = 100;

export default {
  name: 'SortingList',
  components: {
    SortingListCell,
    SortingListModal,
    draggable
  },
  data() {
    return {
      elementsForSorting: [],
      isModalOpen: false,
      potatoes: Array.from({ length: MAX_NUMBER_OF_POTATOES }).map((_, i) => i),
      taskExecutionTime: ''
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    startSort(peopleListLength) {
      this.setElementsForSorting(peopleListLength);
      this.isModalOpen = false;
    },
    startTaskTime() {
      console.log('startTaskTime');
    },
    setRandomElementFromArray(arr) {
      const elementIntex = Math.floor(Math.random() * arr.length);
      return arr[elementIntex];
    },
    setElementsForSorting(peopleListLength = 40) {
      return (this.elementsForSorting = Array.from(
        { length: peopleListLength },
        () => ({
          email: faker.internet.email(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          country: faker.address.country(),
          date: moment(faker.date.past()).format('YYYY-MM-DD, HH:mm'),
          potatoesCount: this.setRandomElementFromArray(this.potatoes)
        })
      ));
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      };
    }
  },
  mounted() {
    this.setElementsForSorting();
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
