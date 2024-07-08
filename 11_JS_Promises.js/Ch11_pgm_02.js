const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 4000)
  }

  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })