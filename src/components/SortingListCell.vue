<template>
  <tr :class="[marked && 'marked-background-color']">
    <th class="border-right th1">
      <span class="email-items">
        <span class="email-checkbox-span">
          <span>
            <label label="label"> </label>
            <input
              type="checkbox"
              class="checkbox"
              @click="changeMarkerHandler"
            />
          </span>
          <span class="pl-4">
            {{ person.element.email }}
          </span>
        </span>
        <span>
          <font-awesome-icon :icon="['fa', 'chevron-right']" class="chevron" />
        </span>
      </span>
    </th>
    <th class="th">{{ person.element.potatoesCount }}</th>
    <th class="th">
      <span class="tag">
        Customers
      </span>
    </th>
    <th class="th">{{ person.element.name }}</th>
    <th class="th">{{ person.element.country }}</th>
    <th class="th">{{ person.element.date }}</th>
  </tr>
</template>

<script>
export default {
  name: 'SortingListCell',
  props: ['person'],
  data() {
    return {
      marked: false
    };
  },
  methods: {
    changeMarkerHandler() {
      this.marked = !this.marked;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.border-right {
  border-right: 1px solid $border-color;
}
.th1 {
  height: 3rem;
  width: 18.688rem;
  vertical-align: middle;
  cursor: move;
}
.th {
  height: 3rem;
  vertical-align: middle;
  cursor: move;
}
.tag {
  background-color: #eeeeee;
  border-radius: 1rem;
  text-align: center;
  padding: 0.5rem;
  color: #555555;
  font-size: 0.813rem;
}
.email-items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.188rem;
  padding-right: 0.188rem;
}
.chevron {
  color: #999999;
}
.checkbox {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: $table-head-background-color;
  box-sizing: border-box;
  border: 1px solid $border-color;
}
.checkbox:after {
  font-family: 'Font Awesome 5 free';
  display: none;
  background-size: 100%;
  content: url('../assets/checked3.svg');
  width: 1.25rem;
  height: 1.25rem;
  padding-left: 2px;
  padding-bottom: 2px;
}
.checkbox:checked {
  background-color: $orange-color;
}
.checkbox:checked::after {
  display: block;
}
.email-checkbox-span {
  display: flex;
  justify-content: center;
}
.marked-background-color {
  background-color: #f5f5f5;
}
</style>
