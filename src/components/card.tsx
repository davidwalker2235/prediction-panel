import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea,} from '@mui/material';

const MultiActionAreaCard = (
    {   children,
        title
    }: {
        children: any,
        text: string,
        title: string,
        hasFullScreen?: boolean,
        hasExpand?: boolean,
        expandContent?: any,
        isExpanded?: boolean
    }) => {

    return (
        <Card
          sx={[
            (theme) => ({
              color: '#fff',
              backgroundColor: theme.palette.primary.main,
              ...theme.applyStyles('dark', {
                backgroundColor: '#233044',
              })
            }),
          ]}
        >
            <CardActionArea>
                <CardContent>
                    {children}
                    <Typography gutterBottom variant="h6" component="div" sx={{paddingTop: 1}}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MultiActionAreaCard;