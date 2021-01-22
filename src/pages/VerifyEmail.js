import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function VerifyEmail() {
  const { user, isLoading } = useAuth0();
  const history = useHistory();

  if (user !== undefined && user.email_verified) {
    history.push("/");
  }

  return (
    <div id="form-bg" className="verify-email">
      {!isLoading && user !== undefined && !user.email_verified && (
        <>
          <p className="verify-email pt-5">
            Please verify your e-mail before continueing
          </p>
          <Button onClick={history.go(0)}>Try Again</Button>
        </>
      )}
    </div>
  );
}
