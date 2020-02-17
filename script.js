var data = [
  {
    name: "Uno",
    speed: 10,
    handling: 6
  },
  {
    name: "Dos",
    speed: 7,
    handling: 6
  },
  {
    name: "Tres",
    speed: 6,
    handling: 9
  },
];
var Race = [];
function Racer(name, speed, handling) {
 var that = this;
   this.ele = document.createElement("div");
   this.speedEle = document.createElement("div");
  this.handlingEle = document.createElement("div");
  this.name = name;
  this.speed = speed;
  this.handling = handling;
   
  this.ele.classList.add("border");

  this.ele.innerHTML = "Name: " + this.name;
  this.speedEle.innerHTML = "Speed: " + this.speed;
  this.handlingEle.innerHTML = "Handling: " + this.handling;
  this.ele.appendChild(this.speedEle);
  this.ele.appendChild(this.handlingEle);
  
  this.ele.addEventListener("click", function() {
    that.increaseNumber();
  });
  document.body.appendChild(this.ele);
}
Racer.prototype.increaseNumber = function() {
  this.speed = this.speed + 5;
  this.handling = this.handling - 2;
  this.ele.innerHTML = "Name: " + this.name;
  this.speedEle.innerHTML = "Speed: " + this.speed;
  this.handlingEle.innerHTML = "Handling: " + this.handling;
  this.ele.appendChild(this.speedEle);
  this.ele.appendChild(this.handlingEle);
  
  if (this.handling<2) {
    this.ele.style.border = "2px solid red";
  }
 
};

for (var i = 0; i < data.length; i++) {
  Race.push(new Racer(data[i].name, data[i].speed, data[i].handling))
}