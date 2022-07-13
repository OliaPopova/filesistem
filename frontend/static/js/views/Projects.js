import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
              <style>
              
#canvas_container {
            width: 800px;
            height: 450px;
            overflow: auto;
        }

#canvas_container {
            background: #333;
            text-align: center;
            border: solid 3px;
        }
              
    
#my_pdf_viewer{
    display: none;
    }
    
              
              
html {
  box-sizing: border-box;
}


*, *:before, *:after {
  box-sizing: border-box;
}



 .files-container,
  input[type="checkbox"] {
            display: none;
    }

  input[type="checkbox"]:checked ~ .files-container {
            display: block;
        }


#btn{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn.btn-down:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}


#btn2{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn2:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn2.btn-down2:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}

#btn3{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn3:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn3.btn-down3:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}

#btn4{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn4:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn4.btn-down4:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}


#btn5{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn5:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn5.btn-down5:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}


#btn6{
color: #000000;
cursor: pointer;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
display: inline-block;
font-style: normal;
font-weight: 600;
font-size: 20px;
width: 100%;

}
#btn6:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 80%;
    margin-right: auto;
}

#btn6.btn-down6:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}

.files-container{
margin-left: 20px;
}


.carousel {
  min-width: 400px;
  max-width: 1236px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 48px;
  padding-right: 48px;
  position: relative;
}

.carousel__activator {
  display: none;
}

.carousel__controls {
  display: none;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 16px;
  left: 16px;
  bottom: 0;
}
.carousel__controls:first-of-type {
  justify-content: flex-end;
}
.carousel__controls:last-of-type {
  justify-content: flex-start;
}

.carousel__control {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #3d414a;
  border-radius: 100%;
  box-shadow: 0 2px 10px 0 rgba(33, 34, 36, 0.3);
  font-size: 24px;
  height: 48px;
  justify-content: center;
  transition: 0.3s all;
  width: 48px;
  z-index: 1;
}
.carousel__control:hover {
  -webkit-transform: scale(1.05);
          transform: scale(1.05);
}

.carousel__activator:nth-of-type(1):checked
~ .carousel__controls:nth-of-type(1) {
  display: flex;
}

.carousel__activator:nth-of-type(1):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}

.carousel__activator:nth-of-type(2):checked
~ .carousel__controls:nth-of-type(2) {
  display: flex;
}

.carousel__activator:nth-of-type(2):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}

.carousel__activator:nth-of-type(3):checked
~ .carousel__controls:nth-of-type(3) {
  display: flex;
}

.carousel__activator:nth-of-type(3):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-200%);
          transform: translateX(-200%);
}

.carousel__activator:nth-of-type(4):checked
~ .carousel__controls:nth-of-type(4) {
  display: flex;
}

.carousel__activator:nth-of-type(4):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-300%);
          transform: translateX(-300%);
}

.carousel__activator:nth-of-type(5):checked
~ .carousel__controls:nth-of-type(5) {
  display: flex;
}

.carousel__activator:nth-of-type(5):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-400%);
          transform: translateX(-400%);
}

.carousel__activator:nth-of-type(6):checked
~ .carousel__controls:nth-of-type(6) {
  display: flex;
}

.carousel__activator:nth-of-type(6):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-500%);
          transform: translateX(-500%);
}

.carousel__activator:nth-of-type(7):checked
~ .carousel__controls:nth-of-type(7) {
  display: flex;
}

.carousel__activator:nth-of-type(7):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-600%);
          transform: translateX(-600%);
}

.carousel__activator:nth-of-type(8):checked
~ .carousel__controls:nth-of-type(8) {
  display: flex;
}

.carousel__activator:nth-of-type(8):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-700%);
          transform: translateX(-700%);
}

.carousel__activator:nth-of-type(9):checked
~ .carousel__controls:nth-of-type(9) {
  display: flex;
}

.carousel__activator:nth-of-type(9):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-800%);
          transform: translateX(-800%);
}

.carousel__activator:nth-of-type(10):checked
~ .carousel__controls:nth-of-type(10) {
  display: flex;
}

.carousel__activator:nth-of-type(10):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-900%);
          transform: translateX(-900%);
}

.carousel__screen {
  overflow: hidden;
  margin-left: -16px;
  margin-right: -16px;
}

