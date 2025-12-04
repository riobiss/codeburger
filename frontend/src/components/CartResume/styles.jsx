import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  padding: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
      grid-gap: 10px 50px;
    .title {
      grid-area: title;
      margin-bottom: 15px;
    }
    .items {
      grid-area: items;
      font-size: 15px;

    }
    .items-price {
      grid-area: items-price;
      font-size: 15px;

    }
    .delivery-tax {
      grid-area: delivery-tax;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 20px;
  }
`
