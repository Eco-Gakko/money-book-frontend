import Menu from "../../common/container/Menu";
import DashBoardStyle from "../scss/DashBoardContainer.module.scss";
import Header from "../../common/container/Header";
import CategoryOutcome from "../component/CategoryOutcome";
import Expenditure from "../component/Expenditure";
import ThisWeek from "./ThisWeek";

const DashBoardContainer = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <Menu />

        <div className={DashBoardStyle.wrap}>
          <div className={DashBoardStyle.group1Wrap}>
            <div className={DashBoardStyle.categoryOutcome}>
              <p className={DashBoardStyle.categoryOutcomeText}>분류별 지출</p>
              <CategoryOutcome />
            </div>
            <div className={DashBoardStyle.inAndOutcome}>
              <p className={DashBoardStyle.inAndOutcomeText}>
                결제 방식별 지출
              </p>
              <Expenditure />
            </div>
          </div>
          <div className={DashBoardStyle.group2Wrap}>
            <div className={DashBoardStyle.spendPercentage}>
              <p className={DashBoardStyle.spendPercentageText}>예산 소진율</p>
            </div>
            <div className={DashBoardStyle.thisWeek}>
              <p className={DashBoardStyle.thisWeekText}>금주의 지출</p>
              <ThisWeek />
            </div>
            <div className={DashBoardStyle.noOutcome}>
              <p className={DashBoardStyle.noOutcomeText}>지출 없는날</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContainer;
