const fs = require("fs");

// writeFile creates file and fill text onto it.

 fs.writeFile("yo.txt","I Love You",(err)=>{
   if(err) console.log("issue")
    else console.log("done")
})

// AppendFile is used to add data on precreated file

fs.appendFile("yo.txt", "hehehee append file ka kaamal",(err)=>{
   if (err) console.log(isse)
    else console.log("success")
})

// RENAME FILE IS USED TO RENAMINHG

fs.rename("yo.txt", "renamed.txt", (err) => {
  if (err) console.log("isse h bhaiya");
  else console.log("hogaya");
});

// Copyfile is used to copy files

fs.copyFile("renamed.txt","./copy/yo.txt", (err)=>{
    if (err) console.log("issue h bhaiya");
    else console.log("hogaya");
})

// Unlink is used to del files

fs.unlink("./copy/yo.txt", (err)=>{
    if (err) console.log("isse h bhaiya");
    else console.log("hogaya");
})

// rmdir or rm is used to remove foldeer blank by default

fs.rmdir("./yo", {recursive:true},(err)=>{
    if (err) console.log("isse h bhaiya");
    else console.log("hogaya");
})

// for read files

fs.readFile("renamed.txt", read=(err,data)=>{
    if (err){
        throw("isse h bhaiya");
    } 
    else console.log(String(data))
})

//mkdir is used to make directry
fs.mkdir("./hello", (err)=>{
    if (err) console.log("isse h bhaiya");
     else console.log("hogaya");
})


