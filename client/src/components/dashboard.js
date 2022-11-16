import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card, Form, Stack } from "react-bootstrap";

export default function Dashboard({ setIsOpen }) {
	const [user, loading] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();
	let getUsername
	
	useEffect(() => {
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
		setIsOpen(true);
		if (loading) return;
		if (!user) return navigate("/");
		getUsername();
	}, [user, loading, navigate, getUsername, setIsOpen]);

	return (
		<div id="main_block">
		  <Card>
			<Card.Body id="cardBody">
			  <h1>Are we really strangers?</h1>
			  <h2>Hello {name}</h2>
	
				<Stack>
				</Stack>
			</Card.Body>
		  </Card>
		</div>
	  );
}