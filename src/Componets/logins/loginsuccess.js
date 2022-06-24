import { Button } from "../Button";
import { Link } from "react-router-dom";


const LoginSuccess = () => {
    return (
      <div>
        <h1>Login Success</h1>
        <Button
          className="register-input-btn login-btn"
          type="submit"
          onClick={<Link to='/LevyCalculator'></Link>}
        >
          Go to the Levy Calculator
        </Button>
      </div>
    );
  };
  
  export default LoginSuccess;
  