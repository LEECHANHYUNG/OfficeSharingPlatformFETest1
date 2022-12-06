const handler = async (req, res) => {
  try {
    const response = await fetch(
      `http://localhost:8080/places/${req.body.placeId}/type/${req.body.type}/date/${req.body.date}/startTime/${req.body.startTime}`
    );

    if (response.status === 400) {
      console.log(response);
      throw new Error(response.statusText.message);
    }
    const timeList = await response.json();
    res.status(200).json({ timeList });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
export default handler;
