// let n=7;
// let string="";

// for(let i=0; i<n; i++){
//     for(let j=n; j>i; j--){

//         string += " "
//     }
//     for(let k=0; k<=i;k++){
//         if(k==0 || k==i){
//             string += "*"

//         }
//         else{
//             string +=" "
//         }
//     }
    
//     string +='\n'
// }
// for(let i=0; i<=n;i++){
//     string += "*"
// }
// console.log(string);

let n=7;
let string="";

for(let i=0; i<n; i++){
    // for(let j=n; j>i; j--){

    //     string += " "
    // }
    for(let k=0; k<=i;k++){
        if(k==0 || k==i){
            string += "*"

        }
        else{
            string +=" "
        }
    }
    
    string +='\n'
}
for(let i=0; i<=n;i++){
    string += "*"
}
console.log(string);