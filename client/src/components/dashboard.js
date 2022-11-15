import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Dashboard({ setIsOpen }) {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const getUsername = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};

	useEffect(() => {
		setIsOpen(true);
		if (loading) return;
		if (!user) return navigate("/");
		getUsername();
	}, [user, loading, navigate, getUsername, setIsOpen]);

	return (<div>
		<div>Hey! {name}</div>
		
		</div>
	);
}