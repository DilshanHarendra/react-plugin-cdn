import { Input } from 'antd';
import { FC } from 'react';

const SendMessage: FC = () => {
    return (
        <div className=" w-full py-2 px-1 flex items-center absolute bottom-0 right-0 left-0 space-x-2 ">
            <Input className="rounded-full py-2" placeholder="Type Something ..." />
            <button type="submit" className="rounded-full bg-primary p-2 hover:opacity-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6 text-white">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                </svg>
            </button>
        </div>
    );
};
export default SendMessage;
