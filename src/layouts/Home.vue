<template>
  <Navbar />
  <div class="front-page">
    <div class="contents">
      <div class="first">
        <h1>Etosha App</h1>
        <h6>Your digital Etosha guide</h6>
        <div class="store">
          <img @click="preRelease" src="../assets/appleStore.png" alt="" />
          <img
            class="gimg"
            @click="preRelease"
            src="../assets/googleStore.png"
            alt=""
          />
        </div>
      </div>
      <div class="third">
        <img src="../assets/phone.png" alt="" />
      </div>
    </div>
    <!-- <div class="fourth"> -->
    <q-card class="my-card fourth">
      <q-card-section>
        <p>Every app purchase supports a local animal welfare program!</p>
      </q-card-section>
    </q-card>
    <!-- </div> -->
  </div>

  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <h1>Home</h1>
  <OurMission/>
  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import OurMission from "../subComponent/OurMission.vue";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, Footer, OurMission },
  setup() {
    const router = useRouter();
    const preRelease = () => {
      router.push({ name: "Prerelease" });
    };

    const contactUs = () => {
      router.push({ name: "ContactUs" });
    };
    return { preRelease, contactUs };
  },
};
</script>

<style lang="scss" scoped>
.front-page {
  height: 120vh;
  background-image: url("../assets/frontBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.contents {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.third {
  img {
    height: 500px;
    margin-top: 20%;
  }
}
.store {
  display: flex;
  margin: 20px 0px;
  img {
    width: 210px;
    cursor: pointer;
  }
  .gimg {
    margin-left: 20px;
  }
}
.first {
  h1 {
    color: white;
    font-weight: 700;
  }
  h6 {
    color: white;
    font-weight: 500px;
  }
}

.fourth {
  width: 500px;
  background: #cb945e;
  border: 2px solid white;
  border-radius: 10px;
  margin: auto;
  p {
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 300;
  }
}

@media (max-width: 768px) {
  .contents {
    flex-direction: column;
    text-align: center;
  }
  .store {
    flex-direction: column;
    align-items: center;
    .gimg {
      margin-left: 0;
    }
    img {
      margin: 10px 0;
    }
  }
  .third {
    img {
      height: 350px;
      margin-top: 5%;
    }
  }
  .first {
    h1 {
      color: white;
      font-size: 70px;
      font-weight: 700;
    }
    h6 {
      color: white;
      font-weight: 500px;
    }
  }
  .fourth {
    width: 300px;
    p {
      text-align: center;
      color: white;
      font-size: 17px;
    }
  }
}
</style>