.carousel__track {
  font-size: 0;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.carousel__item {
  display: inline-flex;
  padding-left: 16px;
  padding-right: 16px;
  vertical-align: top;
  white-space: normal;
  box-sizing: border-box;
 
   
}

.carousel__item--desktop-in-1 {
  width: 100%;
  border-radius: 15px;
}

.carousel__item--desktop-in-2 {
  width: 50%;
  border-radius: 15px;
}

.carousel__item--desktop-in-3 {
  width: 33.3333333333%;
  border-radius: 15px;
  
}

.carousel__item--desktop-in-4 {
  width: 25%;
  border-radius: 15px;
}

.carousel__item--desktop-in-5 {
  width: 20%;
  border-radius: 15px;
}



.demo-content {
  color: #fff;
  display: flex;
  position: relative;
  font-family: 'Quicksand', sans-serif;
  font-weight: 30;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 15px;
  font-size: 13px;
  height: 250px;
  width: 100%;
  box-sizing: border-box;
   background-image: url("https://raw.githubusercontent.com/OliaPopova/filesistem/f130dd0d6f80da933877075653ef4f27f3dd1dc6/Group%2025.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: fill;
  border-radius: 15px;
 
}

.first-cont{
background: #FFFFFF;
border-radius: 15px;
box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.03);
min-height: 50px;
max-height: 600px;
min-width: 300px;
margin-bottom: 5px;
}



.file-container{

  color: #fff;
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 30;
  justify-content: start;
  text-transform: uppercase;
  font-size: 13px;
  max-width: 444px;
  min-width: 200px;
  height: 69px;
  background: #FFFFFF;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 8px 15px 8px 0;
  gap: 21.48px;
  align-items: flex-start;
  font-style: normal;
  line-height: 22px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.file-container-right{
  color: #fff;
  display: flex;
  font-family: 'Quicksand', sans-serif;

  justify-content: start;
  text-transform: uppercase;
  
  max-width: 444px;
  min-width: 200px;
  height: 69px;
  background: #FFFFFF;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 8px 15px 8px 0;
  gap: 21.48px;
  align-items: flex-start;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}



.img{
width: 28px;
height: 29.75px;
margin:18px 0 15px 10px;

}

.column {
    box-sizing: border-box;
    float: left;
    width: 50%;
    max-height: 800px; /* Should be removed. Only for demonstration */ 
}

/* Clear floats after the columns */
.row:after {
    box-sizing: border-box;
    content: "";
    display: table;
    clear: both;
}


.file-name{
min-width: 189.31px;
max-width: 400px;
font-family: 'Quicksand', sans-serif;
height: 22px;
font-style: normal;
font-size: 16px;
line-height: 22px;
color: #000000;
align-items: flex-start;
margin:20px 10px 15px 0;
text-decoration: none;
font-weight: 500;
}

.link {
    display: block;
    padding: 200px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;
    
}

     



/*.carousel__item:nth-child(1) .demo-content {*/
/*  */
/*}*/

/*.carousel__item:nth-child(2) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

/*.carousel__item:nth-child(3) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

/*.carousel__item:nth-child(4) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

/*.carousel__item:nth-child(5) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

/*.carousel__item:nth-child(6) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

/*.carousel__item:nth-child(7) .demo-content {*/
/*  background: linear-gradient(72.92deg, rgba(240, 84, 84, 0.75) 11.68%, rgba(88, 104, 160, 0.75) 96%);*/
/*}*/

.files-container-PhoneVersion{
display: none;
}

@media screen and (max-width: 1390px) {

#btn:after {
    content: "\\276F";
    color: #A6A6A6;
    display: inline-block;
    margin-left: 78%;
    margin-right: auto;
}

#btn.btn-down:after{

    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */'
    transform: rotate(90deg);
    color: #3E6DEE;

}
}

@media screen and (max-width: 1300px) {

#btn:after {
    margin-left: 76%;
    margin-right: auto;
}
}

@media screen and (max-width: 1250px) {

#btn:after {
    margin-left: 74%;
    margin-right: auto;
}

}

@media screen and (max-width: 1140px) {

#btn:after {
    margin-left: 72%;
    margin-right: auto;

}
}

@media screen and (max-width: 1100px) {

#btn:after {
    margin-left: 68%;
    margin-right: auto;

}
}

