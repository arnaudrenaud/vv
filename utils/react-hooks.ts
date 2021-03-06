import { useEffect, useState } from 'react';
import { getPageLocation } from './window';

export const useScrollNearPageBottom = (
  action: Function,
  triggerCondition: any
): void => {
  const [applicablePageLocation] = useState(getPageLocation());

  const onScrollToBottom = () => {
    const currentLocation = getPageLocation();
    if (
      window.scrollY > document.body.scrollHeight - 1.5 * window.innerHeight &&
      currentLocation === applicablePageLocation
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
  fetchMore: Function
) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [items, setItems] = useState(initialItems);

  const addNextPageItem = async () => {
    const nextPageNumber = currentPageNumber + 1;
    const nextPageItems = (await fetchMore(nextPageNumber)) as unknown[];
    setCurrentPageNumber(nextPageNumber);
    setItems([...items, ...nextPageItems]);
  };

  useScrollNearPageBottom(addNextPageItem, items.length);

  return [items];
};
