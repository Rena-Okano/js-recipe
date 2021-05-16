new Vue({
  el: "#computed-recalculate",
  data: {
    items: [
      {
        name: "りんご",
        price: 150,
        amount: 3,
      },
      {
        name: "みかん",
        price: 100,
        amount: 5,
      },
      {
        name: "ぶどう",
        price: 400,
        amount: 1,
      },
    ],
  },
  computed: {
    totalPrice: function() {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
  methods: {
    addItem: function(item) {
      item.amount += 1
    },
  },
})
