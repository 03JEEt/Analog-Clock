setInterval(()=>{
a=new Date();
h=a.getHours();
m=a.getMinutes();
s=a.getSeconds();
hr=(30*h+m/2);
mi=(6*m);
se=(6*s);
document.getElementById('hour').style.transform=`rotate(${hr}deg)`;
document.getElementById('minute').style.transform=`rotate(${mi}deg)`;
document.getElementById('second').style.transform=`rotate(${se}deg)`;
},1000);
