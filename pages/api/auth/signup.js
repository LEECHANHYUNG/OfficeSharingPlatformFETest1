async function hanlder(req, res) {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.password;
  const enteredName = req.body.name;
  const enteredPhone = req.body.phoneNumber;
  const enteredJob = req.body.job;
  const enteredPreferType = req.body.preferType;
  if (req.method === 'POST') {
    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        name: enteredName,
        phoneNumber: enteredPhone,
        job: enteredJob,
        preferType: enteredPreferType,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        res.status(200).json(data);
      });
  }
}

export default hanlder;