@media screen and (max-width: 1023px) {

#btn:after {
    margin-left: 65%;
    margin-right: auto;
}



  .carousel {
    padding-left: 0;
    padding-right: 0;
  }

  .carousel__activator:nth-of-type(n):checked ~ .carousel__controls:nth-of-type(n) {
    display: none;
  }
  .carousel__activator:nth-of-type(n):checked ~ .carousel__screen .carousel__track {
    -webkit-transform: none;
            transform: none;
  }

  .carousel__screen {
    margin-left: 0;
    margin-right: 0;
  }

  .carousel__track {
    overflow-x: auto;
    width: auto;
    /*padding-left: 48px;*/
    /*padding-right: 48px;*/
  }

  .carousel__item--tablet-in-1 {
    width: 90%;
    border-radius: 15px;
  }

  .carousel__item--tablet-in-2 {
    width: 45%;
    border-radius: 15px;
  }

  .carousel__item--tablet-in-3 {
    width: 30%;
    border-radius: 15px;
  }
    .demo-content {
  height: 200px;
  width: 90%;
  border-radius: 15px;
}

.link {
    display: block;
    padding: 150px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;
    
}


}

@media screen and (max-width: 950px) {

#btn:after {
    margin-left: 62%;
    margin-right: auto;
}

@media screen and (max-width: 900px) {

.column {
    display: none;
}
.files-container-PhoneVersion{
display: block;
}

.link {
    display: block;
    padding: 160px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;
    
}

}


@media screen and (max-width: 886px) {

#btn:after {
    margin-left: 60%;
    margin-right: auto;
}}


@media screen and (max-width: 846px) {

#btn:after {
    margin-left: 57%;
    margin-right: auto;
}}

@media screen and (max-width: 830px) {

#btn:after {
    margin-left: 55%;
    margin-right: auto;
}}

@media screen and (max-width: 815px) {

#btn:after {
    margin-left: 54%;
    margin-right: auto;
}

.link {
    display: block;
    padding: 160px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;}
    
}


@media screen and (max-width: 790px) {

#btn:after {
    margin-left: 52%;
    margin-right: auto;
}}

@media screen and (max-width: 775px) {

#btn:after {
    margin-left: 50%;
    margin-right: auto;
}}

@media screen and (max-width: 745px) {

.demo-content{
 height: 160px;
}

#btn:after {
    margin-left: 48%;
    margin-right: auto;
}

.link {
    display: block;
    padding: 120px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;
    
}
}


@media screen and (max-width: 737px) {

#btn:after {
    margin-left: 46%;
    margin-right: auto;
}}


@media screen and (max-width: 720px) {

#btn:after {
    margin-left: 44%;
    margin-right: auto;
}}

@media screen and (max-width: 700px) {

#btn:after {
    margin-left: 42%;
    margin-right: auto;
}}

@media screen and (max-width: 690px) {

#btn:after {
    margin-left: 40%;
    margin-right: auto;
}}

@media screen and (max-width: 680px) {

#btn:after {
    margin-left: 38%;
    margin-right: auto;
}}

@media screen and (max-width: 670px) {

#btn:after {
    margin-left: 36%;
    margin-right: auto;
}}

@media screen and (max-width: 660px) {

#btn:after {
    margin-left: 34%;
    margin-right: auto;
}}

@media screen and (max-width: 650px) {

#btn:after {
    margin-left: 31%;
    margin-right: auto;
}}

@media screen and (max-width: 640px) {

#btn:after {
    margin-left: 28%;
    margin-right: auto;
}}

@media screen and (max-width: 630px) {

#btn:after {
    margin-left: 25%;
    margin-right: auto;
}

.link {
    display: block;
    padding: 120px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;}
    

.file-container-right{
  color: #fff;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-weight: 30;
  justify-content: start;
  text-transform: uppercase;
  font-size: 13px;
  max-width: 345px;
  min-width: 300px;
  height: 69px;
  background: #FFFFFF;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 8px 15px 8px 0px;
  gap: 21.48px;
  align-items: flex-start;
}
.file-container{
  color: #fff;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-weight: 30;
  justify-content: start;
  text-transform: uppercase;
  font-size: 13px;
  max-width: 345px;
  min-width: 300px;
  height: 69px;
  background: #FFFFFF;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 8px 15px 8px 0px;
  gap: 21.48px;
  align-items: flex-start;
}
}

