<template>
        <HeaderPage/>
    <h1>Hello user ,Welcome at Add Restaurant Page </h1>
    <form class="register">
        <input type="text" name="name" placeholder="Enter name of restaurant" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant"> Add New Restaurant</button>

    </form>
</template>

<script>
      
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';

        export default{
    name: 'AddRest',
    components: { HeaderPage },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    },
   data(){
    return {
        restaurant:{
            name:'',
            address:'',
            contact:''
        }
    }
   },
   methods:{
        async addRestaurant(){
            console.warn(this.restaurant)
            const result=await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status==201){
                this.$router.push({name:'HomePage'});
            }
            console.warn("result",result)
        }
   }

}
</script>