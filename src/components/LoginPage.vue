<template>
    <img class="logo" src="restaurant-project\src\assets\Logo.jpg"/>
    <h1>Login Up</h1>
   <div class ="login">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <p>
        <router-link to="/sign-up">Sign Up </router-link>
    </p>
   </div>
</template>

<script>
import axios  from 'axios';
export default{
    name:'LoginPage',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async LoginPage(){
            let result=await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
           // console.warn(result);
            if(result.status==200 && result.data.length>0){
               // alert("Sign up was successfully done !");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
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