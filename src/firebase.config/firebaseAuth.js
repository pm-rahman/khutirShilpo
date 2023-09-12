import {getAuth,GoogleAuthProvider} from "firebase/auth";
import app from "./firebase.config";

export const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export default auth;