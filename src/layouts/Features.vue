<template>
  <Navbar />
  <MammalGuide />
  <YourSight />
  <EtoshaMap />
  <UsefulInfo />
  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import MammalGuide from "src/subComponent/MammalGuide.vue";
import YourSight from "src/subComponent/YourSight.vue";
import EtoshaMap from "src/subComponent/EtoshaMap.vue";
import UsefulInfo from "src/subComponent/UsefulInfo.vue";
import { useMeta } from 'quasar'

let metaData = {
  // sets document title
  title: "Etosha | Features",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title}`,
  // meta tags
  meta: {
    description: { name: "theme-color", content: "#cb945e" },
  },
};
export default {
  components: { Navbar, Footer, MammalGuide, YourSight, EtoshaMap, UsefulInfo },
  setup() {
    useMeta(metaData)
  }
};
</script>
