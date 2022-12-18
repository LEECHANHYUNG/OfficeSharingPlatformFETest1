const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Wrong Http Method' });
  }
  if (req.method === 'POST') {
    try {
      const response = await fetch(`${process.env.baseURL}main/search`, {
        method: req.method,
        body: JSON.stringify({
          searchWord: req.body.searchWord,
        }),
        headers: req.headers,
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

export default handler;
