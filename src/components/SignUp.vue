<template>
     <img class="logo" src="restaurant-project\src\assets\Logo.jpg"/>
    <h1>Sign Up</h1>
   <div class ="register">
    <input type="text" v-model="name" placeholder="Enter Name"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="SignUp">Sign Up</button>
    <p>
        <router-link to="/LoginPage">Login </router-link>
    </p>
   </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'SignUp',//same as this file name 
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async SignUp(){
            let result=await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name
            });
            console.warn(result);
            if(result.status==201){
                alert("Sign up was successfully done !");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>
<style>

</style>