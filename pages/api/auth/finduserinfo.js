import axios from 'axios';

const handler = async (req, res) => {
  if (req.body.url === 'main/pre-check') {
    const response = await axios({
      url: `http://localhost:8080/main/pre-check`,
      method: 'post',
      data: {
        email: req.body.email,
        tel: req.body.tel,
      },
    });
    if (response.status === 200) {
      res.status(200).send(response.data.msg);
    } else {
      res.status(500).send(response.data.msg);
    }
  } else if (req.body.url === 'main/findPw') {
    const response = await axios({
      url: `http://localhost:8080/main/findPw`,
      method: 'post',
      data: {
        email: req.body.email,
        tel: req.body.tel,
        password: req.body.password,
        checkPassword: req.body.checkPassword,
      },
    });
    if (response.status === 200) {
      res.status(200).send(response.data.msg);
    } else {
      res.status(500).send(response.data.msg);
    }
  }
};

export default handler;
