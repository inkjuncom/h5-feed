import useSWR from "swr";
import type { SWRConfiguration, SWRResponse } from "swr";
import apiClient from "./axios";

export interface RequestConfig {
  url: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  data?: Record<string, any> | FormData;
  params?: Record<string, any>;
  headers?: Record<string, string | number | boolean>;
}

export const fetcher = async <T>(config: RequestConfig): Promise<T> => {
  try {
    const response = await apiClient.request<T>({
      url: config.url,
      method: config.method,
      data: config.data,
      params: config.params,
      headers: config.headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const usePost = <T>(
  config: RequestConfig,
  swrConfig?: SWRConfiguration<T>,
): SWRResponse<T> => {
  config.method = "post";
  return useSWR<T>(config.url, () => fetcher<T>(config), swrConfig);
};
