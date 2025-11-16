import * as SecureStore from "expo-secure-store";

export const TokenService = {
  saveTokens: async ({ accessToken, refreshToken }) => {
    await SecureStore.setItemAsync("accessToken", accessToken);
    await SecureStore.setItemAsync("refreshToken", refreshToken);
  },

  getAccessToken: () => SecureStore.getItemAsync("accessToken"),
  getRefreshToken: () => SecureStore.getItemAsync("refreshToken"),

  clear: async () => {
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("refreshToken");
  }
};
