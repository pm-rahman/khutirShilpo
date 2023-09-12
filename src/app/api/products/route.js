import { getProductFromDb } from "@/server/productsCollection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
const result = await getProductFromDb();
return NextResponse.json(result);
};
