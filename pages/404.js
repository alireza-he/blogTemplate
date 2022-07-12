import { Alert } from "antd";
import Link from "next/link";
import { Button } from "reactstrap";

export default function Custom404() {
  return (
    <div className="h_100vh d-flex align-items-center justify-content-center">
      <Alert
        message="404 error"
        description={
          <div>
            <p>The page you were looking for could not be found</p>
            <Link href="/">
              <Button color="primary" size="sm" outline>
                home page
              </Button>
            </Link>
          </div>
        }
        type="info"
        className="alert_design"
        showIcon
      />
    </div>
  );
}
