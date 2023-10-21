import { OrderItem } from './order-item';

const OrderItems = (items) => {
  return items.map((item) => {
    return <OrderItem name={item.name} image={item.image} />;
  });
};

export const Order = ({ items }) => {
  let emptyClass = 'empty-order--hide';
  if (items.length === 0) {
    emptyClass = '';
  }
  return (
    <main className="order">
      <div className="order__content container">
        <h1>Vaše objedávnka</h1>
        <p className={`empty-order ${emptyClass}`}>
          Zatím nemáte nic objednáno
        </p>
        <div className="order__items">{OrderItems(items)}</div>
      </div>
    </main>
  );
};
