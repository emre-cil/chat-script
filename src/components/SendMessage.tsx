import { Stack, TextField } from '@mui/material';
import { FC, useRef } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

interface SendMessageProps {
  sendMessageHandler: any;
}

const SendMessage: FC<SendMessageProps> = ({ sendMessageHandler }) => {
  const messageRef = useRef<any>(null);
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        borderTop: '1px solid #e0e0e0',
        p: 1,
        pt: 2,
      }}
    >
      <TextField
        // disabled={!canType}
        // onChange={(e) => setTyping(e.target.value)}
        sx={{
          zIndex: 10000,
          maxHeight: '40px',
          '& .MuiOutlinedInput-root': {
            height: '40px',
            '& fieldset': {
              border: '1px solid #e0e0e0',
              borderRadius: '20px',
            },
          },
        }}
        inputRef={messageRef}
        // placeholder={(canType ? t('typeMessage') : t('selectProblem')) || 'Type...'}
        InputProps={{
          onKeyPress: (e: any) => {
            if (e.key === 'Enter') {
              sendMessageHandler(e.target.value);
              messageRef.current.value = '';
            }
          },
        }}
        id="outlined-basic"
        variant="outlined"
        size="small"
        fullWidth
      />
      <SendRoundedIcon
        onMouseDown={() => {
          sendMessageHandler(messageRef.current.value);
          messageRef.current.value = '';
        }}
        sx={{
          fontSize: 20,
          ml: 0.25,
          backgroundColor: 'secondary.main',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          p: 1.25,
        }}
      />
    </Stack>
  );
};

export default SendMessage;
