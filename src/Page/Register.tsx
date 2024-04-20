import { Box } from "@mui/system";
import Header from "../components/Head";
// import "./Register.css";
import {
  Button,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, {  useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { databaseauth, database } from "./FireConfig/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [city, setCity] = React.useState("");
  const [phone, setPhone] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(database, "Account"));

    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      email: doc.id,
    }));

    return newData;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password.length < 6) {
      navigate("/register");
      console.log("Error!!!");
    } else if (password.length >= 6) {
      const data = await fetchPost();
      if (data.filter((f) => f.email == email).length == 0) {
        try {
          createUserWithEmailAndPassword(databaseauth, email, password);
          const docRef = await addDoc(collection(database, "Account"), {
            name: name,
            nickname: nickname,
            birthday: birthday,
            city: city,
            phone: phone,
            email: email,
            password: password,
          });
          console.log("Success!!! ", docRef);
          navigate("/");
        } catch (e) {
          console.error("Error!!!", e);
        }
      }
    }
  };

  function navigateToLoginPage() {
    navigate("/");
  }
  return (
    <>
      <Header />
      <div className="register-cont">
        <div
          style={{
            justifyContent: "start",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "155px",
            }}
          >
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
              marginTop: "80px",
              marginLeft: "300px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontWeight: "bold",
                }}
                variant="h5"
              >
                ลงทะเบียน
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: 500,
                  height: 600,
                  borderRadius: 10,
                  backgroundColor: "#D9D9D9",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px",
                  }}
                >
                  <div style={{ display: "flex", marginLeft: "40px" }}>
                    <Typography gutterBottom variant="h6">
                      ข้อมูลส่วนตัว
                    </Typography>
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="รูปภาพผู้ใช้ (อัปโหลดไฟล์ .jpg หรือ .png)"
                      sx={{ m: 1, width: "20pc" }}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                    <div style={{ marginTop: "7px" }}>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#343434" }}
                        sx={{
                          height: "35px",
                          borderRadius: "30px",
                        }}
                      >
                        อัพโหลด
                      </Button>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="ชื่อ-นามสกุล"
                      type="name"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="ชื่อเล่น"
                      type="nickname"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setNickname(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="วันเดือนปีเกิด"
                      type="birthday"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setBirthday(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <></>,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "40px" }}>
                    <FormControl sx={{ width: 415 }}>
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ marginTop: "-5px" }}
                      >
                        จังหวัด
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        // placeholder="จังหวัด"
                        value={city}
                        label="จังหวัด"
                        type="city"
                        onChange={(e) => setCity(e.target.value)}
                        sx={{
                          borderRadius: 20,
                          bgcolor: "white",
                          height: "40px",
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>ขอนแก่น</MenuItem>
                        <MenuItem value={20}>กาฬสินธุ์</MenuItem>
                        <MenuItem value={30}>มหาสารคาม</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="เบอร์โทรศัพท์"
                      type="phone"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setPhone(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "40px" }}>
                    <Typography gutterBottom variant="h6">
                      อีเมลและรหัสผ่าน
                    </Typography>
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="อีเมล"
                      type="email"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <TextField
                      placeholder="รหัสผ่าน"
                      type="password"
                      sx={{ m: 1, width: "26pc" }}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        sx: {
                          borderRadius: "20px",
                          bgcolor: "white",
                          height: "35px",
                        },
                        startAdornment: <>{/* <h3>Prapanpong</h3> */}</>,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginRight: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="info"
                        sx={{ width: "100px", borderRadius: "10px" }}
                        onClick={handleSubmit}
                      >
                        ยืนยัน
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#343434" }}
                        sx={{
                          width: "100px",
                          borderRadius: "10px",
                        }}
                        onClick={navigateToLoginPage}
                      >
                        กลับ
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
