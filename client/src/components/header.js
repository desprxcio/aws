import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../firebase-config";

export default function NavBar({ isOpen }) {
	return (
		<>
			{isOpen === true ? (
				<Navbar>
					<Container>
						<Navbar>
								<Link id="logo" className="text-decoration-none text-danger" to="/dashboard">AWRS 🔥 </Link>
						</Navbar>
						<Nav className="me-1">
							<Link className="me-3" to="/game">
								Game
							</Link>
							<Link className="me-3" onClick={logout}>
								Log Out
							</Link>
						</Nav>
					</Container>
				</Navbar>
			) : (
				<Navbar>
					<Container>
						<Navbar>
						<p alt="Logo"
								id="logo">AWRS 🔥</p>
						</Navbar>
					</Container>
				</Navbar>
			)}
		</>
	);
}