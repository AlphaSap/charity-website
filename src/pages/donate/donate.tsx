import React from "react";
import RevolutCheckoutLoader from "@revolut/checkout";

function Donate() {
  let x = () => {};

  x();
  //
  return (
    <>
      <div>Donate</div>
      <div id="sumup-card"></div>
      <script
        type="text/javascript"
        src="https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
      ></script>
      <script type="text/javascript">{x()}</script>
    </>
  );
}

export default Donate;
