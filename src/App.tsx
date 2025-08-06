import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
  console.log("oi");
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
        ornare justo, ac aliquet lacus. Aliquam blandit condimentum dictum.
        Proin tincidunt gravida tincidunt. Nulla enim arcu, vestibulum porta
        ultricies id, finibus ac libero. Fusce eget odio in lorem vestibulum
        ultrices vel id ante. Maecenas accumsan dui sollicitudin, ullamcorper
        tellus ac, tincidunt sem. Donec imperdiet metus nisi, sed tempor diam
        pharetra ut. Nulla vel erat vestibulum, fermentum eros ut, volutpat
        nulla. Praesent tincidunt tortor ante, in facilisis metus fermentum ac.
      </p>
    </>
  );
}

export { App };
