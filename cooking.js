async function setupMovieNight() {
  cooking();
  salt();
}

async function cooking() {
  for (let index = 0; index < 1000; index++) {
    console.log("cooking times" + index);
  }
}

async function salt() {
  for (let index = 0; index < 1000; index++) {
    console.log("salt times" + index);
  }
}

setupMovieNight();
