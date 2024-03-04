<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
    
        <a href="#">Delete Restaurant</a>
        <a v-onclick="logout" href="#">Logout</a>

    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods:{
            logout(){
                //console.warn("logout")
                localStorage.clear();
                this.$router.push({name:'LoginPage'})
            }
    }
}
    
</script>

<style>
.nav{
    background-color:#7996b3;
    overflow:hidden
}
.nav a{
    float: left;
    color: aqua;
    padding: 14x 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background: #ddd;
    color: blanchedalmond;
}
</style>