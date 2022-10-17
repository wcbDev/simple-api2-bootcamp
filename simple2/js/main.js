
const getActivity = () => {

  fetch (`https://www.boredapi.com/api/activity`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    console.log(data.activity)
    document.getElementById('activity').innertext = data.activity
    document.getElementById('link').innertext = data.link
    document.getElementById('participants').innertext = data.particpants
    document.getElementById('busywork').innertext = data.type

  })
    .catch(err => {
        console.log(`error ${err}`)
  })
}

document.querySelector("#button").addEventListener("click", getActivity);
