import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import {ChangeEvent, KeyboardEvent, useContext, useState, MouseEvent} from "react";
import Box from '@mui/material/Box';
import {Fade, InputAdornment, Popper, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {OpenAIClient} from "@azure/openai";
import { AzureKeyCredential } from '@azure/core-auth';
import {ChatContext} from "../providers/aidaProvider";
import {AppContext} from "../providers/appProvider";

const Aida = () => {
    const context: any = useContext(AppContext)
    const {endPoint, azureApiKey, deploymentId, } = useContext(ChatContext)
    const [question, setQuestion] = useState<string>("")
    const [response, setResponse] = useState<string>("")
    const [showAida, setShowAida] = useState(false)
    const [thinking, setThinking] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const onClickAida =
        (event: MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setShowAida(!showAida);
        };
    const onChangeInput = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuestion(target.value)
    }

    const client = new OpenAIClient(endPoint, new AzureKeyCredential(azureApiKey));

    const getResponse = async () => {
        const result = await client.getChatCompletions(deploymentId, [
            { role: "user", content: question },
        ]);

        setResponse('Claro, aquí tienes los datos que has pedido');
        // setResponse(result?.choices[0]?.message?.content as string || 'Fail');
        if (result?.choices[0]?.message?.content) setThinking(false)
        context.setMarkers([
            {
                key: `62`,
                position: [41.386439, 2.168858],
                text: 'Station number 62',
                amount: 4,
                probability: 89
            },
            {
                key: `63`,
                position: [41.386439, 2.169417],
                text: 'Station number 63',
                amount: 1,
                probability: 40
            },
            {
                key: `64`,
                position: [41.387469, 2.169048],
                text: 'Station number 64',
                amount: 8,
                probability: 35
            },
            {
                key: `65`,
                position: [41.387678, 2.169587],
                text: 'Station number 65',
                amount: 0,
                probability: 95
            },
            {
                key: `395`,
                position: [41.386009, 2.170212],
                text: 'Station number 395',
                amount: 9,
                probability: 60
            }
        ])
    }

    const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter' && !e.shiftKey){
            getResponse()
            setThinking(true)
            setQuestion("")
        }
    }

    return (
        <Box>
            <Popper
                sx={{ zIndex: 100000 }}
                open={showAida}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper sx={{padding: 2}}>
                            <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={30}
                                sx={{marginBottom: 1}}
                                disabled
                                fullWidth
                                value={response}
                                InputProps={{
                                    startAdornment: thinking ? <InputAdornment position="start">Thinking...</InputAdornment> : null,
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Write a question"
                                id="fullWidth"
                                multiline
                                onChange={onChangeInput}
                                value={question}
                                onKeyDown={keyPress}
                            />
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                onClick={onClickAida}
                style={{cursor: "pointer"}}
            >
                <Avatar alt="Remy Sharp" src="robot.png"/>
            </StyledBadge>
        </Box>
    );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default Aida
