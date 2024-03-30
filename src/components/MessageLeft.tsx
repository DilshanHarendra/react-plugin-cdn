import { Message } from '../store/reducers/messages/types';
import { FC } from 'react';

interface PropsI {
    message: Message;
}
const MessageLeft: FC<PropsI> = ({ message }) => {
    return (
        <div className="w-4/5 bg-primary p-2  mt-4 ml-auto mr-2 relative text-white rounded-md">
            <p>{message?.message}</p>
            <svg
                className="w-6 h-6 absolute -right-2 -bottom-2 text-primary z-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 325.269 325.269">
                <path
                    id="Polygon_1"
                    data-name="Polygon 1"
                    d="M144.659,7.97a11,11,0,0,1,15.682,0L286.587,136.285A11,11,0,0,1,278.746,155H26.254a11,11,0,0,1-7.841-18.715Z"
                    transform="translate(215.668 325.269) rotate(-135)"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};
export default MessageLeft;
