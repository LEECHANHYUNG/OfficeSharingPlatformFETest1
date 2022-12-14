import axios from 'axios';

const handler = async (req, res) => {
  try {
    const response = await axios({
      url: `http://localhost:8080/payment/${req.body.company}`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.body.accessToken,
      },
      data: {
        reservationId: req.body.reservationId,
        payWay: 'PREPAYMENT',
        payType: req.body.payType,
        payMileage: +req.body.useMileage,
      },
    });
    if (response.status === 200) {
      res.status(200).send(response.data);
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    res.status(500).send(error.response.data);
  }
};
export default handler;
