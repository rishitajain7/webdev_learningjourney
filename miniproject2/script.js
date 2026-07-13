const serviceNames=["Dry Cleaning","Wash and Fold","Ironing","Stain Removal","Leather and Suede Cleaning","Wedding Dress Cleaning"];
const servicePrices=[200,100,30,150,500,1200];
const cartBody=document.getElementById("cartBody");
const emptyBox=document.getElementById("emptyBox");
const addButtons=document.querySelectorAll(".addBtn");
const totalPrice=document.getElementById("totalPrice");

let cart=[];
let total=0;
let serial=1;
if(addButtons.length>0){
for(let i=0;i<addButtons.length;i++){
addButtons[i].addEventListener("click",function(){
emptyBox.style.display="none";
let row=document.createElement("tr");
row.innerHTML=`
<td>${serial}</td>
<td>${serviceNames[i]}</td>
<td>₹${servicePrices[i]}</td>
<td><button class="removeBtn">Remove</button></td>
`;
cartBody.appendChild(row);
total+=servicePrices[i];
cart.push({
name:serviceNames[i],
price:servicePrices[i]
});

localStorage.setItem("cart",JSON.stringify(cart));

totalPrice.innerHTML="Total : ₹"+total;

serial++;

let removeButton=row.querySelector(".removeBtn");

removeButton.addEventListener("click",function(){

total-=servicePrices[i];

totalPrice.innerHTML="Total : ₹"+total;

row.remove();

cart.splice(cart.findIndex(item=>item.name===serviceNames[i]&&item.price===servicePrices[i]),1);

localStorage.setItem("cart",JSON.stringify(cart));

if(cartBody.rows.length==0){
emptyBox.style.display="block";
}

});

});
}
}

const bookingForm=document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message");

if(name==""||email==""||phone==""){
alert("Please fill all fields.");
return;
}

let phonePattern=/^[6-9]\d{9}$/;

if(!phonePattern.test(phone)){
alert("Enter a valid phone number.");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Enter a valid email.");
return;
}

if(total==0){
alert("Please add at least one service.");
return;
}

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
{
name:name,
email:email,
phone:phone,
total:"₹"+total
}
)
.then(function(){

message.style.color="green";
message.innerHTML="Booking Successful! Confirmation email sent.";
bookingForm.reset();

})
.catch(function(){

message.style.color="red";
message.innerHTML="Email could not be sent.";
        });
            });
                }

const newsletterForm=document.getElementById("newsletterForm");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("newsletterMessage");

if(name==""||email==""){
message.style.color="red";
message.innerHTML="Please fill all the fields.";
return;
}

message.style.color="green";
message.innerHTML="Thank you "+name+"! You have subscribed successfully.";
newsletterForm.reset();

});
}