<template>
  <Navbar />
  <ContactForm />
  <GetProductUpdates />
  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import ContactForm from "src/subComponent/ContactForm.vue";
import GetProductUpdates from "src/subComponent/GetProductUpdates.vue";
import { useMeta } from "quasar";

let metaData = {
  // sets document title
  title: "Etosha | Contact Us",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title}`,
  // meta tags
  meta: {
    description: { name: "theme-color", content: "#cb945e" },
  },
};

export default {
  components: { Navbar, Footer, ContactForm, GetProductUpdates },
  setup() {
    useMeta(metaData);
  },
};
</script>

<style></style>
