function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


self.addEventListener('message', function(e) {
    console.log("cheguei no bubble");
    var array = e.data;
    bubbleSort(array);
 	self.postMessage(array);
}, false);