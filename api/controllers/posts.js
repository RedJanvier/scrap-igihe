const request = require('request');
const cheerio = require('cheerio');

const db = require('../config/db');

const getTags = (link) => {
    return link.split('/', 2).filter(l => l !== 'article');
}

exports.get_all = (req, res, next) => {
    let posts = [];
    db('posts')
    .select('*')
    .then(savedPosts => {
        posts = [...savedPosts];
        const titles = posts.map(post => post.title);
        request ('https://igihe.com', (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                $('.article-wrap').each((i, el) => {
                    const title = $(el).find('.homenews .homenews-title a').text();
                    const url = $(el).find('.homenews-title a').attr('href');
                    const image = 'https://www.igihe.com/' + $(el).find('.homenews a img').attr('data-original');
                    if (typeof url !== 'undefined' && url.length > 0 && title.length) {
                        if(!titles.includes(title)){
                            request(`http://www.igihe.com/${url}`, (error, response, html) => {
                                if (!error && response.statusCode == 200) {
                                    const $ = cheerio.load(html);
                                    const images = [];
                                    const post = {};
                                    post['url'] = url;
                                    post['front_image'] = image;
                                    post['title'] = $('.title-article').text();
                                    post['date'] = $('.date_x').text();
                                    post['body'] = $('.text-article .row div:nth-child(3)').text().replace(/\t+/g, '').replace(/[\n\n]+/g, '\n');
                                    post['tags'] = getTags(url);
                                    $('img.artimgv5').each((i, el) => {
                                        images.push('https://www.igihe.com/' + $(el).attr('src'));
                                    });
                                    post['images'] = images;
                                    db.insert(post)
                                    .into('posts')
                                    .returning('*')
                                    .then(post => {
                                        console.log(post.title, ' was added to database in posts table.');
                                        posts.unshift(post);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        res.status(500).json({
                                            message: 'Unable to save post to database'
                                        });
                                    });
                                }
                            });
                        }
                    }
                });
    
                res.status(200).json(posts);
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Unable to receive posts from database'
        });
    });

};

exports.get_single = (req, res, next) => {
    const url = req.query.url;
    // request (`http://www.igihe.com/${url}`, (error, response, html) => {
    //     if (!error && response.statusCode == 200) {
    //         const $ = cheerio.load(html);
    //         const images = [];
    //         const post = {};
    //         post['front_image'] = 'http://www.igihe.com/' + $('.text-article img').attr('src');
    //         post['title'] = $('.title-article').text();
    //         post['date'] = $('.date_x').text();
    //         post['body'] = $('.text-article .row div:nth-child(3)').text().replace(/\t+/g, '').replace(/[\n\n]+/g, '\n');
    //         post['tags'] = getTags(url);
    //         $('img.artimgv5').each((i, el) => {
    //             images.push('https://www.igihe.com/' + $(el).attr('src'));
    //         });
    //         post['images'] = images;
            db('posts').select('title', 'body', 'images', 'tags', 'date')
            .where('url', '=', url)
            .then(posts => {
                res.status(200).json({ message:'posts successfully fetched', posts });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Unable to save post to database' });
            });
    //     }
    // });
};