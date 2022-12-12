import axios from 'axios';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession();
  if (req.method === 'POST') {
    try {
      const response = await axios({
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5Iiwic3RhdHVzIjoiYWNjZXNzIiwiaWF0IjoxNjcwNjgzNjMyMDQ5fQ.IxyrkDVhSIotyR7pa8Vfx4r5sSJjeKkPU67rYD741To',
          'Content-Type': 'application/json',
        },
        url: `http://localhost:8080/places/${req.body.id}/book`,
        method: 'post',
        data: {
          selectedType: req.body.selectedType,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      });
      if (response.status === 200) {
        res.status(200).send(response.data);
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      res.status(500).send(error.response.data);
    }
  }
};

export default handler;
