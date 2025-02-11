const { log } = require('console');
const fs = require('fs')
const http = require('http')
//  const path = require('path')
const targetpath= "D:\\htmllllll\\test"
http.createServer((req, res) => {
    
    console.log("server created");

    // fs.open("server.js","r" , (err) => {
    //     if (err) throw err
    //     console.log("file opened");
    //     return res.end();

    // })
//     fs.open("abc.txt","r+",(err, file)=>{
//   if(err){
//     console.error("error while opening file");
//   return;
// }
// console.log("file opened for reading/writing");



//     })
    
// fs.open("firrr.txt","a",(err, file)=>{
//     if(err){
//         console.error("error while appending in file");
    
    
//     return;
//     }console.log("file opened in append")
// })

// writefile

// fs.writeFile("mynewfile.txt","Hghtthhgfggdfgff!",(err)=>{
// if (err) throw err;
//  console.log("saved")
// })

// rename file

// fs.rename("mynewfile.txt","abc.txt",(err)=>{
//  if (err) throw err;
// console.log("saved")

//  })
// close File

// fs.open("abc.txt","r",(err, file)=>{
//     if (err){
//         console.log("error while opening file")
//         return;
//     }
//     fs.close(file,(err)=>{
//         if (err){
//             console.log("error while closing file");
//             return;
//         }console.log("file closed");
// }) 
//     })

    //  delete file
// fs.unlink("inde.html", (err) => {
//       if (err) throw err
//        console.log("file deleted");
//    return res.end()
//   })
    //  append file
    // fs.appendFile("inde.html",'<h2>This is append method</h2>',(err, data)=>{
    //   if (err) throw err
    //  console.log("file updated");
    // //  res.write(data);
    //       return res.end()
    // })
//     //     // readfile
//   fs.readFile("ind.html",(err, data)=>{
//    res.writeHead(200,{'content-type':'text/html'})
//    if(err)throw err
//      res.write(data);
//      return res.end()
//   })


   fs.mkdir(targetpath,{recursive : true },(err)=>{

 if (err){
    return console.error(err)
   }
       console.log("directory is created")
 })

    // console.log(__dirname);

   
//     fs.mkdir(targetpath,{recursive:true},(err)=>{

//         if (err){
//                     return console.error(err)
//                 }
//                 console.log("direc created")
//     })


// read and write file 
// console.log("writing in file")
// fs.writeFile('input.txt', 'heloooowjdjd',(err)=>{
// if(err){
//     return console.error(err);
// }
// console.log("file written")
// console.log("lets read file")

// fs.readFile('input.txt',(err,data)=>{
//     if(err){
//         return console.log.error(err);
//     }
//     console.log(data.toString())
// })
// })

// let fileexist =fs.existsSync('input.txt')
// console.log("file exists",fileexist)

//  fileexist =fs.existsSync('inpu.txt')
// console.log("file exists",fileexist) 

// function getCurrentfilename(){
//     fs.readdirSync(__dirname).forEach(file=>{
//         console.log(file)
//     })
// }
// getCurrentfilename()


// fs.open("server.js","r",(err)=>{
//     if(err) throw err 
//     console.log("opened")
//     return res.end()
// })
// fs.open("example.txt","a+",(err,file)=>{
//     if(err) {
//         console.err("error")
//         return ;
//     }
// console.log("append")
// fs.appendFile(file, "hello",(err)=>{
//     console.log("append in file")
// })
// fs.close(file,(err)=>{
//     console.log("closed")
// })

// })



}).listen(4000) 