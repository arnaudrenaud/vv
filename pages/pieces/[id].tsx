import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PieceDetails() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
}
