const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(400).json({ message: '올바르지 않은 요청입니다.' });
  }
  try {
    const response = await fetch(
      `http://localhost:8080/places/${req.body.placeId}/type/${req.body.type}/date/${req.body.date}/startTime/${req.body.startTime}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const timeList = await response.json();
    res.status(200).json({ timeList });
  } catch (err) {
    res.status(500).json({ err });
  }
};
export default handler;
