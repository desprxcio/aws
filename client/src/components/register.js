import React, { useEffect, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import "./login.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
    // eslint-disable-next-line
  }, [user, loading]);

  return (
    <>
      <div id="login_block">
        <Card>
          <Card.Body id="cardBody">
            <h1>Are we really strangers?</h1>
            <h2>Sign Up</h2>
            <Form>
              <Form.Group className="form">
                <Form.Label className="labels"> Full Name </Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                />
              </Form.Group>
              <br></br>
              <Form.Group className="form">
                <Form.Label className="labels"> Email </Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <br></br>
              <Form.Group className="form">
                <Form.Label className="labels"> Password </Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <br></br>
              <Stack>
                <Button className="btn btn-danger" onClick={register}>
                  {" "}
                  Sign Up
                </Button>
                <br></br>

                <Button className="btn btn-danger" onClick={signInWithGoogle}>
                  Register with Google
                </Button>
              </Stack>
            </Form>
          </Card.Body>
        </Card>

        <br></br>
        <br></br>

        <div>
          Login<Link to="/">here!</Link>
        </div>
      </div>
    </>
  );
}
