<template>
  <component :is="componentId" v-bind="$attrs" v-on="$listeners">
    <template v-for="(_, slot) in $slots" #[slot]>
      <slot :name="slot">{{ slot }}</slot>
    </template>
  </component>
</template>

<script>
export default {
  name: "TcComponent",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    componentId() {
      if (!this.name) {
        return "";
      }
      let prefix = "Tc";
      let name = this.name[0].toUpperCase() + this.name.substring(1);
      console.log(prefix + name);
      return prefix + name;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
