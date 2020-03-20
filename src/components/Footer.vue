<template>

    <div id="footer" class="container">
        <p class="pork-logo">
            <img src="img/pork.png" alt="" srcset="">
        </p>
        <p class="pork-connect">Connect with us </p>
        <p class="pork-socials">


            <a href=".">
                <i class="fa fa-facebook"></i>
            </a>

            <a href=".">
            <i class="fa fa-google-plus"></i>
            </a>

            <a href=".">
            <i class="fa fa-twitter"></i>
            </a>

            <a href=".">
            <i class="fa fa-linkedin"></i>
            </a>
           
        </p>
        <p class="main-logo">
             <img src="img/logo.png" alt="" srcset="">
        </p>
        <p class="pork-links">
            <a href=".">Home</a>
            <a href=".">Terms&Conditions</a>
            <a href=".">Privacy Policy</a>
        </p>
        <p class="pork-copy">&copy; &nbsp; 2019 &nbsp; StanSocial</p>
    </div>

</template>


<style lang="scss" scoped>

#footer{
    padding:0 0 20px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    background-image: url(/img/BG.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    background-attachment: fixed;
    color: #fff;


    
}

.pork-logo{
    width: 400px;
    margin: -60px auto 10px;


    img{
        width: 100%;
    }

}

.pork-connect{
    font-size: 0.8rem;
    margin-top: -20px;
}

.main-logo{
    width: 400px;
    margin: 10px auto;


    img{
        width: 100%;
    }

}

.pork-socials{
     display: flex;
    justify-content: center;
    flex-flow: nowrap row;

    a{
        width: 50px;
        height: 50px;
        margin: 5px;
        padding: 5px;
        font-size: 1.6rem;
        text-align: center;
        background-color: #009509;
        color: #fff;
        border-radius: 50%;
    }
}

.pork-links{
display: flex;
justify-content: center;
flex-flow: row;
font-size: 0.9rem;

    a{
        text-decoration: none;
        color: #fff;
        margin-left: 30px;
    }
}

.pork-copy{
    font-size: 0.8rem;
}
</style>