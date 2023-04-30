import { useEffect, useMemo, ChangeEventHandler } from "react";
import _debounce from "lodash.debounce";
import useRequest from "@app/hooks/useRequest";
import { getDictionaryWord } from "@app/api/dictionary";

export default function useDictionarySearch() {
  const [searchWord, { data: words, loading, error }] =
    useRequest(getDictionaryWord);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    searchWord(e.target.value);

  const onUpdateInput = useMemo(() => _debounce(handleSearch, 300), []);

  useEffect(() => {
    return () => {
      onUpdateInput.cancel();
    };
  }, []);

  return { words, loading, error, onUpdateInput };
}
