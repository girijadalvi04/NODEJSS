const { MongoClient } = require('mongodb')
const Url = "mongodb+srv://girijadalvi:Girija%40123@cluster0.hq5sc.mongodb.net/mydatabase"
const client = new MongoClient(Url)

async function run() {
    try {
        await client.connect();
        const db = client.db()

        // insert
    //      const myobj = [{ name: "Som", age: "24", address: "Pune" },
    //         { name: "tom", age: "24", address: "Delhi" },
    //   { name: "Som", age: "24", address: "Mumbai"},
    //      ]

        // var query = {address : "Mumbai"}
        //            const result = await db.collection('Information').find(query).toArray()
//       let mysort = {name: 1}
    // const result = await db.collection('mydatabase').find().sort(mysort).toArray()  
// console.log("result")

// find
// const result = await db.collection('NEW').find({})
        const result = await db.collection('NEW').find({},{projection:{_id :0, name :1,age : 1}}).toArray();
         console.log(result);
        // console.log(result._id);
        // console.log(result.age);

        // insert
        // const result = await db.collection('NEW').insertOne(myobj)
        //    const result = await db.collection('NEW').insertMany(myobj)
        // console.log(`record with_id: ${result.insertedId}`)
        // console.log("multiple records inserted")



    } catch (error) {
        console.error("error", error);
    }
    finally {
        client.close();
    }
}
run();