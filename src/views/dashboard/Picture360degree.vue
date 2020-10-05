<template>
  <div>
  <div class="compass-template">
    <div class="red-center"></div>
    <img class="compass-show" src="@/assets/compass_360.png" alt="" height="100%">
    <div class="d-flex justify-center" :style="{'-webkit-transform': 'rotate('+slider+'deg)', 'transform': 'rotate('+slider+'deg)'}">
      <img class="arrow_compass" src="@/assets/arrow_compass_2.png" alt="" width="100px">
    </div>
  </div>
  <v-card-text>
    <v-row>
      <v-col class="pr-4">
        <v-slider
            v-model="slider"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
        >
          <template v-slot:append>
            <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </v-card-text>
  </div>
</template>
<style>
.compass-template {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  margin: auto;
}
.compass-show {
  position: absolute;
  -webkit-transform: rotate(180deg) translateX(-50%);
  transform: rotate(180deg) translateX(-50%);
  margin: auto;
  right: 50%;
  width: 100%;
  height: 500px;
}
.arrow_compass {
  margin: auto;
  height: 500px;
  transform: rotate(180deg);
}
.red-center {
  width: 8px;
  height: 8px;
  position: absolute;
  background-color: red;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
</style>
<script>
export default {
  name: 'Compass',
  data: () => {
    return {
      min: 0,
      max: 360,
      slider: 0
    }
  },
  methods: {
  },
  computed: {
    translateXValue () {
      return (360 - this.slider)
    }
  }

}
</script>
