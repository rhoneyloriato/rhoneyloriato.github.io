function sort(a) {
    a.sort( function(a, b){
   return a - b;
    });
}


self.addEventListener('message', function(e) {
    var array = e.data;
    sort(array);
 	self.postMessage(array);
}, false);
