import "server-only";
import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";

export const getProductFromDb = async () => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  return productsCollection.find().toArray();
};
export const getProductById = async (id) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = { _id: new ObjectId(id) };
  return productsCollection.findOne(query);
};
export const getProductByCategory = async (category) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = { category: category };
  return productsCollection.find(query).toArray();
};
