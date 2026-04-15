"use strict";
function sort(a, comp) {
    let n = a.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (comp.compare(a[j], a[j + 1]) > 0) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}
;
var ar = [{ id: 311, name: "hui" }, { id: 302, name: "pui" }];
var comp = {
    compare: (ob1, ob2) => ob1.id - ob2.id
};
sort(ar, comp);
console.log(ar);
