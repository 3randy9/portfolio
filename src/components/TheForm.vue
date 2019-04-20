<template>
  <section>
    <p v-if="errors.length" class="text-red-light text-base">
    <strong>以下の入力内容をご確認ください</strong>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
    </p>
    <form
      name="contact"
      method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
      action="/contact/thanks"
      @submit="checkForm"
      novalidate="true"
    >
      <dl>
        <dt>
          <label for="name" class="text-grey-darker">Your Name</label>
        </dt>
        <dd>
          <input
            type="text"
            name="name"
            v-model="name"
            required="true"
            aria-required="true"
            id="name"
            class="appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-grey"
          >
        </dd>
      </dl>
      <dl>
        <dt>
          <label for="email" class="text-grey-darker">Your Email</label>
        </dt>
        <dd>
          <input
            type="email"
            name="email"
            v-model="email"
            required="true"
            aria-required="true"
            id="email"
            class="appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-grey"
          >
        </dd>
      </dl>
      <dl>
        <dt>
          <label for="message" class="text-grey-darker">Message</label>
        </dt>
        <dd>
          <textarea
            name="message"
            v-model="message"
            required="true"
            aria-required="true"
            id="message"
            class="appearance-none border-2 border-grey-light rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-grey"
          ></textarea>
        </dd>
      </dl>
      <button
        type="submit"
        class="bg-blue hover:bg-blue-light text-white font-bold py-6 border-b-4 border-blue-dark hover:border-blue rounded"
      >Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = []

      if (!this.name) {
        this.errors.push('名前を入力してください')
      }
      if (!this.email) {
        this.errors.push('メールアドレスを入力してください')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('メールアドレスが正しくありません')
      }
      if (!this.message) {
        this.errors.push('メッセージを入力してください')
      }

      if (!this.errors.length) {
        return true
      }
      e.preventDefault()
    },
    validEmail: function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
	p,
	li {
		font-size: 1.6rem;
	}
}
form {
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
  input,
  textarea {
    margin-top: 10px;
    background-color: #f8fafc;
    font-size: 1.6rem;
    font-weight: 400;
  }
  input {
    width: 100%;
    max-width: 250px;
  }
  textarea {
    width: 100%;
    max-width: 784px;
    min-height: 150px;
  }
  button {
    display: block;
    width: 100%;
    max-width: 250px;
    margin: 26px auto 0;
  }
  dl + dl {
    margin-top: 30px;
  }
}
</style>
