import { Box, Stack, Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';

interface MessagesProps {
  messages: any;
}

const Messages: FC<MessagesProps> = ({ messages }) => {
  const scrollEndRef = useRef<any>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        py: 2,
        // scroll
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey',
        },
      }}
      gap={1}
    >
      {messages?.map((item: any) => (
        <Box
          key={item.time}
          sx={
            {
              color: 'white',
              pt: 1.5,
              pb: 0.5,
              px: 2,
              mx: 1,
              maxWidth: '80%',
              alignSelf: item.sender === 1 ? 'flex-end' : 'flex-start',
              borderRadius: '10px',
              borderTopRightRadius: item.sender === 1 && '0px',
              borderTopLeftRadius: item.sender === 0 && '0px',
              wordWrap: 'break-word',
              background:
                item.sender === 0
                  ? 'linear-gradient(90deg, #222489 0%, #3b3da3 100%)'
                  : 'linear-gradient(90deg, #EB384D 0%, #F35C49 100%)',
            } as any
          }
        >
          {item.message}

          {item.time && (
            <Typography
              variant="body2"
              sx={{
                display: 'block',
                textAlign: item.sender === 0 ? 'left' : 'right',
                color: 'white',
                mt: 0.5,
                fontSize: '0.65rem',
              }}
            >
              {`${item.time.getHours()}:${
                item.time.getMinutes() < 10 ? `0${item.time.getMinutes()}` : item.time.getMinutes()
              }`}
            </Typography>
          )}
        </Box>
      ))}
      <div ref={scrollEndRef} />
    </Stack>
  );
};

export default Messages;
