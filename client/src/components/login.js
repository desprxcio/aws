import React, { useEffect, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

export default function Login({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    if (user) navigate("/dashboard");
    // eslint-disable-next-line
  }, [user, loading]);

  return (
    <div id="login_block">
      <Card>
        <Card.Body id="cardBody">
          <h1>Are we really strangers?</h1>
          <h2>Login</h2>
          <Form>
            <Form.Group className="form">
              <Form.Label className="labels"> Email </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="E-mail Address"
              />
            </Form.Group>

            <br></br>
            <Form.Group className="form">
              <Form.Label className="labels"> Password </Form.Label>
              <Form.Control
                type={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <br></br>

            <Stack>
              <Button
                className="btn btn-danger"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Login
              </Button>
              <br></br>

              <Button className="btn btn-danger" onClick={signInWithGoogle}>
                Login with Google
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>

      <br></br>
      <br></br>
      <div>
        Register <Link to="/register">here!</Link>
      </div>
    </div>
  );
}
