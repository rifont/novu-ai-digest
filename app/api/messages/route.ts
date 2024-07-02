import { SUBSCRIBER_ID } from '@/constants/subscriber';
import { aiDigest } from '@/lib/novu/workflows';

export async function POST(request: Request) {
  const res = await request.json();

  console.log(res);

  try {
    const result = await aiDigest.trigger({
      to: [SUBSCRIBER_ID],
      payload: {
      message: res.message,
        digestDuration: res.digestDuration,
      },
    });

    console.log(result);

    return Response.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Failed to trigger AI digest' });
  }
}
