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

  <!-- mammal guide -->
  <div class="mammal-guide">
    <div class="mammal-first">
      <img src="../assets/mammalGuide.png" alt="" />
    </div>
    <div class="mammal-second">
      <h3>Mammal Guide</h3>
      <p> <strong> Etosha specific information </strong>of all mammals found in the Etosha.</p>
    </div>
  </div>

  <!-- etosha map -->
  <div class="etosha-map">
    <div class="etosha-second">
      <h3>Etosha Map</h3>
      <p>Detailed <strong> offline map </strong> of the complete Etosha National Park.</p>
    </div>
    <div class="etosha-first">
      <img src="../assets/etoshaMap.png" alt="" />
    </div>
  </div>

  <!-- insider tips -->
  <div class="insider-tips">
    <div class="insider-first">
      <img src="../assets/insiderTips.png" alt="" />
    </div>
    <div class="insider-second">
      <h3>Insider Tips</h3>
      <p>Etosha specific information to all mammals found in the Etosha.</p>
    </div>
  </div>
  <OurMission />
  <Footer />
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import OurMission from "../subComponent/OurMission.vue";
import { useRouter } from "vue-router";
import { useMeta } from 'quasar'

let metaData = {
  // sets document title
  title: 'Etosha | Home',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title}`,
  // meta tags
  meta: {
    description: { name: 'theme-color', content: '#cb945e'}
  }
}

export default {
  components: { Navbar, Footer, OurMission },
  setup() {
    useMeta(metaData)
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

// mammal-guide
.mammal-guide {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .mammal-first {
    img {
      max-width: 550px;
    }
  }
  .mammal-second {
    p {
      color: gray;
      font-size: 16px;
      margin-top: 5px;
    }
  }
}
// etosha-map
.etosha-map {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .etosha-first {
    img {
      max-width: 550px;
    }
  }
  .etosha-second {
    p {
      color: gray;
      font-size: 16px;
      margin-top: 5px;

    }
  }
}

// insider-tips
.insider-tips {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .insider-first {
    img {
      max-width: 550px;
    }
  }
  .insider-second {
    p {
      color: gray;
      font-size: 16px;
      margin-top: 5px;

    }
  }
}

strong{
  font-weight: bold;
  color: black;
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

  // mammal-guide
  .mammal-guide {
    flex-direction: column-reverse;
    .mammal-first {
      img {
        max-width: 300px;
      }
    }
    .mammal-second {
      padding: 20px;
      margin-left: 3%;
      h3 {
        font-size: 30px;
      }
    }
  }
  // etosha-map
  .etosha-map {
    flex-direction: column;
    .etosha-first {
      img {
        max-width: 300px;
      }
    }
    .etosha-second {
      padding: 20px;
      margin-left: 3%;
      h3 {
        font-size: 30px;
      }
    }
  }

  // insider-tips
  .insider-tips {
    flex-direction: column-reverse;
    .insider-first {
      img {
        max-width: 300px;
      }
    }
    .insider-second {
      padding: 20px;
      margin-left: 3%;
      h3 {
        font-size: 30px;
      }
    }
  }
}
</style>
