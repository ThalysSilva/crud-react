import useQueryEventDetail from './useQueryEventDetail';

export default function useEventDetail(id: string) {
  const { data, isFetching } = useQueryEventDetail(id);
  return { evento: data, isLoading: isFetching };
}
