// const mockAxios = jest.genMockFromModule('axios')
// mockAxios.post = jest.fn(() => mockAxios)
// export default mockAxios

import axios from 'axios'
const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    create: () => axios,
    defaults: {
        adapter: {},
    },
};

export default mockAxios;