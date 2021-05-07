import { useEffect, useState } from 'react';

import { queryApi } from './query-api';

export const useScrollNearPageBottom = (
  action: Function,
  triggerCondition: any
): void => {
  const onScrollToBottom = () => {
    if (
      window.scrollY >
      document.body.scrollHeight - 1.5 * window.innerHeight
    ) {
      window.removeEventListener('scroll', onScrollToBottom);
      action();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollToBottom);

    return () => {
      window.removeEventListener('scroll', onScrollToBottom);
    };
  }, [triggerCondition]);
};

export const useInfiniteScrollPagination = (
  initialItems: unknown[],
  ressourceName: string
) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [items, setItems] = useState(initialItems);

  const addNextPageItem = async () => {
    const nextPageNumber = currentPageNumber + 1;
    const nextPageItems = (await queryApi(ressourceName, {
      pageNumber: nextPageNumber,
    })) as unknown[];
    setCurrentPageNumber(nextPageNumber);
    setItems([...items, ...nextPageItems]);
  };

  useScrollNearPageBottom(addNextPageItem, items.length);

  return [items];
};