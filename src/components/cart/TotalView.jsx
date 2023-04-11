import { useState, useEffect } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getCartTotal } from '../../feature/cartSlice';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`


const TotalView = ({ cart, totalPrice, totalQuantity }) => {
    // const [price, setPrice] = useState(0);
    // const [discount, setDiscount] = useState(0)

    // useEffect(() => {
    //     totalAmount();
    // }, [cartItems]);

    // const totalAmount = () => {
    //     let price = 0, discount = 0;
    //     cartItems.map(item => {
    //         price += item.price.mrp
    //         discount += (item.price.mrp - item.price.cost)
    //     })
    //     setPrice(price);
    //     setDiscount(discount);
    // }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, []);

    const discount = 5;

    return (
        <Box>  
           
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cart?.length} item)
                    {/* <Price component="span">₹220</Price> */}
                    <Price component="span">${totalPrice}</Price>
                </Typography>
                <Typography>Discount
                    {/* <Price component="span">-$0</Price> */}
                    <Price component="span">-${discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">$40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    {/* <Price>₹2000</Price> */}
                    <Price>${totalPrice - discount + 40}</Price>
                </TotalAmount>
                {/* <Discount>You will save ₹10 on this order</Discount> */}
                <Discount>You will save ${40 - discount} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;