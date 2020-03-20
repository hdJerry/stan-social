<template>

<div id="contactus">

    <div class="container">

        <div class="caption-div">
            <p class="caption">
                One click away
            </p>

            <p class="sub-caption">
                to become a Stan
            </p>
        </div>

    <div class="row">
        
        <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="First Name" class="form-field"/>
                <i class="fa fa-user-o input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Last Name" class="form-field"/>
                <i class="fa fa-user-o input-icon"></i>
            </div>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="password" placeholder="Password" class="form-field"/>
                 <i class="fa fa-eye-slash input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="email" placeholder="Email Address" class="form-field"/>
                 <i class="fa fa-envelope-o input-icon"></i>
            </div>
        </div>
     

     <div class="col-lg-2 col-md-2 col-sm-12"/>
     <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Phone Number" class="form-field"/>
                <i class="fa fa-mobile input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Residential Address" class="form-field"/>
                <i class="fa fa-map-marker input-icon"></i>
            </div>
        </div>
     

     <div class="col-lg-2 col-md-2 col-sm-12"/>
     <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Country" class="form-field"/>
                 <i class="fa fa-flag-o input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Occupation" class="form-field"/>
                 <i class="fa fa-suitcase input-icon"></i>
            </div>
        </div>
     

     <div class="col-lg-2 col-md-2 col-sm-12"/>
     <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx non-social">
                <input type="text" placeholder="Products you won’t promote" class="form-field"/>
                <i class="fa fa-exclamation-circle input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx socials-form">
                <input type="text" placeholder="Instagram Handle " class="form-field"/>
                <input type="text" placeholder="Numbers of Followers " class="form-field input-border-left"/>
                <i class="fa fa-instagram input-icon"></i>
            </div>
        </div>


         <div class="col-lg-2 col-md-2 col-sm-12"/>
     <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
           <div class="form-groupx socials-form">
                <input type="text" placeholder="Facebook Handle " class="form-field"/>
                <input type="text" placeholder="Numbers of Followers " class="form-field input-border-left"/>
                <i class="fa fa-facebook input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx socials-form">
                <input type="text" placeholder="YouTube Handle " class="form-field"/>
                <input type="text" placeholder="Numbers of Subscribers " class="form-field input-border-left"/>
                <i class="fa fa-youtube-play input-icon"></i>
            </div>
        </div>

            <div class="col-lg-2 col-md-2 col-sm-12"/>
     <div class="col-lg-2 col-md-2 col-sm-12"/>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx socials-form">
                <input type="text" placeholder="Twitter Handle " class="form-field"/>
                <input type="text" placeholder="Numbers of Followers " class="form-field input-border-left"/>
                <i class="fa fa-twitter input-icon"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-groupx socials-form">
                <input type="text" placeholder="Linkedin Handle " class="form-field"/>
                <input type="text" placeholder="Numbers of Connnections" class="form-field input-border-left"/>
                <i class="fa fa-linkedin input-icon"></i>
            </div>
        </div>
     
     

    </div>

    <button type="submit" class="btn-stan">Become a Stan</button>

    

    </div>

</div>

</template>


<style lang="scss" scoped>

@mixin formIcons(){
     position: relative;
    font-size: 1.0rem;
    color: #fff;
    top : 2px;
}

#contactus{
    margin-top: 100px;
    color: #fff;
    background-color: #760000;
    background-attachment: fixed;
    padding-top: 20px;
    margin-bottom: 40px;
    padding-bottom: 40px;
}

.caption-div{
    margin-top: -10px;
    margin-bottom: 40px;
    .caption{
        font-size: 2.8rem;
        font-weight: 700;
    }

    .sub-caption{
        font-size: 1.3rem;
        margin-top: -30px;
    }
}

.form-groupx{
    border: 1px solid #fff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 10px;

    input{
        border: none;
        // padding: 7px;
        outline: none;
        background-color: transparent;
        color: #fff;
        font-size: 0.7rem;
        text-align: left;
    }

    .input-icon{

        @include formIcons();
        right: -25px;
    }
}

.non-social{

    input{
        width: 80%;
    }

    .input-icon{
        @include formIcons();
        right: -25px;
    }
}

.socials-form{
   
   input{
       width: 120px;
   }

   .input-icon{
        position: relative;
        font-size: 1.0rem;
        color: #fff;
        top : 2px;
        right: -25px;
    }

   .input-border-left{
       border-left: 1px solid #fff;
    padding-left: 10px;

   }
}


.btn-stan{
    display: block;
    width: 300px;
    font-size: 1.2rem;
    padding: 20px;
    color:#760000;
    background-color: #fff;
    border-radius: 30px;
    border: none;
    margin: 20px auto;

    &:focus{
        outline: none;
    }

}


</style>