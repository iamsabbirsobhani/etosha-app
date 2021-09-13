<template>
  <div class="etosha-map">
    <h3>Etosha Map</h3>
    <div class="etosha">
      <div class="etosha-first">
        <img src="../assets/features/etoMap.png" alt="" />
      </div>
      <div class="etosha-second">
        <p>Offline Map of the complete Etosha National Park</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.etosha-map {
  margin-top: 150px;
  h3 {
    margin-left: 5%;
    margin-bottom: 3%;
  }
}
.etosha {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.etosha-first {
  img {
    max-width: 550px;
  }
}
.etosha-second {
  max-width: 600px;
  p {
    font-size: 30px;
  }
}

@media (max-width: 1366px) {
  .etosha-map {
    margin-top: 150px;
    h3 {
      margin-left: 10%;
      margin-bottom: 3%;
    }
  }
  .etosha {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .etosha-first {
    img {
      max-width: 400px;
    }
  }
  .etosha-second {
    max-width: 400px;
    p {
      font-size: 18px;
    }
  }
}

@media (max-width: 768px) {
  .etosha {
    margin-top: 50px;
    flex-direction: column;
  }
  .etosha-first {
    img {
      max-width: 300px;
    }
  }
  .etosha-second {
    p {
      margin-left: 3%;
    }
  }
}
</style>
