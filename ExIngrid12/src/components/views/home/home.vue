<template>
<v-container class="lista">
  <v-row>
    <v-card
    class="mx-auto"
    width="25%" v-for="product in products" :key='product.id'>
    <v-img
      :src="product.imagem"
      height="200px"
      cover
    ></v-img>

    <v-card-title>{{product.nome}}</v-card-title>
    <v-card-subtitle>10X {{product.parcela}}</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>
  </v-row>

</v-container>
</template>

<script setup>
import axios from 'axios'
export default {
    data () {
        return{
            products: [],
            productsCart: []
        }
    },
    methods:{
        CarregarProduto() {
            axios({
                url: 'http://localhost:3000/produtos',
                method: 'GET'
            }) .then ((response) => {
                this.products = response.data
                console.log(this.products)
            })

            .catch(() => {
                alert("Desculpe, não deu certo")
            })
        },

        AddCarrinho(produto) {
            this.productsCart.push(produto)
        }
    },

    mounted() {
        this.CarregarProduto()
    }
}

</script>

<style scoped>
.lista{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>