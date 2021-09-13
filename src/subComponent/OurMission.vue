<template>
  <div class="our-mission">
    <h2>Our Mission</h2>
    <img src="../assets/missionGuest.png" alt="" />
    <q-card class="my-card">
      <q-card-section>
        <h3>
          Our aim is to establish a product which is benefitical for all three
          parties
        </h3>
        <ul>
          <li>Support Namibian software development</li>
          <li>Save our precious wildlife</li>
          <li>Your visiting Etosha</li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.our-mission {
  display: flex;
  flex-direction: column;
  // max-width: 500px;
  margin-top: 200px;
  margin-bottom: 200px;
  h2 {
    margin-top: 30px;
    text-align: center;
    color: white;
  }
  li {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
  }
  img {
    max-width: 500px;
    margin: 50px auto;
  }
}
.my-card {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: #cb945e;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
}
.our-mission {
  height: 100vh;
  background-image: url("../assets/missionBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 1366px) {
  .our-mission {
    display: flex;
    flex-direction: column;
    // max-width: 500px;
    margin-top: 200px;
    margin-bottom: 200px;
    height: 120vh !important;
    h2 {
      margin-top: 30px;
      text-align: center;
      color: white;
    }
    li {
      margin-top: 20px;
      margin-left: 20px;
      font-size: 16px;
    }
    img {
      max-width: 500px;
      margin: 50px auto;
    }
  }
  .my-card {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #cb945e;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    h3 {
      font-size: 20px;
    }
  }
  .our-mission {
    height: 100vh;
    background-image: url("../assets/missionBg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

@media (max-width: 768px) {
  .our-mission {
    height: 120vh;
    img {
      max-width: 300px;
    }
    h2 {
      // font-size: 10px;
      color: white;
    }
    li {
      font-size: 16px;
    }
  }
  .my-card {
    max-width: 300px;
    h3 {
      font-size: 20px;
    }
  }
}
</style>
