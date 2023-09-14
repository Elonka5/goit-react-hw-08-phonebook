export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectLoading = state => state.contacts.isLoading;

export const selectUser = state => state.auth.user;

export const selectIsLogin = state => state.auth.isLogin;

export const selectIsRefreshing = state => state.auth.isRefresh;

// export const selectError = state => state.contacts.error;
