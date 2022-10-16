import faker from 'faker';
// import { sample } from 'lodash';
// import faker from 'faker/locale/en';
export const LoremIpsum =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

export const shortVersion = 'Contrary to popular belief';

export const loremShort = faker.lorem.lines(1);
export const loremlong = faker.lorem.paragraph(5);

// export const Posts = [...Array(25)].map((_, index) => ({
//   _id: faker.datatype.uuid(),
//   isDeliveryRequest: faker.datatype.boolean(),
//   title: faker.commerce.productName(),
//   description: faker.lorem.text(),
//   from: faker.address.country(),
//   to: faker.address.country(),
//   category: faker.commerce.productName(),
//   weightFrom: 1,
//   weightTo: 5,
//   length: faker.datatype.number(),
//   height: faker.datatype.number(),
//   breadth: faker.datatype.number(),
//   urgent: sample(['low', 'medium', 'high']),
//   deliveryDate: faker.date.month(),
//   amountFrom: faker.datatype.number(),
//   amountTo: faker.datatype.number(),
// }));
export const Posts ={
  isDeliveryRequest: true,
  title: 'I need a delivery',
  description: 'I need a delivery',
  from: 'India',
  to: 'USA',
  category: 'Electronics',
  weightFrom: 1,
  weightTo: 5,
  length: 1,
  height: 1,
  breadth: 1,
  urgent: 'low',
  deliveryDate: '2021-09-01',
  amountFrom: 1,
  amountTo: 5,
}
