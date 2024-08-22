const allOrders = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "orderId": 1
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "orderId": 1
      },
    ]
  },
  {
    "id": 2,
    "userId": 2,
    "productIds": [
      {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "orderId": 2
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "orderId": 2
      },
    ]
  },
];

const allOrdersWithoutProductIds = [
  {
    "id": 1,
    "userId": 1,
  },
  {
    "id": 2,
    "userId": 2,
  },
];

export default {
  allOrders,
  allOrdersWithoutProductIds
};
