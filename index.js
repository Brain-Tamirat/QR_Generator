/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt({
  message: "Type Your URL:",
  name: "URL"
}
).then((answer)=>{
  const url = answer.URL;
  qr.image(url).pipe(fs.createWriteStream('gitProfileQR.png'));
  fs.writeFile("./qr.txt",url,(err)=>{
    if(err) console.log(`some error occured : ${err}.`);
  });
}).catch((err)=>{
  console.log(`hmm some thing is wrong : ${err}`);
});

