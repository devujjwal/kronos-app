import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `Kronos: ${title}`;
  }, [title]);
};

export default usePageTitle;
