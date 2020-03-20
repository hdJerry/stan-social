<template>
  <div id="app" class="">
   <NavBar/>

   <banner/>

   <SectionA/>

    <SectionB/>

   <Contactus/>

   <Footer/>
  </div>
</template>


<script>

import NavBar from '@/components/NavBar'

import Banner from '@/components/Banner'

import SectionA from '@/components/SectionA'

import SectionB from '@/components/SectionB'


import Contactus from '@/components/Contactus'

import Footer from '@/components/Footer'


export default{

  components:{
    NavBar,
    Banner,
    SectionA,
    SectionB,
    Contactus,
    Footer
  },

  data(){
    return{


    }
  }

}

</script>
<style lang="scss">

*{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body,html{
  margin: 0;
  background-image: url(/img/bg.png);
  overflow-x: hidden;
}
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
