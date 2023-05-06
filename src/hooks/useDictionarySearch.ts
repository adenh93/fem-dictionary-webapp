import { useEffect, useMemo, ChangeEventHandler } from "react";
import _debounce from "lodash.debounce";
import useRequest from "@app/hooks/useRequest";
import { getDictionaryWord } from "@app/lib/api/dictionary";

export default function useDictionarySearch(initialWord?: string) {
  const [searchWord, { data: words, loading, error }] =
    useRequest(getDictionaryWord);

  const notFound = error?.status === 404;

  // TODO: This could be moved into the useRequest hook as an
  // optional initial request?
  useEffect(() => {
    if (initialWord) {
      searchWord(initialWord);
    }
  }, [initialWord]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    searchWord(e.target.value);

  const onUpdateInput = useMemo(() => _debounce(handleSearch, 300), []);

  useEffect(() => {
    return () => {
      onUpdateInput.cancel();
    };
  }, []);

  return { words, notFound, loading, error, onUpdateInput };
}
