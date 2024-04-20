/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, CardMedia, TextField, Typography } from "@mui/material";
import Header from "../components/Head";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { databaseauth } from "./FireConfig/FireBaseConfig";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

function LoginPage() {
  // const [user, setUser] = useState({});
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const logOut = () => {
  //   signOut(databaseauth)
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(databaseauth, (currentUser) =>{
      setUser(currentUser);
    });
    
    return () => {
      unsubscribe();
    }
  }, [])

  const googleSignIn = () => {
    signInWithPopup(databaseauth, provider);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/home");
  //   }
  // }, [user]);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    try {
       signInWithEmailAndPassword(databaseauth, email, password)
      navigate("/home");
    } catch (e) {
      console.error("Error!!!", e);
    }
  };

  function navigateToRegisterPage() {
    navigate("/register");
  }

  return (
    <>
      <Header />
      <div className="login-cont">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
          }}
        >
          <div>
            <CardMedia
              sx={{
                height: 400,
                width: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              image="src/img/Logo.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "400px",
              marginTop: "50px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                // id="outlined-start-adornment"
                label="email"
                type="email"
                // value={email}
                placeholder="อีเมล"
                sx={{ m: 1, width: "45ch" }}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "10px" },
                  // onChange={}
                  startAdornment: <></>,
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                placeholder="รหัสผ่าน"
                label="password"
                // value={password}
                sx={{ mt: 3, width: "45ch" }}
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "10px" },

                  startAdornment: <></>,
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                <hr style={{ width: 120 }} />
              </div>
              <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Mitr, sans-serif",
                  }}
                  variant="h6"
                >
                  หรือ
                </Typography>
              </div>
              <div style={{ marginLeft: "55px", marginTop: "30px" }}>
                <hr style={{ width: 120 }} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <Button>เข้าสู่ระบบด้วย Google</Button> */}
              <Button
                variant="outlined"
                color="info"
                sx={{ width: 380, borderRadius: "10px", color: "gray" }}
                onClick={handleGoogleSignIn}
              >
                เข้าสู่ระบบด้วย Google
                <img
                  src="src\img\google.png"
                  style={{ marginLeft: "10px", height: "20px", width: "20px" }}
                />
              </Button>
            </div>
            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                justifyContent: "start",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "120px", borderRadius: "10px" }}
                  // onClick={navigateTo็HomePage}
                  onClick={handleSignIn}
                >
                  Login
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginLeft: "141px",
                }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#343434" }}
                  sx={{
                    width: "120px",
                    borderRadius: "10px",
                  }}
                  onClick={navigateToRegisterPage}
                >
                  Register
                </Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <p>คุณลืมรหัสผ่าน?</p>
              <div style={{ marginTop: "15px", marginLeft: "20px" }}>
                <Link to={""}>ลืมรหัสผ่าน</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
