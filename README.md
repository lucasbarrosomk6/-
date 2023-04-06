This is a map-helper to better visualize AI lead DND Campaigns.

Below is a schema you will need to give the ai so it always gives the correct info to the app.

{
"size": number,
"obstacles": [
{
"position": {
"row": number,
"col": number
},
"type": string
}
],
"entities": [
{
"name": string,
"type": string,
"position": {
"row": number,
"col": number
},
"stats": {
"health": number,
"armor": number,
"damage": number
},
"status": string
}
]
}
