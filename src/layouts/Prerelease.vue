<template>
  <Navbar />
  <div class="prerelease">
    <q-card class="my-card">
      <q-card-section>
        <h4>Sorry, We have not launched yet</h4>
        <p>Subscribe and be informed as soon as a release is out</p>
      </q-card-section>
      <q-card-section>
        <form>
          <div class="input-wrapper">
            <input type="email" placeholder="Email" name="name" required />
            <button>Subscribe</button>
          </div>
        </form>
      </q-card-section>
    </q-card>
  </div>

  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import { useMeta } from 'quasar'

let metaData = {
  // sets document title
  title: 'Etosha | Pre-release',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title}`,
  // meta tags
  meta: {
    description: { name: 'theme-color', content: '#cb945e'}
  }
}
export default {
  components: { Navbar, Footer },
  setup(){
    useMeta(metaData)
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  max-width: 600px;
  margin: 50px auto;
  h4{
    text-align: center;
  }
  p{
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin-top: 20px;
  }
}
form {
  margin: auto;
  text-align: center;
}
input {
  // display: flex;
  // flex-direction: column;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid #e9b37c;
  outline: none;
  margin-top: 20px;
  transition: all 0.3s;
  font-family: "Poppins";
}
input:hover {
  box-shadow: 1px 1px 10px 0.5px white;
}
button {
  // margin-left: 10px;
  border-radius: 3px;
  width: 300px;
  height: 50px;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #cb945e;
  transition: all cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;
  margin-top: 20px;
}
button:hover {
  background-color: #e9b37c;
  color: white;
  box-shadow: 0.1px 0px 20px 0.01px #e9b37c;
  transform: scale(1.02);
}
button:focus {
  background-color: #ffd8b1;
}

@media (max-width: 768px) {
  button {
    margin-left: unset;
  }
  .product-update {
    height: 400px;
  }
}
</style>
