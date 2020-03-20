<template>

<div id="banner" class="container">

    <div class="contents row">
        <div class="col-md-1 col-lg-1 col-sm-12"></div>
        <div class="left col-lg-4 col-md-4 col-sm-12">
            <p class="caption">
                Earn freebies with your active social media account!
            </p>
            <p class="sub-caption">
                Become a Mini-Social Influencer
            </p>

            <a href="." class="reg-btn"> Sign Up</a>
        </div>
        <div class="col-md-1 col-lg-1 col-sm-12"></div>
        <div class="right col-lg-6 col-md-6 col-sm-12">

            <div class="bannerimg">
                <img src="img/weird.png" alt="" srcset="">
            </div>

                <div class="img">
                    <img src="img/bannerImg.png" alt="" srcset="">
                </div>
        </div>
    </div>


</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#banner{
    position: relative;
    width: 100%;
    top: -10px;
    padding: 20px;

    .contents{

        .right{
            width : 500px;

            .bannerimg{
                width :  1000px;
                height: 100px;
                margin-top: -100px;
                margin-left: -100px;

                img{
                    width: 100%;
                }
    
            }

            .img{
                width: 350px;
                margin-top: 80px;
                margin-left: 40px;

                img{
                    width: 100%;
                }
            }
        }

        .left{
             
               margin-top: 200px;
                // margin-left: 50px;
                // padding: 20px;
                color: #fff;
            .caption{
                font-size: 2.7rem;
                font-weight: 600;
                text-align: left;
                line-height: 2.8rem;
            }
            .sub-caption{
                font-size: 0.9rem;
                margin-top: -10px;
                float: left;
                // margin-left: -120px;
            }
            .reg-btn{
                text-decoration: none;
                color: #fff;
                font-weight: 600;
                 background-color: #C90404;
                padding: 5px;
                width : 120px;
                border-radius: 4px;
                 margin-top: 25px;
                 float: left;
            }
        }
    }
}


</style>