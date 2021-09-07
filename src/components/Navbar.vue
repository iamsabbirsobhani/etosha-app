<template>
  <div class="navbar">
    <div class="logo-img">
      <img @click="goHome" src="../assets/logo.png" alt="" />
    </div>
    <div class="nav-button">
      <q-btn
        flat
        size="16px"
        :to="{ name: 'Home' }"
        class="text-white"
        no-caps
        label="Home"
      />
      <q-btn
        flat
        size="16px"
        :to="{ name: 'Features' }"
        class="text-white"
        no-caps
        label="Features"
      />
      <q-btn
        flat
        size="16px"
        :to="{ name: 'ContactUs' }"
        class="text-white"
        no-caps
        label="Contact Us"
      />
    </div>
  </div>

  <div class="mobile-navbar" :style="scrollStyle">
    <div class="mobile-logo">
      <img @click="goHome" src="../assets/logo.png" alt="" />
    </div>
    <div class="header-nav-mobile">
      <div
        @click="addNavCls"
        id="menu-toggle"
        :class="{ active: isTrue, open: isTrue }"
      >
        <div id="hamburger">
          <span :style="hamStyle"></span>
          <span :style="hamStyle"></span>
          <span :style="hamStyle"></span>
        </div>
        <div id="cross">
          <span :style="hamStyle"></span>
          <span :style="hamStyle"></span>
        </div>
      </div>
    </div>
  </div>

  <div id="myNav" :style="navStyle" class="overlay">
    <div class="overlay-content">
      <!-- <q-btn @click="scroll('twr')" :style="navBtn" label="Technology" flat /> -->
      <q-btn
        flat
        size="16px"
        :to="{ name: 'Home' }"
        class="text-black"
        no-caps
        label="Home"
      />
      <q-btn
        flat
        size="16px"
        :to="{ name: 'Features' }"
        class="text-black"
        no-caps
        label="Features"
      />
      <q-btn
        flat
        size="16px"
        :to="{ name: 'ContactUs' }"
        class="text-black"
        no-caps
        label="Contact Us"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const isTrue = ref(false);
    const navStyle = ref(false);
    const addNavCls = () => {
      isTrue.value = !isTrue.value;
      if (isTrue.value) {
        navStyle.value = {
          height: `100%`,
        };
      } else {
        navStyle.value = {
          height: `0%`,
        };
      }
    };
    const goHome = () => {
      router.push({ name: "Home" });
    }
    return { addNavCls, isTrue, navStyle, goHome };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 30px;
  background: #cb945e;
  box-shadow: 0.1px 0.1px 5px gray;
}

.q-btn {
  margin-left: 10px;
}

.logo-img {
  align-self: center;
  border-radius: 5px;
  img {
    width: 40px;
    cursor: pointer;
  }
}

.nav-button {
  display: flex;
  height: 40px;
}

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  // background: black;
  background: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
/* Position the content inside the overlay */
.overlay-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 10%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}
/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 30px;
  color: #000000;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}
/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #888888;
}
/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.mobile-navbar {
  display: none;
}
@media (max-width: 768px) {
  .q-btn {
    width: 250px;
    height: 50px;
    margin: 5px;
    align-self: center;
  }
  .navbar {
    display: none;
  }
  .mobile-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    // position: fixed;
    top: 0;
    z-index: 40;
    // background: transparent;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    box-shadow: none;
    transition: 0.2s all;
    background: #cb945e;
    box-shadow: 0.1px 0.1px 5px gray;
  }
  .mobile-logo {
    img {
      max-width: 40px;
    }
  }
  #cross {
    position: absolute;
    height: 24px;
    width: 24px;
    transform: rotate(45deg);
  }
  #hamburger {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  #menu-toggle {
    width: 24px;
    height: 24px;
    margin: 0;
    position: relative;
    cursor: pointer;
    border-radius: 0;
    z-index: 30;
  }
  .header-nav {
    display: none;
  }
  .header-nav-mobile {
    display: block;
    z-index: 20;
    padding: 10px;
  }
  .header-nav-mobile .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header-nav-mobile .hamburger:hover {
    cursor: pointer;
  }
  .header-nav-mobile .hamburger span {
    width: 24px;
    height: 2px;
    background: #0c2722;
    margin: 2px 0;
  }
  * {
    transition: 0.25s ease-in-out;
    box-sizing: border-box;
  }
  #menu-toggle span {
    display: block;
    background: #0c2722;
    // background: white;
    border-radius: 2px;
  }
  #overlay .deco-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  #overlay .deco-bg img {
    width: 100%;
  }
  #menu-toggle {
    width: 24px;
    height: 24px;
    margin: 0;
    position: relative;
    cursor: pointer;
    border-radius: 0;
  }
  #menu-toggle:hover {
    background: transparent;
  }
  #hamburger {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  #hamburger span {
    width: 24px;
    height: 2px;
    position: relative;
    top: 0px;
    left: 0;
    margin: 4px 0;
  }
  #hamburger span:nth-child(1) {
    transition-delay: 0.5s;
  }
  #hamburger span:nth-child(2) {
    transition-delay: 0.625s;
  }
  #hamburger span:nth-child(3) {
    transition-delay: 0.75s;
  }
  #cross {
    position: absolute;
    height: 24px;
    width: 24px;
    transform: rotate(45deg);
  }
  #cross span:nth-child(1) {
    height: 0%;
    width: 2px;
    position: absolute;
    transition-delay: 0s;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  #cross span:nth-child(2) {
    width: 0%;
    height: 2px;
    position: absolute;
    transition-delay: 0.25s;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  #menu-toggle.open #hamburger span {
    width: 0%;
  }
  #menu-toggle.open #hamburger span:nth-child(1) {
    transition-delay: 0s;
  }
  #menu-toggle.open #hamburger span:nth-child(2) {
    transition-delay: 0.125s;
  }
  #menu-toggle.open #hamburger span:nth-child(3) {
    transition-delay: 0.25s;
  }
  #menu-toggle.open #cross span:nth-child(1) {
    height: 100%;
    transition-delay: 0.625s;
  }
  #menu-toggle.open #cross span:nth-child(2) {
    width: 100%;
    transition-delay: 0.375s;
  }
}
</style>
