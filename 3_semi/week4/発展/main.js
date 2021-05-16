new Vue({
  el: "#v-for-push",
  data: {
    animals: ["ふらみんご", "ごりら", "らいおん"],
  },
  methods: {
    addAnimal: function() {
      this.animals.push("んらいおん")
    },
  },
})

/*new Vue({
  el: "#v-if-sign-in",
  data: {
    user: null,
  },
  methods: {
    signIn() {
      this.user = {
        name: "キャベツ太郎",
      }
    },
    signOut() {
      this.user = null
    },
  },
}) */
