import ExpenditureStyle from "../scss/Expenditure.module.scss";

const Expenditure = () => {
  return (
    <>
      <div className={ExpenditureStyle.wrap}>
        <div className={ExpenditureStyle.groupWrap}>
          <p className={ExpenditureStyle.title}> 전체 </p>
          <p className={ExpenditureStyle.totalPrice}> 873,220원</p>
        </div>
        <p className={ExpenditureStyle.subTitle}>현대카드</p>
        <p className={ExpenditureStyle.subPrice}>112,750원</p>
        <p className={ExpenditureStyle.subTitle}>신한카드</p>
        <p className={ExpenditureStyle.subPrice}>89,500원</p>
        <p className={ExpenditureStyle.subTitle}>현금</p>
        <p className={ExpenditureStyle.subPrice}>477,690원</p>
      </div>
    </>
  );
};

export default Expenditure;
