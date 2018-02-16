<template>
  <div id="app">
    <header class="main-header">
      <nav>
        <a href="javascript:void(0);" title="menu" @click="toggleMenuCart"><i class="fa fa-3" aria-hidden="true" :class="[ toggleMenu ? 'fa-times' : 'fa-shopping-cart', { 'notify' : notify } ] "></i></a>
        <span v-if="items.length && !toggleMenu">{{ quantityProducts }}</span>
      </nav>
    </header>
    <main role="main">
      <aside class="order-details" :class="{ 'active' : toggleMenu }">
        <div class="cart-empty" v-if="items.length === 0">
          <i class="fa fa-frown-o" aria-hidden="true"></i>
          <p>Você ainda não adicionou nenhum produto!</p>
        </div>
        <div class="cart" v-else>
          <header>
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            <span class="count">{{ quantityProducts }}</span>
            <h2>Sacola</h2>
          </header>
          <ul class="items">
            <li v-for="product in items">
              <figure>
                <img src="//4.bp.blogspot.com/-lir7Iy2p8xw/UllO-VmpXEI/AAAAAAAADtw/PmnpZwsvuRk/s1600/Corinthians+2013+-+2014+1.png" alt="">
              </figure>
              <a href="javascript:void(0);" class="item-remove" @click="removeFromCart(product)"><i class="fa fa-times" aria-hidden="true"></i></a>
              <div class="details">
                <div class="product">{{ product.title }}</div>
                <div class="description">{{ product.style }}</div>
                <div class="amount">Quantidade: {{ product.quantity }}</div>
                <div class="price">R$ <span>{{ (product.quantity * product.price).toFixed(2).replace('.', ',') }}</span></div>
              </div>
            </li>
          </ul>
          <div class="subtotal">
            <span class="sub">Subtotal</span>
            <div class="price">
              R$ <span>{{ total }}</span> <small class="details">ou em até 10x de R$ {{ installments.toFixed(2).replace('.', ',') }}</small>
            </div>
          </div>
          <button type="button" class="btn btn-primary full-width">Comprar</button>
        </div>
      </aside>
      <ul class="gallery">
        <li v-for="product in products">
          <div class="item-wrapper">
            <a href="javascript:void(0);" class="tag free-shipping" v-if="product.isFreeShipping">Frete grátis</a>
            <img src="//4.bp.blogspot.com/-lir7Iy2p8xw/UllO-VmpXEI/AAAAAAAADtw/PmnpZwsvuRk/s1600/Corinthians+2013+-+2014+1.png" alt="Preview image" width="50">
            <div class="details">
              <p>{{ product.title }}</p>
              <hr>
              <div class="price">R$ <span class="currency">{{ product.price.toFixed(2).replace('.', ',') }}</span></div>
              <small>ou {{ product.installments }}x R$ {{ (product.price / product.installments).toFixed(2).replace('.', ',') }}</small>
            </div>
            <button type="button" class="btn" @click="addToCart(product)">{{ buyItem }}</button>
            <div class="actions">
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        toggleMenu: false,
        active: false,
        showCart: false,
        selected: '',
        quantity: 0,
        notify: false,
        buyItem: 'Comprar',
        verified: false,
        items: []
      }
    },
    methods: {
      ...mapActions(['getProducts']),
      loadProducts () {
        this.$loader.show()
        this.getProducts()
          .then(() => {
            this.$loader.hide()
          })
      },
      toggleMenuCart () {
        this.toggleMenu = !this.toggleMenu
      },
      mouseOver () {
        this.active = !this.active
      },
      addToCart (product) {
        console.log(product.price)
        this.$toaster.info('Produto ' + product.title + ' adicionado com sucesso!')
        this.notify = setTimeout(() => {
          this.notify = false
        }, 1500)
        var existing = this.items.filter(function (i) { return i.id === product.id })[0]
        if (!existing) {
          this.items.push(product)
          product.quantity += 1
        } else {
          product.quantity += 1
        }
      },
      removeFromCart (product) {
        product.quantity = 0
        this.items.splice(this.items.indexOf(product), 1)
      }
    },
    computed: {
      ...mapGetters(['products']),
      total () {
        var total = 0
        for (var i = 0; i < this.items.length; i++) {
          total += this.items[i].price * this.items[i].quantity
        }
        return total.toFixed(2).replace('.', ',')
      },
      quantityProducts () {
        var quantity = 0
        for (var i = 0; i < this.items.length; i++) {
          quantity += this.items[i].quantity
        }
        return quantity
      },
      installments () {
        return parseInt(this.total) / 10
      }
    },
    mounted () {
      this.loadProducts()
    }
  }
</script>
