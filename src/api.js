// import {useState,useEffect} from "react"
// import {db} from "./firebase-config"
// import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"


//  const [newName, setNewName] = useState("")
//  const [newAge, setNewAge] = useState(0)
//  const [users, setUsers] = useState([])
// //  const usersCollectionRef = collection(db,"users")
//  const createUser = async()=> {
//    await addDoc(usersCollectionRef, { name:newName, age:Number(newAge) })
//  }

//  const updateUser = async(id, age)=>{
//    const userDoc = doc(db, "users", id)
//    const newFields = {age: age + 1}
//    await updateDoc(userDoc,newFields)
//  }
//  const deleteUser = async(id)=>{
//    const userDoc = doc(db, "users", id)
//    await deleteDoc(userDoc)
//  }
//  useEffect(()=>{

//    const getUsers = async()=>{
//      const data = await getDocs(usersCollectionRef)
//      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
//    }
//    getUsers()
//  }, [])
//  console.log(users);