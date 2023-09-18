<template>
<v-container>
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

        <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>

        <v-card
    class="mx-auto"
    width="25%">
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>

        <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>
  </v-row>

    <v-row>
    <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>

        <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>

        <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>

        <v-card
    class="mx-auto"
    width="25%"
  >
    <v-img
      src="../src/assets/FUNKO.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>Funko Harry Potter</v-card-title>
    <v-card-subtitle>10X 19,90</v-card-subtitle>
    <v-card-actions><v-btn color="red">Comprar</v-btn></v-card-actions>
    </v-card>
  </v-row>

</v-container>
</template>

<script setup>
import axios from 'axios'
export default {
    data () {

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
        }
    },

    mounted() {
        this.CarregarProduto()
    }
}

</script>

<style scoped>
</style>