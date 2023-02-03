import create from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import $api from '../utils/api';

export const useUser = create(
    devtools(
        persist(
            (set) => ({
                user: {
                    userid: 0,
                    displayName: 'Максим П.Нестеров',
                    phoneNumber: '+79228960175',
                    email: 'nimp@inbox.ru',
                    serviceCodeList: [781, 836, 988],
                },
                token: '',
                loading: false,
                error: null,
                serviceList: [],
                addService: (code) =>
                    set((state) => {
                        if (!state.serviceCodeList.find((item) => item.code === code)) {
                            return {
                                user: { ...state.user, serviceCodeList: [...state.serviceCodeList, code] },
                            };
                        }
                        return state;
                    }),

                getServiceList:  () => set(async(state) => {
                    const response = await $api.get('/service/list');
                    if (response) {
                        return {...state, serviceList: response.data }
                    }
                    return state;

                }),
                removeUser: () => set(() => {
                    return { user: null }
                }),
                updateUser: async (user) => set(state => {
                    return {...state, user: {...state.user, ...user}}
                }),
                setToken: (token) => set(state => {
                    return {...state, token}
                })
            }), {
                name: 'user-session',
                getStorage: () => localStorage
            }
        )
    )
);

export const useMobile = create((set) => ({
    isMobile: false,
    setIsMobile: (value) => set(state => ({...state, isMobile: value}))
}))