import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { observer } from 'mobx-react'
import DeliverOrder from '../../../entities/DeliverOrder'
import ExpandMore from '../../../entities/ExpandMore'
import OrderBookItem from './OrderBookItem'
import BookButton from '../../../components/button/BookButton'


interface OrderItemProps {
    order: DeliverOrder
}


const OrderCard: React.FC<OrderItemProps> = ({ order }) => {
    const [expanded, setExpanded] = React.useState(false)
    const bookOrders = order.bookOrders

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    let status = 'Создан'

    switch (order.status) {
        case DeliverOrder.BEING_DELIVERED:
            status = 'Отправляется'
            break
        case DeliverOrder.DELIVERED:
            status = 'Доставленл'
            break
        default:
            status = 'Создан'
    }

    return (<Card variant={'outlined'} sx={{
            m: 1,
            width: 1,
        }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={`Заказ от ${order.date}`}
                subheader={`Статус: ${status}`}
                sx={{
                    py: 1,
                }}
            />
            <CardContent
                sx={{
                    px: 2,
                    py: 1,
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    Аддрес доставки: {`${order.addressIndex}, ${order.city}, ${order.street}, ${order.house}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Количество книг: {order.numObBooks}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Stack sx={{
                    p: 1,
                }}>
                    {bookOrders.map((bookOrder) => <OrderBookItem bookOrder={bookOrder}/>)}

                    <BookButton
                        variant={'outlined'}
                        sx={{
                            mt: 2,
                            alignSelf: 'end',
                        }}
                    >
                        <Typography variant={'h6'}
                                    fontWeight={500}
                                    fontSize={26}
                                    fontFamily={'"Montserrat", sans-serif'}
                        >
                            Итого: {order.totalSum}руб.
                        </Typography>
                    </BookButton>
                </Stack>
            </Collapse>
        </Card>
    )
}

export default observer(OrderCard)