import { TextField, Typography, Container } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { KeyboardArrowRight } from "@mui/icons-material/"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import { Button } from "./Button/Button"
import { useAuthStore } from "../context/authStore"

function LoginForm() {
  const { loginUser, login } = useAuthStore()

  const navigate = useNavigate()

  // endless loop
  // const check = () => {
  // login()
  // }

  console.log(loginUser)

  //inputState
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  //errorStates
  const [usernameErr, setUsernameErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setUsernameErr(false)
    setPasswordErr(false)

    // form validation

    // put this in a seperate hook ?

    if (username === "") {
      setUsernameErr(true)
    }
    if (password === "") {
      setPasswordErr(true)
    }

    fetch("https://apilogin.herokuapp.com/api/auth/signin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then(() => login())
      .then(() => navigate("/succes"))
      .then(() => console.log("account logged in", loginUser))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Typography
        align="center"
        variant="h6"
        color="textSecondary"
        gutterBottom
      >
        instapigeon
      </Typography>

      <Container maxWidth="xs">
        <form style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ mb: 2 }}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            variant="outlined"
            required
            error={usernameErr}
          />
          <TextField
            sx={{ mb: 2 }}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            variant="outlined"
            required
            error={passwordErr}
          />
          <Button
            onClick={handleSubmit}
            buttonText="Submit"
            iconComponent={<AcUnitIcon />}
            // iconComponent={<KeyboardArrowRight />}
            // backgroundcolor="secondary"
          />
        </form>
      </Container>
    </>
  )
}

export default LoginForm