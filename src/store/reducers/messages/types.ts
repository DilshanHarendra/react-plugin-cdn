export interface Message {
    id: number;
    me: boolean;
    message: string;
    createAt: string;
}

export interface MessageReducerType {
    messages: Message[];
}
