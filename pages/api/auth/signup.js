import axios from 'axios';
async function handler(req, res) {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.password;
  const enteredName = req.body.name;
  const enteredPhone = req.body.phoneNumber;
  const enteredJob = req.body.job;
  const enteredPreferType = req.body.preferType;
  if (req.method === 'POST') {
    axios({
      method: 'post',
      url: 'http://localhost:8080/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: enteredEmail,
        password: enteredPassword,
        name: enteredName,
        phoneNumber: enteredPhone,
        job: enteredJob,
        preferType: enteredPreferType,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          res.status(200).json({ message: '회원가입 성공' });
        } else if (response.status === 400) {
          throw new Error(response.data.message);
        }
      })
      .catch((err) => {
        res.status(400).send(err.resposne.data.message);
      });
  }
}

export default handler;
