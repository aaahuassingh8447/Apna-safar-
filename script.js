document.getElementById("search").addEventListener("keyup",function(){
let v=this.value.toLowerCase();
document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
});
});

function toggleDark(){document.body.classList.toggle("dark");}

function openPackage(p){
let data={
kashmir:`<h2>Kashmir</h2><p>Hotel ₹2000/night</p><p>Food included</p><p>5D/4N</p><h3>Total ₹9499</h3>`,
kerala:`<h2>Kerala</h2><p>Hotel ₹2500/night</p><p>Food included</p><p>6D/5N</p><h3>Total ₹11999</h3>`,
agra:`<h2>Agra</h2><p>Hotel ₹1500/night</p><p>Food included</p><p>2D/1N</p><h3>Total ₹5999</h3>`
};
document.getElementById("details").innerHTML=data[p];
document.getElementById("modal").style.display="block";
}

function closeModal(){document.getElementById("modal").style.display="none";}
