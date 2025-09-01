interface MeetingIdPageProps {
  params: Promise<{ meetingId: string }>;
}

export default async function MeetingPage({ params }: MeetingIdPageProps) {
  const { meetingId } = await params;

  return <div>MeetingPage</div>;
}
