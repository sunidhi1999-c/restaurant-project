<template>
 <router-view/>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
    name: 'App',
    components: { RouterView }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body{
    padding: 0;
    margin: 0;
}
.logo{
    width:100px
}
.register input .login input, .add{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button .login button ,.add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff; /*colour of the text is white*/
    cursor: pointer;

}
</style>
