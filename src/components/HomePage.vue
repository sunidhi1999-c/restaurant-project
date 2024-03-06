<template>
        <HeaderPage/>
    <h1>Hello {{ name }} ,Welcome on Home Page </h1>
    <table border="10px">
        <tr>
            <td>ID </td>
            <td>Name </td>
            <td>Contact </td>
            <td>Address </td>
            <td>Actions</td>
        </tr>
            <tr v-for="item in restaurant"  :key =" item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td><router-link :to="'/update'+item.id">Update</router-link></td>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>


            </tr>

    </table>
</template>

<script>
      
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';

export default{
    name: 'HomePage',
    data(){
        return{
        name:'',
        restaurant:[],
        }
    },
    async mounted() {
       this.loadData()
    },
    components: { HeaderPage },
    methods:{
        async deleteRestaurant(id){
            let result=await axios.delete("http://localhost:3000/restaurant"+id);
            console.warn(result)
            if(result.status==200){
                this.loadData.splice(id,1);
            }
        },
            async loadData(){
                let user = localStorage.getItem('user-info');
        this.user=JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        let result=await axios.get("http://localhost:3000/restaurant");
        console.warn(result)
        this.restaurant=result.data;
            }
        }
    
}
</script>

<style>
td{
    width: 160px;
    height: 50px;


}</style>