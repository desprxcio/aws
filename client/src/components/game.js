import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function NavBar({ isOpen }) {
	return (<div>all the cards are here</div>)
}