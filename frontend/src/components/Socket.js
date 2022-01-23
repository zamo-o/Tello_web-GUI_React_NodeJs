import io from 'socket.io-client';

const socket = io('http://localhost:2121');

export default socket;