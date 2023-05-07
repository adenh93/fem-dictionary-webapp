import { useEffect, useMemo, ChangeEventHandler, useState } from "react";
import _debounce from "lodash.debounce";
import useRequest from "@app/hooks/useRequest";
import { getDictionaryWord } from "@app/lib/api/dictionary";

export default function useDictionarySearch(initialWord?: string) {
  const [inputError, setInputError] = useState<string | null>(null);
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

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const search = e.target.value;

    if (!search) return setInputError("Whoops, can't be empty...");

    setInputError(null);
    searchWord(search);
  };

  const onUpdateInput = useMemo(() => _debounce(handleSearch, 300), []);

  useEffect(() => {
    return () => {
      onUpdateInput.cancel();
    };
  }, []);

  return { words, inputError, notFound, loading, error, onUpdateInput };
}
