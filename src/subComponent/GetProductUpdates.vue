<template>
  <div class="product-update">
    <h4>Get Product Updates</h4>
    <p>Be the first to know when we release new features!</p>
    <p>(Unsubscribe at any time)</p>
    <form @submit.prevent="formSubmit">
      <div class="input-wrapper">
        <input type="email" placeholder="Email" name="name" required />
        <button>Subscribe</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-update {
  margin-top: 100px;
  margin-bottom: 100px;
  height: 50vh;
  background-image: url("../assets/contactBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  color: white;
  h4 {
    //   margin-top: 20px !important;
    padding: 10px;
    font-size: 45px;
  }
  p {
    font-weight: 700;
    font-size: 18px;
  }
}
.round-input {
  max-width: 300px;
  margin: auto;
}
.q-input {
  padding: 10px;
}
input {
  // display: flex;
  // flex-direction: column;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid rgb(255, 255, 255);
  outline: none;
  margin-top: 20px;
  transition: all 0.3s;
  font-family: "Poppins";
}
input:hover {
  box-shadow: 1px 1px 10px 0.5px white;
}
button {
  margin-left: 10px;
  border-radius: 3px;
  width: 300px;
  height: 50px;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #CB945E;
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
    button{
        margin-left: unset;
    }
    .product-update {
        height: 400px;
    }
}
</style>
