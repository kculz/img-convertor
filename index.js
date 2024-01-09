const { readdirSync, rmSync } = require('fs');
const sharp = require('sharp')
const path = require('path');

const dir = './img/';
const files = readdirSync(dir)

files.forEach(file => {
    if (path.parse(file).ext !== 'png') {
        sharp(`${dir}${file}`).resize(240, 240).toFile(`${dir}${path.parse(file).name}.png`).then( res => {
            console.log(`${file} converted succeffully.`)
            rmSync(`${dir}${file}`)

        }).catch(err => {
            console.log(err)
        })
    }
});