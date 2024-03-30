import React, { FC, useMemo, useState } from 'react';
import { Drawer, FloatButton } from 'antd';
import MessageRight from './MessageRight';
import MessageLeft from './MessageLeft';
import SendMessage from './SendMessage';
import { Message } from '../store/reducers/messages/types';
import { useAppSelector } from '../store/hooks';

export const MessageDrawerWrapper: FC = () => {
    const messages: Message[] = useAppSelector((state) => state.messages.messages);
    const [open, setOpen] = useState(false);
    const reversedMessages = useMemo(() => {
        const arr = [...messages];
        return arr.reverse();
    }, [messages]);
    return (
        <>
            <FloatButton onClick={() => setOpen(true)} />
            <Drawer title="BOBI" onClose={() => setOpen(false)} open={open}>
                <div className="relative h-full px-1">
                    <div
                        className="overflow-y-auto overflow-x-hidden  message-box"
                        style={{ maxHeight: 'calc(92vh - 5.5rem)' }}>
                        {reversedMessages.map((message) => (
                            <div key={message.id}>
                                {message.me ? (
                                    <MessageRight message={message} />
                                ) : (
                                    <MessageLeft message={message} />
                                )}
                            </div>
                        ))}
                    </div>
                    <SendMessage />
                </div>
            </Drawer>
        </>
    );
};
