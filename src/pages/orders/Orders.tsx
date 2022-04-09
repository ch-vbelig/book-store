import rootStore from '../../stores/RootStore'
import { Divider, List, Stack, SvgIcon, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'
import { observer } from 'mobx-react'
import OrderCard from './components/OrderCard'


const Orders: React.FC = () => {
    const orders = rootStore.orders.orders

    return (
        <Stack
            sx={{
                px: 6,
                py: 3,
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
            >
                <Typography variant={'h6'}
                            fontWeight={600}
                            fontSize={26}
                            fontFamily={'"Montserrat", sans-serif'}
                >
                    Заказы
                </Typography>

                <SvgIcon fontSize={'large'} htmlColor={'black'}>
                    <StarIcon/>
                </SvgIcon>
            </Stack>
            <Divider/>
            <List
                sx={{
                    p: 2,
                    height: '70vh',
                    // width: '100%',
                    bgcolor: 'background.bookElements',
                    position: 'relative',
                    overflow: 'auto',
                    // maxHeight: 300,
                    '& ul': { margin: 0, padding: 0 },
                    '&::-webkit-scrollbar': {
                        width: 1,
                        background: 'transparent',
                    },
                }}
            >
                {orders.map((order) => <OrderCard order={order}/>)}

            </List>


        </Stack>
    )
}

export default observer(Orders)