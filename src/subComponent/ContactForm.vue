<template>
  <dir class="contact-form">
    <h4>We would love to hear from you</h4>
    <p>
      Whether you have questions, suggestions, or just want to say hi, drop us a
      line.
    </p>
    <form action="mailto:contact@etosha-app.com">
      <q-input outlined type="text" label="Name" />
      <q-input style="margin-left: 20px" outlined type="email" label="Email" />
    </form>
    <div class="text">
      <q-input
        filled
        type="textarea"
        placeholder="Write your message here..."
      />
      <button>Submit</button>
    </div>
  </dir>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-form {
  max-width: 600px;
  margin: 50px auto;
  h4 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
  }
}
form {
  display: flex;
  .q-input {
    //   margin-left: 10px;
    width: 50%;
  }
}
.text {
  margin-top: 20px;
  width: 100%;
}

button {
  border-radius: 3px;
  width: 100%;
  height: 50px;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #cb945e;
  transition: all cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;
  margin-top: 20px;
  font-size: 20px;
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
  .contact-form {
    max-width: 340px;
  }
}
</style>
