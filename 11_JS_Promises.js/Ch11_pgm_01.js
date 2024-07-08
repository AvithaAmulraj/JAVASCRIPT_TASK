const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 5000)
  }

  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }

  doSomething(callback);