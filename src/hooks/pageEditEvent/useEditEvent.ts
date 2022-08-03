import useQueryEventDetail from '../useQueryEventDetail';

export default function useEditEvent(id: string) {
  const { data, isFetching } = useQueryEventDetail(id);
  return { evento: data, isLoading: isFetching };
}
