<template>

<div id="sectionB">
    <div class="row">
         <div class="col-lg-1 col-md-1 col-sm-12"></div>
        <div class="col-lg-5 col-md-5 col-sm-12 left-section">
            <p class="perks">
                <span class="perks-line"></span>
                <span class="perks-dot"></span>
                <span class="perks-word">Perks</span>
            </p>
            <p class="caption">
                At Stan Social, you enjoy
            </p>

            <p class="listed1 list">
                            
                <span class="num">1</span> 
                <span class="breakdown">
                    <p>Freebies</p>
                     <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </span>
                    </span>
            </p>
            <p class="listed2 list">
                 <span class="num">2</span>
                 <span class="breakdown">
                     <p>Invitations to top events</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </span>
                     </span>
            </p>
            <p class="listed3 list">
                <span class="num">3</span>
                 <span class="breakdown">
                     <p>Cash incentives</p>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            </span>
                            </span>
            </p>
            <p class="listed4 list">
                 <span class="num">4</span>
                 <span class="breakdown">
                     <p>A unique STANSOCIAL ID.</p>
                     <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </span>
                     </span>
            </p>

            

        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 right-section">
            <img src="img/Group.png" alt="" srcset="">
        </div>
    </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#sectionB{
    margin-top: 100px;
    color: #fff;
    background-color: #292D33;
    background-attachment: fixed;
    padding-top: 40px;
    margin-bottom: 40px;
}

.perks{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;
    // margin-left: 40px;

    .perks-word{
        color: #818992;
    }

    .perks-line{
        height: 2px;
        width :  40px;
        margin: 10px;
        background-color: #C90404;
    }

    .perks-dot{
        width: 5px;
        height: 5px;
        border-radius: 20px;
        background-color: #C90404;
        margin-left: -10px;
        margin-right: 5px;
    }
}

.caption{
   font-size: 2.3rem;
    font-weight: 200;
    line-height: 2.5rem;
    text-align: left;
}

// @for $i from 1 through 4 {
//     .listed#{$i}:before{
//         content: '#{$i}';
//         position: absolute;
//         width : 50px;
//         height: 50px;
//         color: #fff;
//         font-size: 1.2rem;
//         border: 2px solid #C90404;
//         border-radius: 50%;
//         padding-top: 10px;
//         left: 30px;
//         margin:  30px;
//     }
// }


.left-section{
    margin-left: 70px;
}

.list{

    display:flex;
    justify-content: space-around;

    margin: 10px;
    text-align: left;
    font-size: 0.75rem;
    color: #fff;

    .breakdown{
        padding: 20px;
        line-height: 1.0rem;

        span{
             color: #818992;
        }

        p{
            font-size: 1.0rem;
        }
    }
  

    .num{

            // display: inline-block;
            width : 50px;
            height: 50px;
            font-size: 1.2rem;
            border: 2px solid #C90404;
            border-radius: 50%;
            padding: 10px 18px;
            margin-top: 20px;

        }
}


.right-section{
    margin-top: 5px;
     img{
    width: 100%;
}
}

</style>