// src/hooks/usePayloadApi.ts
import { fetchFromPayload } from '../services/payloadClient';

/**
 * Fetch data from a Payload CMS collection or endpoint
 * @param collection - Collection name (e.g. "projects")
 * @param query - Optional query params (e.g. { limit: 5 })
 */
export async function usePayloadApi(
  collection: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: Record<string, any> = {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const queryString = new URLSearchParams(query).toString();
  const endpoint = `/${collection}${queryString ? `?${queryString}` : ''}`;
  return await fetchFromPayload(endpoint);
}
