<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="first">
        <img src="../assets/FooterLogo.png" alt="" />
      </div>
      <div class="second">
        <h3>Etosha App</h3>
        <p>
          Termite Software <br />
          Address
        </p>
      </div>
      <div class="third">
        <h3>Support</h3>
        <p style="cursor: pointer" @click="contactUs">Contact Us</p>
      </div>
    </div>
    <div class="store">
      <img @click="preRelease" src="../assets/appleStore.png" alt="" />
      <img @click="preRelease" src="../assets/googleStore.png" alt="" />
    </div>
    <div class="copyright">Copyright © 2021 Termite Software</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
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
.footer {
  display: flex;
  justify-content: space-around;
//   align-items: center;
  margin: 20px 0px;
}
.footer-wrapper {
  position: relative;
  bottom: 0;
  //   border-top: 1px solid gray;
  border-top-right-radius: 50px;
  box-shadow: 0 2px 4px 1px;
  padding: 10px;
//   background: white;
}
.store {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  img {
    width: 210px;
    margin-left: 20px;
    cursor: pointer;
  }
}
.copyright {
  text-align: center;
  margin-top: 10px;
  color: gray;
}
.first {
  img {
    width: 100px;
    margin-top: 10%;
  }
}
.second {
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
}
.third {
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
}
@media (max-width: 764px) {
  .footer {
    flex-direction: column;
    // align-items: center;
    text-align: center;
  }
  .store {
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 10px;
    }
  }
  .copyright {
    margin-top: 10px;
  }
}
</style>
