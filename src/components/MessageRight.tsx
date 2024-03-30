import { Message } from '../store/reducers/messages/types';
import { FC } from 'react';

interface PropsI {
    message: Message;
}
const MessageRight: FC<PropsI> = ({ message }) => {
    return (
        <div className="w-4/5 bg-gray-200 p-2 mt-4 rounded-md relative rounded-md ml-2">
            <p>{message?.message}</p>
            <svg
                className="w-6 h-6 absolute -left-2 -bottom-2 text-gray-200 z-50"
                viewBox="0 0 323.368 327.071">
                <path
                    id="Polygon_1"
                    data-name="Polygon 1"
                    d="M144.659,7.97a11,11,0,0,1,15.682,0L286.587,136.285A11,11,0,0,1,278.746,155H26.254a11,11,0,0,1-7.841-18.715Z"
                    transform="matrix(-0.695, 0.719, -0.719, -0.695, 323.368, 107.672)"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};
export default MessageRight;
