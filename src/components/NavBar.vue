
<template>
    <!-- <div class="logo">
        <img src="img/logo.png" alt="" srcset="">
    </div>

    <div class="nav-list">
        <a href=".">How It works</a>
        <a href=".">Perks</a>
        <a href="." class="reg-btn">Register</a>
    </div> -->

    <div class="container">


    <nav id="nav" class="navbar navbar-expand-lg navbar-light">

    <div class="container">
      <div class="logo" id="logo">
        <a class="navbar-brand" href="#main" name="navbar-brand" aria-label="Shockinflux Home page">
          <img src="img/logo.png" alt="" srcset="">
        </a>

      </div>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" name="navbar-toggler" aria-label="navbar-toggler">
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class=" collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="nav-list navbar-nav ml-auto">
        <li class="nav-item">
           <a href="." class="nav-link">How It works</a>
        </li>
       
        <li class="nav-item">
          <a href="." class="nav-link">Perks</a>
        </li>
        <li class="nav-item">
           <a href="." class="reg-btn nav-link btn btn-block btn-sm">Register</a>
        </li>
        
      </ul>
    </div>
  </div>
  </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.navbar {
  position: fixed;
  z-index: 9999999;
 padding: 20px 110px 20px 40px;
  top : 0;
    left : 150px;
    right: 150px;
    z-index: 9999;
    background-color: transparent;
}

.navbar button.navbar-toggler {
  border: 2px solid #fff;
  padding: 2px;

  &:focus{
        outline: none;
    }
}
.navbar .menu-icon {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 5px;
}

    .logo{
    width : 120px;
    }

    .logo img{
    width: 100%;
    }

    .nav-list{
        // font-size: 0.8rem;
        margin-top: -10px;
            // font-weight: 600;

          a{
            text-decoration: none;
            margin: 15px;
            font-size: 0.8rem;
        }

        .reg-btn{
        background-color: #C90404;
        padding: 2px;
         font-weight: 700;
        // width: 120px;
        border-radius: 4px 4px 4px 4px;
    
    }

    }



</style>