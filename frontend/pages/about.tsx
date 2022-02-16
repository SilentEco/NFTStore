import { CashContextProvider } from "context/CashContext";
import Cash from "context/cash";
const About = () => {
  return (
    <div>
      <CashContextProvider>
        <Cash />
      </CashContextProvider>
    </div>
  );
};

export default About;
