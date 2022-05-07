import { connectDb } from "./connectDb.js";

// export const getAllDesserts = async (req, res) => {
//     const db = connectDb();
//     try {
//         const snapshot = await db.collection('desserts').get();
//         const dessertArray = snapshot.docs.map(doc => {
//             let dessert = doc.data();
//             dessert.id = doc.id;
//             return dessert;
//         })
//         res.send(dessertArray); 
// } catch (err) {
//     res.status(500).send(err);
// }
// }

export const getAllDesserts = async (req, res) => {
    const db = connectDb();
    const desserts = await db.collection("desserts").get();
    const dessertsArray = desserts.docs.map(doc => doc.data());
    res.status(200).send(dessertsArray);
  }