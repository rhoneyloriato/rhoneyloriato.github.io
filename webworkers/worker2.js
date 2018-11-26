function sort(a) {
    a.sort( function(a, b){
   return a - b;
    });
}


self.addEventListener('message', function(e) {
    console.log("cheguei no nativo");
    var array = e.data;
    sort(array);
 	self.postMessage(array);
}, false);