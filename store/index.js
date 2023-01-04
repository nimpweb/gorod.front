import create from 'zustand';

export const useUser = create((set) => ({
    user: {
        displayName: 'Максим П.Нестеров',
        firstName: 'Нестеров',
        middleName: 'Максим',
        lastName: 'Петрович',
        phoneNumber: '+79228960175',
        email: 'nimp@inbox.ru',
        serviceCodeList: [781, 836, 988],
    },
    loading: false,
    error: null,
    addService: (code) =>
        set((state) => {
            if (!state.serviceCodeList.find((item) => item.code === code)) {
                return {
                    user: { ...state.user, serviceCodeList: [...state.serviceCodeList, code] },
                };
            }
            return state;
        }),
}));
