import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoCloudUpload } from "react-icons/go";

const ButtonPage = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="">React Setup TS Project Template</h1>
        <div>
          <Button
            primary
            outline
            className="mb-5"
            onClick={() => {
              console.log("hello world");
            }}
          >
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            <GoCloudDownload />
            Buy now
          </Button>
        </div>
        <div>
          <Button success rounded>
            <GoCloudUpload />
            Sell now!
          </Button>
        </div>
        <div>
          <Button warning>Die now!</Button>
        </div>
        <div>
          <Button danger>Cry now!</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
