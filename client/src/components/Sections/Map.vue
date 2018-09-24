<template lang="pug">
  section.map
    #map
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  #map {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    mapInit () {
      ymaps.ready(init)
      function init () {
        let myMap = new ymaps.Map('map', {
          center: [59.91817154482064, 30.30557799999997],
          zoom: 11,
          controls: []
        })

        let coords = [
          [59.91817154482064, 30.30557799999997],
          [59.84750106076538, 30.191999219237385],
          [59.83844406210693, 30.527648755425574],
          [59.94284375747323, 30.47220491572594]
        ]

        let myCollection = new ymaps.GeoObjectCollection({}, {
          draggable: false,
          iconLayout: 'default#image',
          iconImageHref: './static/img/icons/map-marker.svg',
          iconImageSize: [46, 57],
          iconImageOffset: [-26, -52]
        })

        for (let i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]))
        }

        myMap.geoObjects.add(myCollection)
        myMap.behaviors.disable('scrollZoom')
      }
    }
  },
  mounted () {
    this.mapInit()
  }
}
</script>
