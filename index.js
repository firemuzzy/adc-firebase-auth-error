import admin from 'firebase-admin';

var app = admin.initializeApp({
  projectId: "<YOUR_PROJECT_ID>",
  credential: admin.credential.applicationDefault()
});

async function test() {
  const v = await app.auth().getUser("<YOU USER ID>")
  const ids = v.users.map(v => v.uid)

  return uid
}


test().then( v => {
  console.log("data:", v)
}).catch( e => {
  console.error(e)
})
