/*console.log('Hello');
if (1 == 2) {
  console.log('HIII');
}
var var1 = 2;
var var2 = 4;
console.log(var1+var2);
var var3 = var1 + var2;
if (var3==6) {
  console.log('HEHEHAHA')
}
if (1==='1') {
  console.log('true')
}
var assign = 10
console.log('assign =', assign)
assign+=10
console.log('now assign =',assign)
var $_cool_$='money'
if ($_cool_$==='money') {
  console.log('moneeeey')
}

if (var1==2 && var2==4) {
  console.log('cool')
}
if(var3==6 || var1==7) {
  console.log('no')
}*/
function update_time(){
  var date=new Date()
  var hours=date.getHours()
  var minutes=date.getMinutes()
  var seconds=date.getSeconds()
  var session='AM'
  if (hours>=12){
    session='PM'
  }
  if (hours===00){
    hours=12
  }
  if (hours>12){
    hours-=12
  }
  if(hours<10){
    hours= '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  var time= hours+':'+minutes+':'+seconds+session+':>)'
  document.getElementById('display').innerText=time
  setTimeout(update_time,1000)
}
update_time()


