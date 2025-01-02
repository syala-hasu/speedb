import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

const axiosClient = axios.create()

export interface MockConfig {
    status: number;
    data: unknown;
    delay?: number;
}

const get = (endpoint: string, mockConfig?: MockConfig) => {
    if (mockConfig) {
        const mock = new MockAdapter(axiosClient, {
            delayResponse: mockConfig.delay
        });
        mock.onGet(endpoint).reply(mockConfig.status, mockConfig.data);
    }

    return axiosClient.get(endpoint);
}

export default {get}
