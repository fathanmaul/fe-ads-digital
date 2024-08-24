import {
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./firebase";
import { use } from "react";
import { collection } from "firebase/firestore";
import bcrypt from "bcrypt";
const firestore = getFirestore(app);

export async function register(data: {
  username: string;
  email: string;
  password: string;
  phone: string;
  country_code: string;
}) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return {
      status: false,
      statusCode: 400,
      message: "Email already exists",
    };
  } else {
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return {
        status: true,
        statusCode: 200,
        message: "User registered successfully",
      };
    } catch (e: any) {
      return {
        status: false,
        statusCode: 400,
        message: e.message,
      };
    } 
  }
}

export async function login(data: { email: string; password: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const querySnapshot = await getDocs(q);
  const user = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

export async function getUserByEmail(email:string){
  const userDoc = await getDocs(query(collection(firestore, "users"), where("email", "==", email)));
  const user = userDoc.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
