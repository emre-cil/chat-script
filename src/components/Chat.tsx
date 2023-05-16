import { IconButton, Stack } from '@mui/material';
import { FC, useState } from 'react';
import Messages from './Messages';
import SendMessage from './SendMessage';
import CloseIcon from '@mui/icons-material/Close';

interface ChatProps {
  isChatOpen: boolean;
  setIsChatOpen: any;
}

const Chat: FC<ChatProps> = ({ isChatOpen, setIsChatOpen }) => {
  const [messages, setMessages] = useState<any>([]);

  const sendMessageHandler = (message: string) => {
    const m = message?.trim();
    if (m) {
      setMessages((prev: any) => [
        ...prev,
        {
          sender: 1,
          time: new Date(),
          message: message,
        },
      ]);
    }
  };
  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
        pt: 7,
      }}
    >
      <IconButton onClick={() => setIsChatOpen(false)} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <CloseIcon
          sx={{
            color: '#fff',
          }}
        />
      </IconButton>
      <Stack
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: 'grey.100',
          color: 'white',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Messages messages={messages} />
        <SendMessage sendMessageHandler={sendMessageHandler} />
      </Stack>
    </Stack>
  );
};

export default Chat;
