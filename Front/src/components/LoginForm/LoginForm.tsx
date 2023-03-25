import { Typography, Container, TextField } from "@mui/material"
import { Button } from "../Button/Button"
import {Link} from "@mui/material"
import AcUnitIcon from "@mui/icons-material/AcUnit"

interface LoginFormProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
  setUsername: React.Dispatch<React.SetStateAction<string>>
  usernameErr: boolean
  setPassword: React.Dispatch<React.SetStateAction<string>>
  passwordErr: boolean
}

export const LoginForm = ({
  handleLogin,
  setUsername,
  usernameErr,
  setPassword,
  passwordErr,
}: LoginFormProps) => {
  return (
    <>
      <Container maxWidth="xs">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <TextField
            sx={{ mb: 2, color: "7F96FF" }}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
            size="small"
            required
            error={usernameErr}
          />
          <TextField
            sx={{}}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            size="small"
            required
            error={passwordErr}
          />
          <Link><p
            style={{
              fontSize: "9px",
              fontWeight: "bold",
              fontFamily: "worksans",
              textAlign: "center",
              marginTop: "6px",
              marginBottom: "50px",
            }}
          >
            forgot your password? Don't be ashamed, it happens
          </p></Link>
          <Button
            onClick={handleLogin}
            buttonText="Submit"
            // iconComponent={<AcUnitIcon />}
            // iconComponent={<KeyboardArrowRight />}
            // backgroundcolor="secondary"
          />
        </form>
      </Container>
    </>
  )
}
