const handler = async (req, res) => {
  const abortController = new AbortController();
  if (req.method !== 'POST') {
    res.status(400).json({ message: '올바르지 않은 요청입니다.' });
  }
  try {
    const response = await fetch(
      `http://localhost:8080/places/${req.body.placeId}/type/${req.body.type}/date/${req.body.date}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const dayList = await response.json();
    res.status(200).json({ dayList });
  } catch (err) {
    res.status(500).json({ err: '12312' });
  }
};
export default handler;
