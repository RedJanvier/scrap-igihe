const request = require('request');
const cheerio = require('cheerio');

const getTags = (link) => {
    return link.split('/', 2).filter(l => l !== 'article');
}

exports.get_all = (req, res, next) => {
    const posts = [];
    request ('https://igihe.com', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            $('.article-wrap').each((i, el) => {
                const title = $(el).find('.homenews .homenews-title a').text();
                const url = $(el).find('.homenews-title a').attr('href');
                const time = $(el).find('.time a span').text();
                const image = 'https://www.igihe.com/' + $(el).find('.homenews a img').attr('data-original');
                if (typeof url !== 'undefined' && url.length > 0 && title.length) {
                    
                    posts.push({
                        title,
                        image,
                        url,
                        time,
                        tags: getTags(url)
                    });
                }
            });

            res.status(200).json(posts);
        }
    });
};

exports.get_single = (req, res, next) => {
    const url = req.query.url;
    request (`http://www.igihe.com/${url}`, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const images = [];
            const post = {};
            post['title'] = $('.title-article').text();
            post['date'] = $('.date_x').text();
            post['body'] = $('.text-article .row div:nth-child(3)').text().replace(/\t+/g, '');
            post['tags'] = getTags(url);
            $('img.artimgv5').each((i, el) => {
                images.push('https://www.igihe.com/' + $(el).attr('src'));
            });
            post['images'] = images;
            res.status(200).json(post);
        }
    });
};