@media screen and (max-width: 620px) {

#btn:after {
    margin-left: 23%;
    margin-right: auto;
}}


@media screen and (max-width: 600px) {

.link {
    display: block;
    padding: 110px 18px 12px 18px;
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: 1000;
    position: absolute;
    width: 100%; /* Ширина слоя */
    height: 100%; /* Высота слоя */
    vertical-align:bottom;
    
}


  .carousel__track {
    padding-left: 0;
    padding-right: 0;
  }

  .carousel__item--mobile-in-1 {
    width: 50%;
    border-radius: 15px;
  }

  .carousel__item--mobile-in-2 {
    width: 45%;
    border-radius: 15px;
  }

  .carousel__item--mobile-in-3 {
    width: 30%;
    border-radius: 15px;
  }
  
  .demo-content {
  height: 150px;
  width: 85%;
  border-radius: 15px;
    
}
}



</style>
         <h1> Проекты </h1>
         <div class='demo-container'>
      <div class='carousel'>
        <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'>
        <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'>
        <input class='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
            ▶
          </label>
        </div>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'>
           ◀
          </label>
          <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3'>
            ▶
          </label>
        </div>
        <div class='carousel__controls'>
          <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-2'>
            ◀
          </label>
        </div>
        <div class='carousel__screen'>
          <div class='carousel__track'>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3' style="border-radius: 15px">
              <div class='demo-content'>
              
                <a href="/" class="link" data-link>Главная</a>
              </div>
            </div>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
         
              <div class='demo-content'>
              
                <a href="/projects" class="link" data-link>Проекты</a>
                
              </div>
            </div>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
              <div class='demo-content' >
              
                <a href="/samples" class="link" data-link>Шаблоны</a>
              </div>
            </div>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
              <div class='demo-content'>
              
              <a href="/reports" class="link" data-link>Отчёты</a>   
              </div>
            </div>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
              <div class='demo-content'>
             
                 <a href="/library" class="link" data-link>Библиотека</a>
              </div>
            </div>
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
              <div class='demo-content'>
               
               <a href="/different" class="link" data-link>Разное</a>
              </div>
            </div>
            
            <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
              <div class='demo-content'>
               
               <a href="/№" class="link" data-link>Документы</a>
              </div>
            </div>
            
            
            
<!--            <div class='carousel__item carousel__item&#45;&#45;mobile-in-1 carousel__item&#45;&#45;tablet-in-2 carousel__item&#45;&#45;desktop-in-3'>-->
<!--              <div class='demo-content'>-->
<!--     можно добавить слайдеры           -->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
<p style="font-style: normal; font-weight: 700; font-size: 24px; line-height: 29px; color: #000000;">Файлы</p>

<div class="first-cont">

<label for="pseudoBtn" id="btn" > Управление НТР </label>
<input type="checkbox" id="pseudoBtn">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~6o0G3" class="file-name">Научная экспертиза</a>
    </div>
   
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~0FkYS" class="file-name">Научные журналы</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Оценка результативности науки</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Гомеостаз</a>
    </div>
  </div>
  
  
  <div class="column">
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Фронтиры и приоритеты СНТР (анализ разрывов технологических цепочек)</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">ИИ для управления НТР</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Озеро данных вузов (вкл. программы развития)</a>
    </div>
  </div>
  
</div>
</div>
</div>

 
<div class="first-cont">

<label for="pseudoBtn2" id="btn2" > Кадры </label>
<input type="checkbox" id="pseudoBtn2">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~6o0G3" class="file-name">Десятилетие науки и технологий</a>
    </div>
   
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~0FkYS" class="file-name">Развитие научного туризма и волонтерства</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Модель научной аттестации</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">РЦТ вузов и НО</a>
    </div>
    
  </div>
  
  
  <div class="column">
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Зелёный» коридор для ученых</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Кадровый проект для науки и высшего образования</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Эндаумент-фонды</a>
    </div>
  </div>
  
</div>
</div>
</div>


<div class="first-cont">

