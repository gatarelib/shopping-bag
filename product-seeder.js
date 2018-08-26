const Product = require('./models/Product');

const mongoose = require('mongoose');

var products = [
    new Product({
        _id: '1',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        name: 'T-shirt-1',
        description: 'Awesome Game!!!!',
        price: 10,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '2',
        image: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        name: 'T-shirt-2',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '3',
        image: 'https://support.activision.com/servlet/servlet.FileDownload?file=00PU000000Rq6tz',
        name: 'T-shirt-3',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '4',
        image: 'https://pmcdeadline2.files.wordpress.com/2014/02/minecraft__140227211000.jpg',
        name: 'T-shirt-4',
        description: 'Now that is super awesome!',
        price: 15,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '5',
        image: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        name: 'T-shirt-5',
        description: 'I died!',
        price: 50,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '6',
        image: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        name: 'T-shirt-6',
        description: 'I died!',
        price: 50,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '7',
        image: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        name: 'T-shirt-7',
        description: 'I died!',
        price: 50,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    }),
    new Product({
        _id: '8',
        image: 'https://d1r7xvmnymv7kg.cloudfront.net/sites_products/darksouls3/assets/img/DARKSOUL_facebook_mini.jpg',
        name: 'T-shirt-8',
        description: 'I died!',
        price: 50,
        sizeQuantity: {
            total: 400,
            s: 100,
            m: 100,
            l: 100,
            xl: 100
        }
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        if(err) {
            console.log(err);
        }
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
