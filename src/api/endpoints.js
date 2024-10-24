import client from './client';

export const api = {
    // sample api call 
    getHomeContent: async () => {
        try {
            const response = await client.get('/home');
            return response.data; // you are supposed to receive an json "data": {"header": "header.mp4"}
        } catch (error) {
            console.log('Error', error);
            return {data: {header: '../../assets/default/plane.png'}}
        }
    }
}