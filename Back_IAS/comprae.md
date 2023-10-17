const form = new FormData()
form.append('image_file', photo)
form.append('prompt', 'a cozy marble kitchen with wine glasses')

fetch('https://clipdrop-api.co/replace-background/v1', {
method: 'POST',
headers: {
'x-api-key': YOUR_API_KEY,
},
body: form,
})
.then(response => response.arrayBuffer())
.then(buffer => {
// buffer here is a binary representation of the returned image
})
_/_//_/_//\*//
const form = new FormData()
form.append('image_file', photo)

fetch('https://clipdrop-api.co/remove-background/v1', {
method: 'POST',
headers: {
'x-api-key': YOUR_API_KEY,
},
body: form,
})
.then(response => response.arrayBuffer())
.then(buffer => {
// buffer here is a binary representation of the returned image
}) \*_/_/_/_/_/_//1
const form = new FormData()
form.append('image_file', photo)

fetch('https://clipdrop-api.co/remove-text/v1', {
method: 'POST',
headers: {
'x-api-key': YOUR_API_KEY,
},
body: form,
})
.then(response => response.arrayBuffer())
.then(buffer => {
// buffer here is a binary representation of the returned image
})
