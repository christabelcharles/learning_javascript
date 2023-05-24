// for (i = 8 ; i < 20 ; i++ ) {
//     console.log(i)

// }

let p = [ 8, 12, 14, 16, 18, 19, ];
for (i = 2 ; i < p.length; i++ ) {
    console.log(p[i])
}

p.map((u, i) => {
    if (i > 1)  {
        console.log(u)
    }
}); 

