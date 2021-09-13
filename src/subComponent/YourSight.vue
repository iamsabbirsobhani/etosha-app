<template>
  <div class="your-sight">
    <h3>Your Sightings</h3>
    <div class="sight">
      <div class="sight-first">
        <img src="../assets/features/sightings.png" alt="" />
      </div>
      <div class="sight-second">
        <p>
          Fill your own collection album with your sights that you have seen!
          Color up your Etosha trip
        </p>
        <q-card class="my-card">
          <q-card-section>
            <p class="text-h5">Planed feature extension</p>
            <p>
              Soon we are planing to sync the sights of all users so that you do
              not miss it if the car behind you just spotted a lion.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.your-sight {
  margin-top: 100px;
  h3 {
    margin-left: 10%;
    margin-bottom: 5%;
  }
}
.sight {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sight-first {
  img {
    height: 550px;
  }
}
.sight-second {
  max-width: 600px;
  margin-bottom: 5%;
  p {
    font-size: 30px;
  }
  .my-card {
    background: #cb945e;
    .text-h5 {
      font-weight: bold;
    }
  }
}

@media (max-width: 1366px) {
  .your-sight {
    margin-top: 100px;
    h3 {
      margin-left: 10%;
      margin-bottom: 5%;
    }
  }
  .sight {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .sight-first {
    img {
      height: 400px;
    }
  }
  .sight-second {
    max-width: 500px;
    margin-bottom: 5%;
    p {
      font-size: 18px;
    }
    .my-card {
      background: #cb945e;
      .text-h5 {
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 768px) {
  .sight {
    flex-direction: column;
  }
  .sight-second {
    p {
      margin-left: 5%;
    }
    .my-card {
      max-width: 350px;
      margin: auto;
      p {
        margin-left: unset;
      }
    }
  }
  .your-sight {
    margin-top: 50px;
    h3 {
      margin-left: 5%;
    }
  }
}
</style>
