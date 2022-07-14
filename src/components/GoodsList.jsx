import GoodsItem from "./GoodsItem";

const GoodsList = ({ goodsList = [] }) => {
  if (!goodsList.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className="goods">
      {goodsList.map((item) => (
        <GoodsItem key={item.id} goodsItem={item} />
      ))}
    </div>
  );
};

export default GoodsList;
