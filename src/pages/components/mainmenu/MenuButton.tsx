import { Badge, ButtonBase, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import React from 'react'

interface MenuButtonProps{
    name: string,
    badgeContent: number
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, badgeContent }) => (
    <ButtonBase>

        <Badge badgeContent={badgeContent} color={'error'}>
            <ShoppingCartOutlinedIcon/>
        </Badge>

        <Typography variant={'h6'}>
            name
        </Typography>
    </ButtonBase>
)