<template>
  <!-- mammal guide -->
  <div class="mammal">
    <h3>Mammal Guide</h3>
    <div class="mammal-guide">
      <div class="mammal-first">
        <img src="../assets/features/mammal1.png" alt="" />
        <img src="../assets/features/mammal2.png" alt="" />
      </div>
      <div class="mammal-second">
        <p>
          For each mammal you have a detailed information page with 6 well
          structured categories where you can enough information about that
          animal.
        </p>
        <ul>
          <li>Fun Facts</li>
          <li>Etosha related Facts</li>
          <li>Conservation Status</li>
          <li>Diet</li>
          <li>Gender Difference</li>
          <li>Footprint</li>
          <li>Social Behavior</li>
          <li>Appearance</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mammal {
  margin-top: 100px;
  h3 {
    margin-left: 10%;
    margin-bottom: 5%;
  }
}
.mammal-guide {
  display: flex;
  justify-content: space-around;
}
.mammal-first {
  img {
    height: 400px;
  }
}
.mammal-second {
  max-width: 450px;
  p {
    font-size: 20px;
  }
  li {
    font-size: 18px;
    margin-left: 10%;
  }
}

@media (max-width: 768px) {
  .mammal {
    margin-top: 50px;

    h3 {
      font-size: 35px;
      // text-align: center;
    }
  }
  .mammal-guide {
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    text-align: center;
  }
  .mammal-first {
    img {
      height: 400px;
    }
  }
  .mammal-second {
    max-width: 450px;
    p {
      font-size: 20px;
      margin-left: 10%;
      text-align: start;
    }
    li {
      margin-left: 15%;
      text-align: start;
      font-size: 18px;
    }
  }
}
</style>
