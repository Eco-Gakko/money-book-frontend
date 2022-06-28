import Menu from "../../common/container/Menu";
import InOutcomeStyle from "../scss/InOutcomeContainer.module.scss";
import Header from "../../common/container/Header";

const InOutcomeContainer = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <Menu />
        <div className={InOutcomeStyle.wrap}>수입지출</div>
      </div>
    </>
  );
};

export default InOutcomeContainer;
