const fs = require("fs");
const { createCanvas } = require("canvas");

// Create 192x192 icon
const canvas192 = createCanvas(192, 192);
const ctx192 = canvas192.getContext("2d");

// Background
ctx192.fillStyle = "#0ea5e9";
ctx192.fillRect(0, 0, 192, 192);

// Simple logo design
ctx192.fillStyle = "white";
ctx192.beginPath();
ctx192.arc(96, 96, 60, 0, 2 * Math.PI);
ctx192.fill();

ctx192.fillStyle = "#0ea5e9";
ctx192.beginPath();
ctx192.arc(96, 96, 40, 0, 2 * Math.PI);
ctx192.fill();

// Save as PNG
const buffer192 = canvas192.toBuffer("image/png");
fs.writeFileSync("public/icon-192x192.png", buffer192);

// Create 512x512 icon
const canvas512 = createCanvas(512, 512);
const ctx512 = canvas512.getContext("2d");

// Background
ctx512.fillStyle = "#0ea5e9";
ctx512.fillRect(0, 0, 512, 512);

// Simple logo design
ctx512.fillStyle = "white";
ctx512.beginPath();
ctx512.arc(256, 256, 160, 0, 2 * Math.PI);
ctx512.fill();

ctx512.fillStyle = "#0ea5e9";
ctx512.beginPath();
ctx512.arc(256, 256, 106, 0, 2 * Math.PI);
ctx512.fill();

// Save as PNG
const buffer512 = canvas512.toBuffer("image/png");
fs.writeFileSync("public/icon-512x512.png", buffer512);

console.log("Icons generated successfully!");