<label for="pseudoBtn3" id="btn3" > Инфраструктура и сервисы </label>
<input type="checkbox" id="pseudoBtn3">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~6o0G3" class="file-name">Кампусы</a>
    </div>
   
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~0FkYS" class="file-name">Приборная база</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">ЦКП и УНУ</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Мегасайенс</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Научный флот</a>
    </div>
    
  </div>
  
  
  <div class="column">
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">НИКС и суперкомпьютеры</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Домен «Наука и инновации»</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Домен «Образование»</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Суперсервис</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Капремонт вузов и научных организаций</a>
    </div>
    
  </div>
  
</div>
</div>
</div>



<div class="first-cont">

<label for="pseudoBtn4" id="btn4" > Инструменты поддержки </label>
<input type="checkbox" id="pseudoBtn4">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~0FkYS" class="file-name">Научно-образовательные центры</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Приоритет-2030</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Приоритет-2030 для научных организаций</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Инжиниринговые центры</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">ФНТП Генетика</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Комплексная научно-техническая программа</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">ВИП ГЗ Климат</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">ВИП ГЗ Новая энергетика</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">ВИП ГЗ технологическая платформа оперативного реагирования на инфекционные заболевания</a>
    </div>
    
     <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Региональные научные фонды</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Институты инновационного развития</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Университетское технопредпринимательство</a>
    </div>
    
  </div>
  
  
  <div class="column">
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">НЦМУ математика</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">НЦМУ приоритеты СНТР</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">НЦМУ геномные</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">ФНТП Климат</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">ФНТП Сельское хозяйство</a>
    </div>
    
     <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Интеграция бизнеса и науки в рамках АПК</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Национальная технологическая инициатива (НТИ)</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">218-ПП (интеграция производства и науки)</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Научные лаборатории (в т.ч. Молодежные)</a>
    </div>
    
     <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Отечественное научное приборостроение</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Центры трансфера технологий</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">НЦФМ</a>
    </div>
    
  </div>
  
</div>
</div>
</div>
 
 <div class="first-cont">

<label for="pseudoBtn5" id="btn5" > Спецпроекты </label>
<input type="checkbox" id="pseudoBtn5">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~6o0G3" class="file-name">Российская Дарпа</a>
    </div>
   
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~0FkYS" class="file-name">СИРИУС</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Водородная энергетика (совместно с Минэнерго)</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Цифровые двойники (в т.ч. научных установок)</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Бор-нейтронно захватная терапия</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Химпрепарат и вакцины</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Ботанический сад Газпрома</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=XLS.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~DhVq4" class="file-name">Ботанический сад Газпрома</a>
    </div>
    
  </div>
  
  
  <div class="column">
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Лицей в Крыму</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">ИТ кадры и инструменты крипты</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Микроэлектроника</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Станкин и станкостроение</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Передовые инженерные школы</a>
    </div>
    
     <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Российский центр научной информации</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Авиастроение</a>
    </div>
   
  </div>
  
</div>
</div>
</div>
 
 <div class="first-cont">

<label for="pseudoBtn6" id="btn6" > Международная деятельность </label>
<input type="checkbox" id="pseudoBtn6">

<div class='files-container'>
<div class="row">
  <div class="column">
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~6o0G3" class="file-name">Международные научные и образовательные проекты</a>
    </div>
    
  </div>
  
  
  <div class="column">
    
  </div>
  
</div>
</div>
</div>
 
 
 
 
  <div class='files-container-PhoneVersion'>
  
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Годовой отчёт</a>
    </div>
   
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Шаблон</a>
    </div>
    
    <div class="file-container">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Проект</a>
    </div>
  
  
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/Property%201=DOC.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Документы</a>
    </div>
   
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/LINK.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Файл №5</a>
    </div>
    
    <div class="file-container-right">
        <img class = "img" src="https://github.com/OliaPopova/filesistem/blob/main/frontend/static/js/views/PPTX.png?raw=true" alt="">
        <a href="https://proektnyyofis-ru.bitrix24.ru/~pHLab" class="file-name">Сборка</a>
    </div>
    
  </div>  
  
  
  <div id="my_pdf_viewer">
    <div id="canvas_container">
        <canvas id="pdf_renderer"></canvas>
    </div>

    <div id="navigation_controls">
        <button id="go_previous">Previous</button>
        <input id="current_page" value="1" type="number"/>
        <button id="go_next">Next</button>
    </div>

    <div id="zoom_controls">
        <button id="zoom_in">+</button>
        <button id="zoom_out">-</button>
    </div>
</div>
  
  
        `;
    }
}


