var currPage = "home" 

var homeContent = "<div class='homeContent'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore exercitationem, recusandae omnis autem quis nihil. Dicta laborum earum non numquam modi eum voluptas architecto fugit aspernatur dolorem harum sint cupiditate, totam incidunt vel nihil. Nam iste earum, reiciendis cupiditate vero laudantium quis dolore eveniet pariatur quo sit similique velit aliquam, aliquid a repudiandae voluptas, officia minima. Natus, alias corporis.</p><p>Dolor sit amet consectetur adipisicing elit. Quasi nostrum, quae voluptates aliquid esse quos obcaecati ad maiores nemo dicta iure adipisci consequatur, aliquam quis et expedita praesentium? Modi sed nam placeat natus rem, voluptatum esse culpa quis debitis odit. Officiis, tenetur?</p></div>";

var aboutContent = '<div class="aboutContent"><div class="person"><div class="person-pic person1"></div><div class="person-intro"><h2>The Owner:</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, delectus perferendis nulla, doloremque omnis at tempore vero facere tempora aspernatur ducimus sequi beatae sed veniam eum quia dolore! Quam voluptatum officia necessitatibus quibusdam neque alias?</p></div></div><div class="person"><div class="person-pic person2"></div><div class="person-intro"><h2>The Co-Owner:</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, delectus perferendis nulla, doloremque omnis at tempore vero facere tempora aspernatur ducimus sequi beatae sed veniam eum quia dolore! Quam voluptatum officia necessitatibus quibusdam neque alias?</p></div></div></div>';

var productsContent = '<div class="productsContent"><div class="product"><div class="product-pic product1"></div><div class="product-intro"><h2>Butter Almond Soap:</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, delectus perferendis nulla, doloremque omnis at tempore vero facere tempora aspernatur ducimus sequi beatae sed veniam eum quia dolore! Quam voluptatum officia necessitatibus quibusdam neque alias?</p></div></div><div class="product"><div class="product-pic product2"></div><div class="product-intro"><h2>Rose-Gold Soap:</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, delectus perferendis nulla, doloremque omnis at tempore vero facere tempora aspernatur ducimus sequi beatae sed veniam eum quia dolore! Quam voluptatum officia necessitatibus quibusdam neque alias?</p></div></div><div class="product"><div class="product-pic product3"></div><div class="product-intro"><h2>Luxury Soap:</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, delectus perferendis nulla, doloremque omnis at tempore vero facere tempora aspernatur ducimus sequi beatae sed veniam eum quia dolore! Quam voluptatum officia necessitatibus quibusdam neque alias?</p></div></div></div>';

var contactContent = '<div class="contactContent"><form><label for="fname">First Name<span class="required">*</span>:</label><input type="text" id="fname" name="firstname" required><label for="lname">Last Name<span class="required">*</span>:</label><input type="text" id="lname" name="lastname" required><label for="subject">Email<span class="required">*</span>:</label><input type="text" id="email" name="email" required><label for="subject">Phone Number<span class="required">*</span>:</label><input type="text" id="phone" name="phonenumber" required><label class="reqiredNote"><span class="required">*</span>Required</label><button class="submit" type="submit" value="SUBMIT">Submit</button></form></div>';


//this is an example of creating a named function
function init(){
    //this is where instructions for the function go


    //click listeners wil listen to the even and get the link id
    $("nav a").click(function(e){
        let btnID = this.id;
        let contentID = btnID +"Content";

        var element = document.getElementById(btnID);

        //clear app
        document.getElementById('app').innerHTML = " ";

        //remove activeLInk
        var activeElement=document.getElementById(currPage);
        activeElement.classList.remove("active");

        currPage= btnID;

        //change activeLink
        document.getElementById(currPage).classList.add("active");

        //update header
        var div = document.getElementById('leftHeader');
        div.innerHTML = " ";
        div.innerHTML += '<h1>' + currPage + '</h1>';


        $("#app").html(eval(contentID));
    });
}


//this checks for all the elemeents to be ready by the browser
$(document).ready(function(){
    init();


})