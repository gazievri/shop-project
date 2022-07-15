import GoodsItem from "./GoodsItem";

const GoodsList = ({ goodsList = [], handleClickBuy }) => {
  if (!goodsList.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className="goods">
      {goodsList.map((item) => (
        <GoodsItem key={item.mainId} goodsItem={item} handleClickBuy={handleClickBuy} />
      ))}
    </div>
  );
};

export default GoodsList;
