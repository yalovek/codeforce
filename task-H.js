readline();
var a = readline();
var i = 0
var n = 0;
a.split(' ').forEach((e)=>{
if(+e===100){
i++
} else {
n++
}
});
print(i + Math.ceil((n - Math.min(i,n)) /3))
