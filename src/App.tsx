import { useState } from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { Stack } from '@mui/material';
import Chat from './components/Chat';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 30 },
        right: { xs: 16, md: 30 },
        zIndex: 1000000,
        cursor: 'pointer',
        borderRadius: isChatOpen ? '8px' : '50%',
        background: isChatOpen ? 'linear-gradient( 0deg, #333333 0%, #eb5c49 100%)' : '#eb5c49',
        width: isChatOpen ? { xs: '80%', md: '400px' } : { xs: '50px', md: '60px' },
        height: isChatOpen ? { xs: '60%', md: '600px' } : { xs: '50px', md: '60px' },
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
      onClick={() => !isChatOpen && setIsChatOpen(true)}
    >
      {isChatOpen ? (
        <Chat setIsChatOpen={setIsChatOpen} />
      ) : (
        <ChatBubbleIcon
          sx={{
            color: '#fff',
            fontSize: { xs: 25, md: 32 },
          }}
        />
      )}
    </Stack>
  );
};

export default App;
